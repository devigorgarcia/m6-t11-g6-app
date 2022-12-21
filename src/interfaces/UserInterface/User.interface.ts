export interface IUserContext {
  getUsers: () => void;
  getUser: (userId: string) => void;
  users: IUser[];
  user: IUser;
}

export interface IUser {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  fone: string;
  birthday: string;
  description: string;
  is_admin: boolean;
}
