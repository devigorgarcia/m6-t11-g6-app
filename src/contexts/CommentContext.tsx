import { createContext, useState } from "react";
import {
  ICommentContext,
  ICommentContextData,
  ICommentsData,
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
  const [newComment, setNewComment] = useState<ICommentsData>(
    {} as ICommentsData
  );

  const token = localStorage.getItem("@MotorShop:Token");

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const createComment = async (content: string, vehicleId: string) => {
    await api
      .post(`/comments/${vehicleId}`, content)
      .then((resp) => setNewComment(resp.data))
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

  const updateComment = async (commentId: string, newContent: string, onCloseEdit: () => void) => {
    const newComment = {content :newContent}
    await api
      .patch(`/comments/${commentId}/comment`, newComment)
      .then((res) => {
        console.log(res.data)
        setNewComment(res.data);
        onCloseEdit();
      })
      .catch((err) => console.log(err));
  };

  const deleteComment = async (commentId: string, onCloseDelete: () => void) => {
    await api
      .delete(`/comments/${commentId}/comment`)
      .then((res) => {
        setNewComment(res.data);
        onCloseDelete();
      })
      .catch((err) => console.log(err));
  };

  return (
    <CommentContext.Provider
      value={{
        createComment,
        getComments,
        getOneComment,
        deleteComment,
        updateComment,
        comments,
        oneComment,
        newComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
