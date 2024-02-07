import { searchUsers } from "@/service/user";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: { keyword: string };
};

export async function GET(_: NextRequest, context: Context) {
  // 안쓰는 인자는 _로 많이 나타냄
  return searchUsers(context.params.keyword).then((data) =>
    NextResponse.json(data)
  );
}
