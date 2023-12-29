import { Header } from "@/components/global/header";
import { SignInForm } from "@/components/pages/signin/form";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Header />
      <main className=" flex-1 flex items-center self-center justify-self-center justify-center">
        <SignInForm />
      </main>
    </div>
  );
}
