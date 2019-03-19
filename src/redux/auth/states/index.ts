export interface AuthState {
  token: string;
  selfId: string;
  isGuest: boolean | null;
}

export const initialState: AuthState = {
  token: '',
  selfId: '',
  isGuest: null,
};
