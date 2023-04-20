import { Request, Response } from "express";
import { prisma } from "../../..";

export async function updateClient(req: Request, res: Response) {
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

    const { cod_cliente } = req.params;

    const client = await prisma.cliente.update({
      where: {
        cod_cliente: Number(cod_cliente),
      },
      data: {
        des_nome,
        des_endereco,
        num_endereco,
        des_cidade,
        des_uf,
        des_telefone,
        des_contato,
        dta_cadastro: "",
        dta_ult_pedido: "",
        dta_alteracao: "",
      },
    });

    res.status(200).json
    (client)
  } catch (error) {
    res.sendStatus(500);
  }
}
