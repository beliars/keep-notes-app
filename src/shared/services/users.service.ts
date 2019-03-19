import axios from 'axios';
import { from } from 'rxjs';

class UsersService {
  
  getSelfData(id: string) {
    return from(axios.get(`/users/${id}`));
  }

}

export default new UsersService();