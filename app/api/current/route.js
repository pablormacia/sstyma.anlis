import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function setCurrent(){
    const session = await getServerSession(authOptions)
    console.log("Session desde current", session)
}