import { Request, Response } from "express";
import { prisma } from "../../..";



export async function findOneClient(req: Request, res: Response){
  try {
    const {cod_cliente} = req.params;

    const client = await prisma.cliente.findUnique({
      where:{
        cod_cliente: Number(cod_cliente)
      }
    });


    res.status(200).json(client);
  } catch (error) {
    res.sendStatus(500);
  }
}