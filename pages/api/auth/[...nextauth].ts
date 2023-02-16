import NextAuth from 'next-auth'
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from "next-auth/providers/credentials";
let userAccount = null;
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

type configuration = {
    cookie: { secure: boolean; };
    session: { jwt: boolean; maxAge: number; };
    providers: any[];
    callbacks: { session: (session: any, user: any) => Promise<any>; };

}

const confirmPasswordHash = (plainPassword, hashedPassword) => {
    return new Promise(resolve => {
        bcrypt.compare(plainPassword, hashedPassword, function(err, res) {
            resolve(res);
        });
    })
}

const configuration = {
    cookie: {
        secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {},
            async authorize(credentials : any) {
                const { email, password } = credentials;
                console.log("Credentials:", credentials)
                try
                {
                    console.log("Authorize called");
                    console.log("Credentials:", credentials)
                    const user = await prisma.users.findFirst({
                        where: {
                            email: credentials.email
                        }
                    });

                    if (user !== null)
                    {
                        //Compare the hash
                        // const res = await confirmPasswordHash(credentials.password, user.password);
                        // if (res === true)
                        // {
                        //     userAccount = {
                        //         userId: user.id,
                        //         firstName: user.firstName,
                        //         lastName: user.lastName,
                        //         email: user.email,
                        //         isActive: user.isActive
                        //     };
                        //     return userAccount;
                        // }
                        // else
                        // {
                        //     console.log("Hash not matched logging in");
                        //     return null;
                        // }

                        if (user.password !== credentials.password){
                            console.log("Password not matched logging in");
                            return null;
                        } 
                         
                        userAccount = {
                            userId: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            isActive: user.isActive
                        }
                        return userAccount;
                    }
                    else {
                        return null;
                    }
                }
                catch (err)
                {
                    console.log("Authorize error:", err);
                }

            }
        }),

        
    ],

    pages : {
        signIn: '/login',
        signOut: '/logout',
        error: '/error',


    },

    callbacks: {
        session: async (session) => {
            session.user = userAccount;
            return Promise.resolve(session);
        },

        async signIn ({ user, account, profile }) {
            try {
                console.log('user', user)
                
                console.log("singin user:", user);
                return user;
            } catch (err) {
                console.log("SignIn error:", err);
                return false;
            }
        },

        // async redirect ({ url, baseUrl }) {
        //     console.log("Redirect called");
        //     return baseUrl

        // }
    }

    
}
export default (req, res) => NextAuth(req, res, configuration)