import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";
export function main() {

    let opcao: number
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
                break;

            case 2:
                console.log("\n\nListar todos os Bebês Reborn\n\n")
                break;

            case 3:
                console.log("\n\nBuscar Bebê Reborn por Código\n\n")
                break;

            case 4:
                console.log("\n\nAtualizar Dados do Bebê Reborn\n\n")
                break;

            case 5:
                console.log("\n\nRemover Bebê Reborn \n\n")
                break;

            case 6: 
                console.log("\n\nRealizar Venda\n\n")
                break;

            case 7: 
                console.log("\n\nListar Vendas\n\n")
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

}

main();

