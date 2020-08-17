export interface NavItem {
  title: string;
  enabled: boolean;
  url: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface SingleUser {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
  };
  company: {
    name: string;
  };
}

export interface AuthInfo {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  token_type: string;
}
