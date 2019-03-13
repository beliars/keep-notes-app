import axios from 'axios';
import {Cookies} from "react-cookie";

import { SignUpFormData } from '../../components/pages/SignUp/SignUpForm/SignUpForm';
import { from, of } from 'rxjs';

const baseUrl = 'http://localhost:2380';
const cookies = new Cookies();

class AuthService {
 
  signup(data: SignUpFormData) {
    return from(axios.post(`${baseUrl}/signup`, data));
  }
  
  setToken(token: string) {
    cookies.set('auth_token', token);
  }

}

export default new AuthService();