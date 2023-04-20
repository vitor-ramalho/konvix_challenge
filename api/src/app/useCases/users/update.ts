import { Request, Response } from "express";
import { prisma } from "../../..";

export async function updateUser(req: Request, res: Response) {
  try {
    const { cod_usuario } = req.params;

    const {des_email, flg_inativo} = req.body;

    const user = await prisma.usuario.update({
      where: {
        cod_usuario: Number(cod_usuario),
      },
      data:{
        des_email,
        flg_inativo,
      }
    });

    res.send(200).json(user);
  } catch (error) {
    res.sendStatus(500);
  }
}
