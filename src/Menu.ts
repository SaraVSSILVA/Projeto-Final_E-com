import readlinesync = require("readline-sync"); // Importa biblioteca para entrada de dados via terminal
import { ProdutoRepository } from "./repository/ProdutoRepository"; // Importa o repository de produtos
import { PedidoRepository } from "./repository/PedidoRepository"; // 
import { colors } from "./util/Colors"; // Importa utilitario de cores para o terminal 
import { ProdutoController } from "./controller/ProdutoController"; // Importa o controller de produtos
import { PedidoController } from "./controller/PedidoController";

export function main() {

    const produtoRepo = new ProdutoController(); // Instancia o controller de produtos 
    const pedidoRepo = new PedidoRepository(); // Instancia o controller de pedidos

    while (true) { // Loop principal do menu
        exibirMenu();

        console.log("Entre com a opção desejada: ");
        const opcao = readlinesync.questionInt("");

        if (opcao == 10) {
            console.log("\nBaby Reborn: A Realidade no Berço!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1: 
                console.log("\n\nCadastrar novo Bebê Reborn\n\n")
                const nome = readlinesync.question("Nome do bebê: ");
                const preco = readlinesync.questionFloat("Preço: ");
                produtoRepo.criar(nome, preco); // sem estoque
                console.log("Bebê cadastrado com sucesso!");
                keyPress();
                break;

            case 2:
                console.log("\n\nListar todos os Bebês Reborn\n\n")
                const produtos = produtoRepo.listar();
                if (produtos.length === 0) {
                    console.log("Nenhum bebê cadastrado.");
                } else {
                    produtos.forEach(p => p.visualizarProduto());
                }

                keyPress();
                break;

            case 3:
                console.log("\n\nBuscar Bebê Reborn por Código\n\n")
                const codigoBusca = readlinesync.questionInt("Digite o código do bebê: ");
                const produtoEncontrado = produtoRepo.buscarPorCodigo(codigoBusca);
                if (produtoEncontrado) {
                    produtoEncontrado.visualizarProduto();
                } else {
                    console.log("Bebê não encontrado.");
                }
                keyPress();
                break;

            case 4:
                console.log("\n\nAtualizar Dados do Bebê Reborn\n\n")
                const codigoAtualizar = readlinesync.questionInt("Código do bebê: ");
                const novoNome = readlinesync.question("Novo nome: ");
                const novoPreco = readlinesync.questionFloat("Novo preço: ");
                if (produtoRepo.atualizar(codigoAtualizar, novoNome, novoPreco)) {
                    console.log("Bebê atualizado com sucesso!");
                } else {
                    console.log("Bebê não encontrado ou dados inválidos.");
                }
                keyPress();
                break;

            case 5:
                console.log("\n\nRemover Bebê Reborn \n\n")
                const codigoRemover = readlinesync.questionInt("Código do bebê: ");
                if (produtoRepo.remover(codigoRemover)) {
                    console.log("Bebê removido com sucesso!");
                } else {
                    console.log("Bebê não encontrado.");
                }
                keyPress();
                break;

            case 6: 
                console.log("\n\nRealizar Venda\n\n")
                const codigoBebeVenda = readlinesync.questionInt("Código do bebê: ");
                const quantidadeVenda = readlinesync.questionInt("Quantidade: ");
                const bebeExistente = produtoRepo.buscarPorCodigo(codigoBebeVenda);
                if (!bebeExistente) {
                    console.log("Erro: Bebê não cadastrado. Não é possível realizar a venda.");
                } else if (pedidoRepo.criar(codigoBebeVenda, quantidadeVenda)) {
                    console.log("Venda realizada com sucesso!");
                } else {
                    console.log("Erro ao realizar venda. Verifique os dados.");
                }
                keyPress();
                break;

            case 7: 
                console.log("\n\nListar Vendas\n\n")
                const pedidos = pedidoRepo.listar();
                if (pedidos.length === 0) {
                    console.log("Nenhuma venda realizada.");
                } else {
                    pedidos.forEach(p => {
                        if (typeof p.visualizarPedido === "function") {
                            p.visualizarPedido();
                        } else {
                            console.log(p);
                        }
                    });
                }
                keyPress();
                break;

            case 8:
                console.log("\n\nConfirmar Pedido\n\n");
                const codigoPedidoConfirmar = readlinesync.questionInt("Código do pedido: ");
                if (pedidoRepo.confirmar(codigoPedidoConfirmar)) {
                    console.log("Pedido confirmado com sucesso!");
                } else {
                    console.log("Pedido não encontrado ou já está confirmado/cancelado.");
                }
                keyPress();
                break;

            case 9:
                console.log("\n\nCancelar Pedido\n\n");
                const codigoPedidoCancelar = readlinesync.questionInt("Código do pedido: ");
                if (pedidoRepo.cancelar(codigoPedidoCancelar)) {
                    console.log("Pedido cancelado com sucesso!");
                } else {
                    console.log("Pedido não encontrado ou já está confirmado/cancelado.");
                }
                keyPress();
                break;

            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                keyPress();
                break;
        }
    }
    }


    function exibirMenu(): void {
        console.log(
            colors.bg.whitebright, colors.fg.gray,
            "*****************************************************\n" +
            "                                                     \n" +
    "            Baby Reborn: A Realidade no Berço!         \n" +
    "*****************************************************\n" +
    "                                                     \n" +
    "            1 - Cadastrar novo Bebê Reborn           \n" +
    "            2 - Listar todos os Bebês Reborn         \n" +
    "            3 - Buscar Bebê Reborn por Código        \n" +
    "            4 - Atualizar Dados do Bebê Reborn       \n" +
    "            5 - Remover Bebê Reborn                  \n" +
    "            6 - Realizar Venda                       \n" +
    "            7 - Listar Vendas                        \n" +
    "            8 - Confirmar Pedido                      \n" +
    "            9 - Cancelar Pedido                       \n" +
    "           10 - Sair                                  \n" +
    "                                                     \n" +
    "*****************************************************\n" +
    colors.reset
);
    }

    function sobre(): void {
        console.log("Projeto desenvolvido para gerenciar Bebês Reborn.");
        console.log("Projeto Desenvolvido por Sara Silva");
        console.log("Generation Brasil - generation@generation.org");
        console.log("https://github.com/SaraVSSILVA/Projeto-Final_E-com.git");
    }

    function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}



main();

