import { Request, Response } from "express";
import { prisma } from "../../..";

export async function updateSale(req: Request, res: Response) {
  try {
    const { dta_venda_, val_total_venda_ } = req.body;

    const { cod_venda } = req.params;

    const sale = await prisma.venda.update({
      where: {
        cod_venda: Number(cod_venda),
      },
      data: {
        dta_venda_,
        val_total_venda_,
      },
    });

    res.status(200).json(sale);
  } catch (error) {
    res.sendStatus(500);
  }
}
