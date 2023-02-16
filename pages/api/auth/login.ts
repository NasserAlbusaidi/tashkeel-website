import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    
    const user = await prisma.users.findUnique({
        where: {
            email: email
    }})
    if(user) {
        //check if password is correct
        if(user.password === password) {
            const token = "123456";
            return res.status(200).json({message: "Logged in", token })
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    
    } else {
        return res.status(403).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
