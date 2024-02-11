import { currentUser } from "@clerk/nextjs";

export async function getUserData() {
  return await currentUser();
}
