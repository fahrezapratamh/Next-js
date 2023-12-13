import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      {
        status: 400,
        message: "invalid secret",
        data: {},
      },
      { status: 400 }
    );
  }

  if (!tag) {
    return NextResponse.json(
      {
        status: 400,
        message: "bad Request",
        data: {},
      },
      { status: 400 }
    );
  }

  revalidateTag(tag);
  revalidateTag(secret);
  return NextResponse.json({
    revalidate: true,
    now: Date.now(),
  });
}
