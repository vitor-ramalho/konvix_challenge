import { Request, Response } from "express";
import { prisma } from "../../..";

export async function findSaleItems(req: Request, res: Response) {
  try {
    const saleItems = await prisma.venda_item.findMany({});

    res.status(200).send(saleItems);
  } catch (error) {
    res.sendStatus(500);
  }
}
