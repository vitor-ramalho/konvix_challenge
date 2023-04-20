import { Request, Response } from "express";
import { prisma } from "../../..";

export async function createSale(req: Request, res: Response) {
  try {
    const {
      dta_venda_,
      val_total_venda_
    } = req.body;

    const {cod_cliente} = req.params;

    const sale = await prisma.venda.create({
      data: {
        dta_venda_,
        cod_cliente: Number(cod_cliente),
        val_total_venda_,
      },
    });

    res.status(201).json(sale);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
