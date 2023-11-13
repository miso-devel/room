import { Env, Handler } from "../deps.ts";

export type ResObj = Record<string | number | symbol, never>;
export type WrapHandler<P extends string> = Handler<
  Env,
  P,
  ResObj,
  Promise<Response>
>;
