import * as fs from 'fs/promises';
import * as openAPI from './openAPI.json';
import $RefParser from '@apidevtools/json-schema-ref-parser';
import { ParserOptions } from '@apidevtools/json-schema-ref-parser/dist/lib/options';
import { FileInfo, JSONSchema } from '@apidevtools/json-schema-ref-parser/dist/lib/types';

let requiredDataStore = [];

const options: ParserOptions = {
  resolve: {
    file: {
      order: 1,
      read: async (fileInfo: FileInfo) => {
        const readResult = await fs.readFile(fileInfo.url, 'utf-8');
        const parsedResult = JSON.parse(readResult);
        requiredDataStore = Array.from(new Set([...requiredDataStore, ...parsedResult['required']]));
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
