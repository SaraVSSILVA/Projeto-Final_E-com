# Projeto Final Bloco 1 - Ecommerce

Este projeto é um sistema de Ecommerce desenvolvido em TypeScript, como parte do Bloco 1 do curso de JavaScript Generation. O sistema permite o gerenciamento de produtos, pedidos e simula a venda de Bebês Reborn Premium.

## Estrutura do Projeto

```
src/
  Menu.ts
  controller/
    PedidoController.ts
    ProdutoController.ts
  model/
    BebeRebornPremium.ts
    Pedido.ts
    Produto.ts
  repository/
    PedidoRepository.ts
    ProdutoRepository.ts
  types/
    index.ts
  util/
    Colors.ts
    Index.ts
package.json
tsconfig.json
```

## Funcionalidades

- Cadastro, listagem, atualização e remoção de produtos.
- Cadastro e gerenciamento de pedidos.
- Simulação de compra de Bebês Reborn Premium.
- Utilização de repositórios para persistência em memória.
- Menu interativo para navegação entre funcionalidades.

## Tecnologias Utilizadas

- TypeScript
- Node.js

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Compile o projeto:
   ```bash
   npx tsc
   ```
3. Execute o sistema:
   ```bash
   node dist/Menu.js
   ```
