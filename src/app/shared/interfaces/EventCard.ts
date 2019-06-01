import { ActionButtonTextEnum } from '../enums/ActionButtonTextEnum';
import { ActionTypesEnum } from '../enums/ActionTypesEnum';

interface EventCard {
  actionType: ActionTypesEnum,
  buttonText: ActionButtonTextEnum,
  id: string,
  title: string,
  description: string,
  tag: string,
  category: string,
  status: string,
  confirmedUsers: string,
  picture: string,
  startDate: string,
  endDate: string,
  price: string,
  hours: string,
  address: {
    street: string,
    number: number,
    complements: string,
    zipCode: string,
    district: string,
    city: string,
    state: string
  },
  createdBy: string,
  approvedBy: string,
  createdAt: string,
  updatedAt: string
}
export {EventCard};
