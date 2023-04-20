import { Request, Response } from "express";
import { prisma } from "../../..";

export async function deleteSaleItem(req: Request, res: Response) {
  try {
    const { cod_item } = req.params;

    const sale_item = await prisma.venda_item.delete({
      where: {
        cod_item: Number(cod_item)
      },
    });

    res.status(200).send(sale_item);
  } catch (error) {
    res.sendStatus(500);
  }
}
