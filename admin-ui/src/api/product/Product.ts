import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  id: string;
  order?: Array<Order>;
  updatedAt: Date;
};
