import { Request, Response } from "express";
import { prisma } from "../../..";

export async function deleteSale(req: Request, res: Response) {
  try {
    const { cod_venda } = req.params;

    const sale = await prisma.venda.delete({
      where: {
        cod_venda: Number(cod_venda),
      },
    });

    res.status(200).send(sale);
  } catch (error) {
    res.sendStatus(500);
  }
}
