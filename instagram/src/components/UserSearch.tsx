"use client";

import { FormEvent, useState } from "react";
import useSWR from "swr";
import GridSpinner from "./ui/GridSpinner";
import { SearchUser } from "@/model/user";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/debounce";

export default function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 500);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);

  console.log(users);

  // /api/search/${keyword}
  // 검색하는 keyword가 있다면 /api/search/bob -> 유저 네임이나 네임
  // 검색하는 keyword가 없다면 /api/search

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="flex flex-col items-center w-full max-w-2xl my-4">
      <form className="w-full" onSubmit={onSubmit}>
        <input
          className="w-full p-3 text-xl border border-gray-400 outline-none"
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>무언가가 잘못 되었음</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && <p>찾는 사용자가 없음</p>}
      <ul className="w-full p-4">
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user}></UserCard>
            </li>
          ))}
      </ul>
    </section>
  );
}
