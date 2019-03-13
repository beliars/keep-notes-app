import axios from 'axios';
import {Cookies} from "react-cookie";

import { SignUpFormData } from '../../components/pages/SignUp/SignUpForm/SignUpForm';
import { from } from 'rxjs';

const baseUrl = 'http://localhost:2380';
const cookies = new Cookies();

class AuthService {
 
  signUp(data: SignUpFormData) {
    return from(axios.post(`${baseUrl}/signup`, data));
  }
  
  signIn(data: SignUpFormData) {
    return from(axios.post(`${baseUrl}/signin`, data));
  }
  
  setToken(token: string) {
    cookies.set('auth_token', token);
  }

}

export default new AuthService();