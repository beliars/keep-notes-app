export interface ApplicationState {
  appWidth: number;
  isShowSidebar: boolean;
}

export const initialState: ApplicationState = {
  appWidth: 0,
  isShowSidebar: true
};
