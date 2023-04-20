import { Request, Response } from "express";
import { prisma } from "../../..";

export async function deleteClient(req: Request, res: Response) {
  try {
    const { cod_cliente } = req.params;

    const client = await prisma.cliente.delete({
      where: {
        cod_cliente: Number(cod_cliente),
      },
    });

    res.status(200).send(client);
  } catch (error) {
    res.sendStatus(500);
  }
}
