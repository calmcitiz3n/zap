export type Ui = {
  basket: Record<string, PayloadBasket[]>;
  ids: string[];
};
export type Sneakers = {
  [key: string]: SneakersData;
};
export type SneakersData = {
  size: any;
  count: number;
  price: number;
};
export type ActionBasket = {
  payload: any;
  type: string;
};
export type PayloadBasket = {
  size: any;
  count: number;
  price: number;
};
