import { Address } from './address';

export class Event {
  address: Address;
  status: string;
  tag: any[];
  confirmedUsers: any[];
  _id: string;
  title: string;
  description: string;
  picture: string;
  price: number;
  hours: string;
  startDate: string;
  endDate: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}
