import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { SERVER_PATH } from "@/lib/constants";
import { verifySession } from '@/lib/dataAccessLayer'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fetchImage(path: string) {

}

export async function getUserById(id: string) {
  const session = await verifySession();
  if (session === null) {
    throw new Error("Failed to verify session");
  }
  const req = await fetch(`${SERVER_PATH}/user/${id}`, { cache: "no-store" });

  if (!req.ok) {
    throw new Error("Failed to fetch data");
  }

  const res = await req.json();
  return res;
}