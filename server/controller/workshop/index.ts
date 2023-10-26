import { Env, Handler } from "../../mod.ts";

const index: Handler<Env, "/woskshops", {}, Promise<Response>> = async (c) => {
  return c.json({});
};

const show: Handler<Env, "/workshops/:id", {}, Promise<Response>> = async (
  c,
) => {
  return c.json({});
};

const create: Handler<Env, "/workshops", {}, Promise<Response>> = async (c) => {
  return c.json({});
};

const update: Handler<Env, "/workshops", {}, Promise<Response>> = async (c) => {
  return c.json({});
};

const remove: Handler<Env, "/workshops", {}, Promise<Response>> = async (c) => {
  return c.json({});
};

export const Workshop = { index, show, create, update, remove };
