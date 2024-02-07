export type User = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SimpleUser = Pick<User, "username" | "image">;

export type DetailUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};

export type ProfileUser = User & {
  following: number;
  followers: number;
};
// 이딴 타입은 필요 없어!!! 없어도 잘 된다구 ㅡㅡ
