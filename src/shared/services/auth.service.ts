import axios from 'axios';

import { SignUpFormData } from '../../components/pages/SignUp/SignUpForm/SignUpForm';
import { from } from 'rxjs';

const baseUrl = 'http://localhost:2380';

class AuthService {
 
  signup(data: SignUpFormData) {
    return from(axios.post(`${baseUrl}/signup`, data));
  }

}

export default new AuthService();