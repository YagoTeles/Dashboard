# Dashboard
## Sumário
1. [Bibliotecas](#bibliotecas)  
2. [Rodando serviços](#rodando-serviço) 
3. [Observações](#observações) 

## Bibliotecas
 * ReactJS
 * D3.js - Criação e manipulação de gráficos
 * react-router-dom - Gestão de rotas da barra de navegação
 * Material UI - Utilização de botões, checkboxes e radios

## Rodando serviço

### Instalação Docker
[Instalar Docker - Linux](https://docs.docker.com/desktop/install/linux-install/)
[Instalar Docker - Windows](https://docs.docker.com/desktop/install/windows-install/)

### Baixar o repositório
git clone https://github.com/YagoTeles/Dashboard.git
cd Dashboard

### Executar Docker

#### Construir a imagem
docker pull node:lts-alpine3.20
docker build -t nome-imagem .

#### Iniciar container com a porta desejada
Ex: Porta 5000
docker run -p 5000:3000 nome-imagem


## Observações
A aplicação foi desenvolvida em um período de tempo limitado, principalmente à noite, devido ao trabalho diurno. Existem várias melhorias que podem ser implementadas para aprimorar o projeto.

### Melhoria nos componentes
Para facilitar o desenvolvimento futuro e manutenções na aplicação, é recomendada a criação de componentes especializados. Isso permite reutilizar lógicas e interfaces com menos ajustes em novos desenvolvimentos.

### Melhorias no uso do D3.js
D3.js é uma biblioteca poderosa que possibilita diversas manipulações de dados. Um estudo mais aprofundado pode ser benéfico, como exemplo recursos como a leitura de mapas através de GeoJSON, utilizando métodos específicos do D3.js para manipulação de coordenadas geoespaciais.

### Desenvolvimento Back-end
É crucial integrar a aplicação com um back-end através de uma API RESTful em Python. Isso assegura que todas as informações sejam sincronizadas em tempo real com o banco de dados SQL.

### Melhoria nos contextos
Contextos foram utilizados para gerenciar o estado das informações selecionadas nos botões. Revisar e otimizar o uso desses contextos pode melhorar a organização e desempenho geral da aplicação.

### Melhoria na organização
É possivel melhorar a organizaçao dos arquivos em suas devidas pastas assim como os nomes condizentes com as funcionalidades, isso permite que em caso de manutençao por outro desenvolvedor seja possivel identificar o codigo a se modificado mais facilmente.

### Conclusão da aplicação
Devido a limitações de tempo, não foi possível implementar todos os pontos solicitados para a aplicação.





