"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email({ message: "Email inválido" }),
  password: z.string({ required_error: "Campo obrigatório" }),
});

type FormType = z.infer<typeof formSchema>;

export function SignInForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();
  async function onSubmit(values: FormType) {
    setLoading(true);
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    console.log(result);
    //tratar erro
    if (result?.error) {
      setLoading(false);
      return toast({
        title: "Erro!",
        description: JSON.parse(result?.error).message,
        variant: "destructive",
      });
    }
    router.replace("/dashboard");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-96">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} className="w-full mt-8" type="submit">
          {loading ? (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Fazer login"
          )}
        </Button>
      </form>
    </Form>
  );
}
