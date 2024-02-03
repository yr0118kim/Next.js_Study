export type Comment = {
  comment: string;
  username: string;
  image: string;
};

export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  text: string;
  createAt: string;
  likes: string[];
  comments: Comment[];
};

export type SimplePost = Omit<FullPost, "comments"> & {
  comments: number;
};
