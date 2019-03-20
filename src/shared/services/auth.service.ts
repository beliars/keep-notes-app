import axios from 'axios';
import {Cookies} from "react-cookie";
import { from } from 'rxjs';

import { SignUpFormData } from '../../components/pages/SignUp/SignUpForm/SignUpForm';
import { SignInFormData } from '../../components/pages/SignIn/SignInForm/SignInForm';

const cookies = new Cookies();

interface SessionData {
  selfId: string,
  token: string
}

class AuthService {
 
  signUp(data: SignUpFormData) {
    return from(axios.post('/signup', data));
  }
  
  signIn(data: SignInFormData) {
    return from(axios.post('/signin', data));
  }
  
  signOut() {
    return from(axios.get('/signout'));
  }
  
  setSessionData({selfId, token}: SessionData) {
    cookies.set('auth_selfId', selfId);
    cookies.set('auth_token', token);
  }
  
  removeSessionData() {
    cookies.remove('auth_selfId');
    cookies.remove('auth_token');
  }
  
  get getSessionId(): string {
    return cookies.get('auth_selfId');
  }
  
  get getSessionToken(): string {
    return cookies.get('auth_token');
  }
  
  get isSetSessionData(): boolean {
    return this.getSessionId !== "undefined" &&
      this.getSessionToken !== "undefined" &&
      (!!this.getSessionId && !!this.getSessionToken);
  }

}

export default new AuthService();