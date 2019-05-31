import { ActionTypesEnum } from "../enums/ActionTypesEnum";
import { ActionButtonTextEnum } from "../enums/ActionButtonTextEnum";

interface EventCardObject {
  actionType: ActionTypesEnum,
  buttonText: ActionButtonTextEnum,
  events: [
    {
      id:string,
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
  ]
}
export {EventCardObject}
