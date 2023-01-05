export interface IResetPasswordContextData {
  sendEmailRequest: (email: string) => Promise<void>;
  verifyToken: (token: string) => Promise<void>;
  updateNewPassword: (newPassword: string) => Promise<void>
}
