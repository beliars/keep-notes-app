import { UserPhoneModel } from './userPhone.model';

export class UserModel {
  _id?: string = null;
  fullName?: string = null;
  email?: string = null;
  userPhoneId?: string = null;
  userPhone?: UserPhoneModel = null;
  FBId?: string = null;
  roles?: {
    admin: boolean,
    regular: boolean,
  } = null;
  
  constructor(obj?: any) {
    for (const field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj && obj[field];
      }
    }
  }
}
