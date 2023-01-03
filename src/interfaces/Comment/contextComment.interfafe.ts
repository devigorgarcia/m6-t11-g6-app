import { IComments } from "../../components/ProductPage/Comments";

export interface ICommentContextData {
    createComment: (content: string, vehicleId: string) => Promise<void>;
    getComments: (vehicleId: string) => Promise<void>
    getOneComment: (commentId: string) => Promise<void>
    comments: IComments[]
    oneComment: IComments
}

