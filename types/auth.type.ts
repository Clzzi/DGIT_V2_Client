export interface IRefreshToken {
  data: string;
}

export interface ILogin {
  refreshToken: string;
  token: string;
  user: {
    id: string;
    name: string;
  };
}
