import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { nextAuthOptions } from "../api/auth/[...nextauth]/options";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/dashboard");
  }
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
