export interface AuthState {
  token: string;
  isGuest: boolean | any;
}

export const initialState: AuthState = {
  token: '',
  isGuest: null,
};
