import {NextResponse} from "next/server";

export async function GET(req: Request) {
  const sensors = await fetch('https://app.agrinet.us/api/map/sites?userId=254&required-server-version=')
    .then(res => res.json())

  return NextResponse.json(sensors)
}