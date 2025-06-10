import readlinesync = require("readline-sync");
import { ProdutoRepository } from "./repository/ProdutoRepository";
import { PedidoRepository } from "./repository/PedidoRepository";
import { colors } from "./util/Colors";
import { ProdutoController } from "./controller/ProdutoController";

export function main() {

    let produto: ProdutoController = new ProdutoController();

    let opcao: number;

    const produtoRepo = new ProdutoController();
   // const pedidoRepo = new PedidoRepository(); 

    while (true) {

        exibirMenu();

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 8) {
            console.log("\nBaby Reborn: A Realidade no Berço!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1: 
                console.log("\n\nCadastrar novo Bebê Reborn\n\n")
                const nome = readlinesync.question("Nome do bebê: ");
                const preco = readlinesync.questionFloat("Preço: ");
                const estoque = readlinesync.questionInt("Estoque inicial: ");
                produtoRepo.criar(nome, preco, estoque);
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
                if (produtoRepo.venda(codigoBebeVenda, quantidadeVenda)) {
                    console.log("Venda realizada com sucesso!");
                } else {
                    console.log("Erro ao realizar venda. Verifique os dados.");
                }
                keyPress();
                break;

            // case 7: 
            //     console.log("\n\nListar Vendas\n\n")
            //     const pedidos = pedidoRepo.listar();
            //     if (pedidos.length === 0) {
            //         console.log("Nenhuma venda realizada.");
            //     } else {
            //         pedidos.forEach(p => p.visualizarPedido());
            //     }
            //     keyPress();
            //     break;

            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                keyPress();
                break;
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
    "            8 - Sair                                 \n" +
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

}

main();

