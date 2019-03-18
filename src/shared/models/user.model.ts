export class UserModel {
  _id: string;
  username: string;
  email: string;
  
  constructor(obj: UserModel) {
    this._id = obj._id;
    this.username = obj.username;
    this.email = obj.email;
  }
}
