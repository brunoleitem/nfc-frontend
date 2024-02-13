import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { NextAuthOptions } from "next-auth";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },

      async authorize(credentials, req) {
        const response = axios
          .post("http://localhost:3333/sessions", {
            email: credentials?.email,
            password: credentials?.password,
          })
          .catch((error) => {
            throw new Error(JSON.stringify(error.response.data));
          });

        const user = (await response).data;
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
