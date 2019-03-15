export interface AuthState {
  token: string;
  isGuest: boolean;
}

export const initialState: AuthState = {
  token: '',
  isGuest: true,
};
