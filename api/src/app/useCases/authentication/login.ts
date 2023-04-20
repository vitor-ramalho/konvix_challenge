import { Request, Response } from "express";
import { prisma } from "../../..";
import * as argon from "argon2";

export async function login(req: Request, res: Response) {
  try {
    const { des_email, des_senha } = req.body;

    const user = await prisma.usuario.findFirst({
      where: {
        des_email,
      },
    });

    console.log(user);
    console.log(user?.des_senha);

    if (!user) res.status(404);

    if (user?.des_senha) {
      const passwordMatch = await argon.verify(user.des_senha, des_senha);
      if (!passwordMatch) res.status(401);
    }

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
