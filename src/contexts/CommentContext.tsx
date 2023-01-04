import { createContext, useState } from "react";
import {
  ICommentContext,
  ICommentContextData,
} from "../interfaces/Comment/contextComment.interfafe";
import { ProviderData } from "../interfaces/provider.interface";
import { api } from "../api";

export const CommentContext = createContext<ICommentContextData>(
  {} as ICommentContextData
);

export const CommentProvider = ({ children }: ProviderData) => {
  const [comments, setComments] = useState<ICommentContext[]>(
    [] as ICommentContext[]
  );
  const [oneComment, setOneComment] = useState<ICommentContext>(
    {} as ICommentContext
  );

  const token = localStorage.getItem("@MotorShop:Token");

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const createComment = async (content: string, vehicleId: string) => {
    await api
      .post(`/comments/${vehicleId}`, content)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const getComments = async (vehicleId: string) => {
    await api
      .get(`/comments/${vehicleId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  };

  const getOneComment = async (commentId: string) => {
    await api
      .get(`/comments/${commentId}/comment`)
      .then((res) => setOneComment(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <CommentContext.Provider
      value={{
        createComment,
        getComments,
        getOneComment,
        comments,
        oneComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
