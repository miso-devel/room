declare module 'next-auth' {
  interface Session {
    user?: {
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
    expires: ISODateString
    accessToken: string
  }
  interface Profile {
    id: string
  }
}

declare module 'next-auth/jwt' {
  interface Jwt {
    id: string
    accessToken: string
  }
}
