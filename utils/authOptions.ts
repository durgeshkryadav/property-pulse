import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }) {
      // 1. Connect to database
      // 2. Check if user exists
      // 3. If not, then add user to database
      // 4. Return true to allow sign in
    },
    async session({ session }) {
      // 1. Get user from database
      // 2. Assign the user id to the session
      // 3. return session
    },
  },
};
