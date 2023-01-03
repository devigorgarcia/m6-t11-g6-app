export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  name: string;
  email: string;
  cpf: string;
  fone: string;
  birthday: Date;
  descripiton: string;
  is_admin: boolean;
  password: string;
  address: {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
  };
}

export interface IContextData {
  login: (data: ILoginData) => Promise<void>;
}

export interface IRegisterContextData {
  registerForm: (data: IRegisterData, onOpen: any) => Promise<void>;
}
