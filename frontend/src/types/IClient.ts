export interface IClient {
  cod_cliente: number;
  des_nome: string;
  flg_inativo: number;
  des_endereco: string;
  num_endereco?: string;
  des_cidade: string;
  des_uf: string;
  des_telefone: string;
  des_contato: string;
  val_venda_acumulado: number;
  qtd_venda_pedidos: number;
  dta_ult_pedido: string;
  dta_cadastro: string;
  dta_alteracao: string;
}
