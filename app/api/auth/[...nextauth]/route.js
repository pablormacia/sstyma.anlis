import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import db from '@/app/lib/db'
import bcrypt from 'bcrypt'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                //console.log(credentials)
                const userFound = await db.usuarios.findUnique({
                    where: {
                        username: credentials.username
                    }
                })

                if (!userFound) throw new Error("No se encontró el usuario")
                //console.log(userFound)

                const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

                if (!matchPassword) throw new Error("Password incorrecto")

                return {
                    id: userFound.id,
                    username: userFound.username,
                    rol:userFound.rol,
                    establecimientos: userFound.establecimientos
                } 
                //console.log("Req", req)

                return userFound
            }
        })
    ],
    pages: {
        signIn: '/auth/login'
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            //console.log("signin", user)
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, token, user }) {
            if (session?.user) {
                session.user.id = token.sub;
                session.user.username = token.username;
                session.user.rol = token.rol;
                session.user.establecimientos = token.establecimientos;
              }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if(account){
                token.rol=user.rol
                token.username=user.username
                token.establecimientos=user.establecimientos
            }
            
            //console.log("Token", token)
            return token
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }