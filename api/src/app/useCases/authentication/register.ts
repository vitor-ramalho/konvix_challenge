import { Request, Response } from "express";
import * as argon from "argon2";
import { prisma } from "../../..";
export async function register(req: Request, res: Response) {
  try {
    const { des_email, des_senha } = req.body;
    const hash = await argon.hash(des_senha);

    const checkEmail = await prisma.usuario.findFirst({
      where: {
        des_email,
      },
    });

    if (checkEmail) {
      throw new Error("User Already ");
    }

    const user = await prisma.usuario.create({
      data: {
        des_email,
        des_senha: hash,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    res.sendStatus(500);
  }
}
