/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export type components = {
  schemas: {
    User: external["schemas/user/model.json"];
    Workshop: external["schemas/workshop/model.json"];
    Event: external["schemas/event/model.json"];
    EventInput: external["schemas/event/input.json"];
    EventOutput: external["schemas/event/output.json"];
    Speaker: external["schemas/speaker/model.json"];
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
};

export type $defs = Record<string, never>;

export type external = {
  "schemas/event/input.json": {
    event: {
      workshopId: external["schemas/event/model.json"]["workshopId"];
      theme: external["schemas/event/model.json"]["theme"];
      date: external["schemas/event/model.json"]["date"];
    };
    speakerIds: string[];
  };
  "schemas/event/model.json": {
    id: string;
    workshopId: string;
    theme: string;
    date: string;
    isCronTarget: boolean;
    createdAt: number;
    updatedAt?: number;
  };
  "schemas/event/output.json": {
    event: external["schemas/event/model.json"];
    speakers: external["schemas/speaker/model.json"][];
  };
  "schemas/speaker/model.json": {
    id: string;
    eventId: string;
    memberId: string;
    createdAt?: number;
    updatedAt?: number;
  };
  "schemas/user/model.json": {
    id: string;
    name: string;
    avatar: string;
    joinedAt: number;
  };
  "schemas/workshop/model.json": {
    id: string;
    title: string;
    description?: string;
    createdAt: number;
    updatedAt?: number;
  };
};

export type operations = Record<string, never>;
