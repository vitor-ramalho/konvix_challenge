import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { IClient } from '../../types/IClient';
import { FiEye } from 'react-icons/fi'


const columns = [
  {
    title: 'Código',
    dataIndex: 'cod_cliente',
    key: 'cod_cliente',
  },
  {
    title: 'Nome',
    dataIndex: 'des_nome',
    key: 'des_nome',
  },
  {
    title: 'Endereço',
    dataIndex: 'des_endereco',
    key: 'des_endereco',
  },
  {
    title: 'Telefone',
    dataIndex: 'des_telefone',
    key: 'des_telefone',
  },
  {
    title: 'Opções',
    key: 'action',
    render: () => (
      <button>
        <FiEye />
      </button>
    )
  },
];

const ClientsTable: React.FC = () => {
  const [data, setData] = useState<IClient[]>([]);

  useEffect(() => {
    fetch('http://localhost:3002/client')
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div>
      <Button style={{ "float": "right" }} type='primary'>Cadastrar Cliente</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  )
};

export default ClientsTable;
