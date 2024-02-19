export type AuthUser = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SimpleUser = Pick<AuthUser, "username" | "image">;

export type HomeUser = AuthUser & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};

export type SearchUser = AuthUser & {
  following: number;
  followers: number;
};
// 이딴 타입은 필요 없어!!! 없어도 잘 된다구 ㅡㅡ

export type ProfileUser = SearchUser & {
  posts: number;
};
