import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    // session: { id?: string | undefined } & DefaultSession['session'];
    id?: any & DefaultSession['session'];
    jwt?: any & DefaultSession['session'];
  }

  interface User {
    id?: string;
    jwt?: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    jwt?: string;
  }
}
