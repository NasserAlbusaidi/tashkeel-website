import { users } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if( req.method === 'POST' ) {
        const { email, password } = req.body;
        const user = await prisma.users.create({
            data: {
                email: email,
                password: password

        }
    })
    res.status(201).json({message: "User created", user})

    }
}