export interface AuthState {
  token: string;
  selfId: string;
  isGuest: boolean;
}

export const initialState: AuthState = {
  token: '',
  selfId: '',
  isGuest: true,
};
