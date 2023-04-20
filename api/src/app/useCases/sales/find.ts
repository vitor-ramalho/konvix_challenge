import { Request, Response } from "express";
import { prisma } from "../../..";

export async function findSales(req: Request, res: Response) {
  try {
    const sales = await prisma.venda.findMany({});

    res.status(200).send(sales);
  } catch (error) {
    res.sendStatus(500);
  }
}
