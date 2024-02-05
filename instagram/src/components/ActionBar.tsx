import { parseDate } from "@/util/date";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";

type Props = {
  likes: string[];
  username: string;

  createdAt: string;
  text?: string;
};

export default function ActionBar({ likes, username, text, createdAt }: Props) {
  return (
    <>
      <div className="flex justify-between px-4 mt-2">
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className="px-4 py-1">
        <p className="mb-2 text-sm font-bold">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        {text && (
          <p>
            <span className="mr-1 font-bold">{username}</span>
            {text}
          </p>
        )}

        <p className="my-2 text-xs uppercase text-neutral-500">
          {parseDate(createdAt)}
        </p>
      </div>
    </>
  );
}
