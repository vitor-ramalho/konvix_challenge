import { Request, Response } from "express";
import { prisma } from "../../..";

export async function deleteUser(req: Request, res: Response) {
  try {
    const { cod_usuario } = req.params;

    await prisma.usuario.delete({
      where: {
        cod_usuario: Number(cod_usuario),
      },
    });

    res.send(200).json({ message: "User deleted" });
  } catch (error) {
    res.sendStatus(500);
  }
}
