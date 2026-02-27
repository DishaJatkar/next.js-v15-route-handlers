// Readonly headers
import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

// export async function GET() {
//   return new Response("Profile API data!");
// }

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log("Request Headers:", requestHeaders.get("Authorization"));

  const headerList = await headers();
  console.log("Headers from next/headers:", headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log("Theme cookie value:", theme);

  const cookieStore = await cookies();
  cookieStore.set("resultPerPage", "10");
  console.log(
    "Cookies from next/cookies:",
    cookieStore.get("resultPerPage"),
  );

  return new Response("<h1>Profile API data!</h1>", {
    headers: {
      "Content-Type": "text/html",
      "set-cookie": "theme=dark",
    },
  });
}
