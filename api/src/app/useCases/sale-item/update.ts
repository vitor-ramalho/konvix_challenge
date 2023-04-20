import { Request, Response } from "express";
import { prisma } from "../../..";

export async function updateSaleItem(req: Request, res: Response) {
  try {
    const {
      des_produto,
      cod_venda,
      dta_cadastro,
      qtd_itens,
      val_total,
      val_unitario,
    } = req.body;

    const { cod_item } = req.params;

    const saleItem = await prisma.venda_item.update({
      where: {
        cod_item: Number(cod_item)
      },
      data: {
        des_produto,
        cod_venda,
        dta_cadastro,
        qtd_itens,
        val_total,
        val_unitario,
      },
    });

    res.status(200).json
    (saleItem)
  } catch (error) {
    res.sendStatus(500);
  }
}
