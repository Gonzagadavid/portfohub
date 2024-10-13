"use server";
import { signIn, signOut } from "@/app/api/auth/auth";
import { Routes } from "@/constants/routes";
import { AuthError } from "next-auth";

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData, { redirectTo: Routes.DASHBOARD });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: Routes.HOME });
}
