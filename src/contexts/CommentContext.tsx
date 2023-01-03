import { createContext, useState } from "react";
import { ICommentContextData } from "../interfaces/Comment/contextComment.interfafe";
import { ProviderData } from "../interfaces/provider.interface";
import { api } from "../api";
import { IComments } from "../components/ProductPage/Comments";

export const CommentContext = createContext<ICommentContextData>(
  {} as ICommentContextData
);

export const CommentProvider = ({ children }: ProviderData) => {
  const [comments, setComments] = useState<IComments[]>([] as IComments[]);
  const [oneComment, setOneComment] = useState<IComments>({} as IComments);

  const createComment = async (content: string, vehicleId: string) => {
    await api
      .post(`/comments/${vehicleId}`)
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
