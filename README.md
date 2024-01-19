# room

## コマンド

`client`起動

```sh
task client-up
```

`server`起動

```sh
task server-up
```

`docs`生成

```sh
task generate-type
```

## 構成

### client

> webアプリケーションのクライアント

- 技術：`TypeScript`、`Next.js`、`Tailwind.css`
- デプロイ：`Vercel`

### server

> webアプリケーションのサーバー

- 技術：`TypeScript`、`Deno`、`Hono`
- DB：`Deno KV`
- デプロイ：`Deno Deploy`

### docs

> webアプリケーションで使う共通の型を管理している

- 技術：`TypeScript`、`open-api`、`openapi-typescript`
