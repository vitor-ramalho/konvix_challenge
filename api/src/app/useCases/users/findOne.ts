import { Request, Response } from "express";
import { prisma } from "../../..";

export async function findOneUser(req: Request, res: Response) {
  try {
    const { cod_usuario } = req.params;

    const user = await prisma.usuario.findUnique({
      where: {
        cod_usuario: Number(cod_usuario),
      },
    });

    res.send(200).json(user);
  } catch (error) {
    res.sendStatus(500);
  }
}
