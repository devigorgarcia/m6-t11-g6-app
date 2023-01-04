import { IUserOwner } from "../VehicleContext/Vehicle.interfaces";

export interface ICommentContextData {
  createComment: (content: string, vehicleId: string) => Promise<void>;
  getComments: (vehicleId: string) => Promise<void>;
  getOneComment: (commentId: string) => Promise<void>;
  comments: ICommentContext[];
  oneComment: ICommentContext;
}

export interface IComments {
  comments: ICommentsData[];
}

export interface ICommentsData {
  content: string;
  createAt: string;
  id: string;
  user: ICommentUser;
  userId: string;
  vehicleId: string;
}

export interface ICommentUser {
  id: string;
  name: string;
}

export interface ICommentContext {
  content: string;
  createAt: string;
  id: string;
  user: ICommentUser;
  userId: string;
  vehicleId: string;
}

export interface IContent {
  content: string;
}

export interface ICommentContextInfo {
  owner: IUserOwner;
  carId: string;
}