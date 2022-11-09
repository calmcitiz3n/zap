export type Action = {
  payload: Payload[];
  type: string;
};
export enum statusType {
  idle = "idle",
  finish = "finish",
  start = "start",
  failed = "failed",
}
export type initialStateType = {
  entities: {};
  ids: [];
  status: any;
};
export type Payload = Record<string, Entity>;

export type Entity = {
  id: string;
  name?: string;
  assortment?: string[];
  createdAt?: string;
  updatedAt?: string;
};
