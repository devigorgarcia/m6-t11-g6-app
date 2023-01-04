export interface IResetPasswordContextData {
  sendEmailRequest: (email: string) => Promise<void>;
}
