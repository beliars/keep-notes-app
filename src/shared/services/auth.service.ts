import axios from 'axios';
import {Cookies} from "react-cookie";
import { from } from 'rxjs';

import { SignUpFormData } from '../../components/pages/SignUp/SignUpForm/SignUpForm';

const cookies = new Cookies();

interface SessionData {
  selfId: string,
  token: string
}

class AuthService {
 
  signUp(data: SignUpFormData) {
    return from(axios.post('/signup', data));
  }
  
  signIn(data: SignUpFormData) {
    return from(axios.post('/signin', data));
  }
  
  setSessionData({selfId, token}: SessionData) {
    cookies.set('auth_selfId', selfId);
    cookies.set('auth_token', token);
  }
  
  get getSessionId(): string {
    return cookies.get('auth_selfId');
  }
  
  get getSessionToken(): string {
    return cookies.get('auth_token');
  }
  
  isSetSessionData(): boolean {
    return !!this.getSessionId && !!this.getSessionToken;
  }

}

export default new AuthService();