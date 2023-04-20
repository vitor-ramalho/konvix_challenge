import { Request, Response } from "express";
import { prisma } from "../../..";



export async function findOneSaleItem(req: Request, res: Response){
  try {
    const {cod_item} = req.params;

    const saleItem = await prisma.venda_item.findUnique({
      where:{
        cod_item: Number(cod_item)
      }
    });


    res.status(200).json(saleItem);
  } catch (error) {
    res.sendStatus(500);
  }
}