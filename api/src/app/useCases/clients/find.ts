import { Request, Response } from "express";
import { prisma } from "../../..";

export async function findClients(req: Request, res: Response) {
  try {
    const clients = await prisma.cliente.findMany({});

    res.status(200).send(clients);
  } catch (error) {
    res.sendStatus(500);
  }
}
