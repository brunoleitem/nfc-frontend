import { Header } from "@/components/main/header";
import { SignInForm } from "@/components/pages/signin/form";

export default function SignIn() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <main className=" flex-1 flex flex-col items-center self-center justify-self-center justify-center">
        <h1 className="lg:text-4xl mb-4 text-3xl text-theme-green font-bold md:text-5xl leading-10 lg:leading-[72px]">
          Login
        </h1>
        <SignInForm />
      </main>
    </div>
  );
}
