import { Request, Response } from "express";
import { prisma } from "../../..";

export async function findUsers(req: Request, res: Response) {
  try {

    const user = await prisma.usuario.findMany({});

    res.send(200).json(user);
  } catch (error) {
    res.sendStatus(500);
  }
}
