const groupsData = [
    {
      parentLabel: 'Norte',
      children: [
        { label: 'Acre', checked: false, id: 'AC' },
        { label: 'Amapá', checked: false, id: 'AP' },
        { label: 'Amazonas', checked: false, id: 'AM' },
        { label: 'Pará', checked: false, id: 'PA' },
        { label: 'Rondônia', checked: false, id: 'RO' },
        { label: 'Roraima', checked: false, id: 'RR' },
        { label: 'Tocantins', checked: false, id: 'TO' },
      ],
    },
    {
      parentLabel: 'Nordeste',
      children: [
        { label: 'Alagoas', checked: false, id: 'AL' },
        { label: 'Bahia', checked: false, id: 'BA' },
        { label: 'Ceará', checked: false, id: 'CE' },
        { label: 'Maranhão', checked: false, id: 'MA' },
        { label: 'Paraíba', checked: false, id: 'PB' },
        { label: 'Pernambuco', checked: false, id: 'PE' },
        { label: 'Piauí', checked: false, id: 'PI' },
        { label: 'Rio Grande do Norte', checked: false, id: 'RN' },
        { label: 'Sergipe', checked: false, id: 'SE' },
      ],
    },
    {
      parentLabel: 'Centro-Oeste',
      children: [
        { label: 'Distrito Federal', checked: false, id: 'DF' },
        { label: 'Goiás', checked: false, id: 'GO' },
        { label: 'Mato Grosso', checked: false, id: 'MT' },
        { label: 'Mato Grosso do Sul', checked: false, id: 'MS' },
      ],
    },
    {
      parentLabel: 'Sudeste',
      children: [
        { label: 'Espírito Santo', checked: false, id: 'ES' },
        { label: 'Minas Gerais', checked: false, id: 'MG' },
        { label: 'Rio de Janeiro', checked: false, id: 'RJ' },
        { label: 'São Paulo', checked: false, id: 'SP' },
      ],
    },
    {
      parentLabel: 'Sul',
      children: [
        { label: 'Paraná', checked: false, id: 'PR' },
        { label: 'Rio Grande do Sul', checked: false, id: 'RS' },
        { label: 'Santa Catarina', checked: false, id: 'SC' },
      ],
    },
  ];

  export default groupsData