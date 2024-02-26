import { ProfileUser } from "@/model/user";
import Avatar from "./Avatar";
import FollowButton from "./FollowButton";

type Props = {
  user: ProfileUser;
};
export default function UserProfile({ user }: Props) {
  const { image, username, name, followers, following, posts } = user;
  const info = [
    { name: 'posts', data : posts },
    { name: 'followers', data: followers },
    { title: 'following', data: following },
    
  ]
  return (
    <section>
      <Avatar image={image} highlight />
      <div>
        <h1>{username}</h1>
        <FollowButton />
        <ul>
          {info.map((item, index) => <li key={index}>
            <span>{ }</span>
          </li>)}

        </ul>

      </div>
    </section>
  );
}
