import { Request, Response } from "express";
import { prisma } from "../../..";

export async function createSaleItem(req: Request, res: Response) {
  try {
    const {
      des_produto,
      cod_venda,
      dta_cadastro,
      qtd_itens,
      val_total,
      val_unitario,
    } = req.body;

    const sale_item = await prisma.venda_item.create({
      data: {
        des_produto,
        cod_venda,
        dta_cadastro,
        qtd_itens,
        val_total,
        val_unitario,
      },
    });

    res.status(201).json(sale_item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
