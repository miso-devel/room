export const PREFIX = [
  "workshop",
  "event",
  "member",
  "speaker",
] as const;

export type PREFIX = typeof PREFIX[number];
export type PREFIX_MAP = { [K in typeof PREFIX[number]]: K };

export const PREFIX_MAP = Object.fromEntries(
  PREFIX.map((value: PREFIX) => [value, value]),
) as PREFIX_MAP;
