import * as fs from 'fs/promises';
import * as path from 'path';
import * as openAPI from './openAPI.json';
import $RefParser from '@apidevtools/json-schema-ref-parser';
import { ParserOptions } from '@apidevtools/json-schema-ref-parser/dist/lib/options';
import { FileInfo, JSONSchema } from '@apidevtools/json-schema-ref-parser/dist/lib/types';

// openAPI.components.schemasにrequiredを追加するために一時的に保持する変数
let requiredDataStore = [];

const resolveRelativePath = (base: string, relative: string) => {
  const basePath = path.resolve(base);
  return path.resolve(path.dirname(basePath), relative);
};

const resolveArrayItemRef = async (schema: JSONSchema, path: string) => {
  for (const [_, value] of Object.entries(schema)) {
    if (value['type'] === 'array' && value['items'] && value['items']['$ref']) {
      const readFilePath = resolveRelativePath(path, value['items']['$ref']);
      const readResult = await fs.readFile(readFilePath, 'utf-8');
      const parsedArrayItemResult = JSON.parse(readResult);
      // もしitemsの中に$refがあったら再帰的に処理するためにresolveArrayItemRefを呼び出す。再帰的に呼ばなければここで処理が終わってしまうので
      if (value['items']['$ref']) await resolveArrayItemRef(parsedArrayItemResult['properties'], readFilePath);
      // requiredが入ってしまうがschemaの生成には問題ないのでそのまま代入する。何か問題が起きたら修正する
      value['items'] = parsedArrayItemResult;
    }
  }
};

const options: ParserOptions = {
  resolve: {
    file: {
      order: 1,
      read: async (fileInfo: FileInfo) => {
        const readResult = await fs.readFile(fileInfo.url, 'utf-8');
        const parsedResult = JSON.parse(readResult);
        requiredDataStore = Array.from(new Set([...requiredDataStore, ...parsedResult['required']]));
        // $RefParser.dereferenceはおそらく"$ref"の時は自動で再帰的に解決してくれるが{ type:array, items:$ref }の時は見てくれなさそうなのでこちら側で対応する必要がある
        // なのでここでitemsの中に$refがあったら再帰的に処理するためにresolveArrayItemRefを呼び出す。
        await resolveArrayItemRef(parsedResult['properties'], fileInfo.url);
        return parsedResult['properties'];
      },
    },
  },
};

const replaceRefs = async (schema: JSONSchema) => {
  for (const [key, value] of Object.entries(schema)) {
    try {
      const resolverRef = await $RefParser.dereference(value['$ref'], options);
      Object.assign(schema, {
        [key]: { type: 'object', properties: { ...resolverRef }, required: requiredDataStore },
      });
      requiredDataStore = [];
    } catch (error) {
      throw Error(error);
    }
  }
};

(async () => {
  await replaceRefs(openAPI.components.schemas);
  await fs.writeFile('./parsedOpenAPI.json', JSON.stringify(openAPI, null, 2), 'utf-8');
  console.log('Ref Parse Finished!!!');
})();
