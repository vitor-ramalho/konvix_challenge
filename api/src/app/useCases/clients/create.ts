import { Request, Response } from "express";
import { prisma } from "../../..";

export async function createClient(req: Request, res: Response) {
  try {
    const {
      des_nome,
      des_endereco,
      num_endereco,
      des_cidade,
      des_uf,
      des_telefone,
      des_contato,
    } = req.body;

    const client = await prisma.cliente.create({
      data: {
        des_nome,
        des_endereco,
        num_endereco,
        des_cidade,
        des_contato,
        des_telefone,
        des_uf,
        dta_cadastro: "",
        dta_ult_pedido: "",
        dta_alteracao: "",
      },
    });

    res.status(201).json
    (client)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
