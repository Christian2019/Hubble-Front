import { Event } from './event'

export class User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  _id: string;
  password: string;
  role: string;
  favoritedEvents: Event[];
  participatedEvents: Event[];
  createdEvents: Event[];
}
