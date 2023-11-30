
const cores = [
  "#FFD700", // Ouro
  "#00CED1", // Azul Turquesa Média
  "#DA70D6", // Orquídea Média
  "#FF1493", // Rosa Choque
  "#8A2BE2", // Azul Violeta
  "#32CD32", // Verde Limão
  "#FF4500", // Laranja Vermelho
  "#69dcff", // Turquesa Brilhante
  "#FF6347", // Tomate
  "#1E90FF", // Azul Dodger
  "#FFA500", // Laranja
  "#ADFF2F", // Verde Amarelo
  "#FF69B4", // Rosa Choque
  "#FFFF00", // Amarelo
];

let layoutArquivo = "";
let descricaoCampos = [];


/**
 * Identifica o layout do arquivo (CNAB240 ou CNAB400) com base na primeira linha.
 * @param {string} primeiraLinha - A primeira linha do arquivo a ser processado.
 * @returns {string} O tipo de layout do arquivo: "CNAB240" ou "CNAB400".
 */
function identificarLayoutArquivo(primeiraLinha) {
  primeiraLinha = primeiraLinha.replace(/\r/g, '').replace(/\r/g, '');

  const layoutMapping = {
    150: "CNAB150",
    240: "CNAB240",
    400: "CNAB400",
  };

  const primeiraLinhaLength = primeiraLinha.length;
  const layoutArquivo = layoutMapping[primeiraLinhaLength] || `Layout inválido. Primeira linha com ${primeiraLinhaLength} posições.`;
  return layoutArquivo;
}


/**
 * Retorna a posição de um trecho dentro de uma string.
 * @param {string} linha - A string onde deseja buscar o trecho.
 * @param {string} ini - O trecho que se deseja buscar na string.
 * @param {string} fin - O trecho que indica o fim da busca na string.
 * @returns {Object} Um objeto contendo as propriedades "inicio" e "fim".
 */
function posicao(linha, ini, fin) {
  return linha.slice((ini - 1), fin);
}


/**
 * Colore o texto da linha e aplicar o tooltip com base no layout do arquivo.
 * @param {string} linha - A linha do arquivo a ser colorida e processada.
 * @param {string} layoutArquivo - O tipo de layout do arquivo: "CNAB240" ou "CNAB400".
 * @returns {string} O conteúdo da linha colorida com os tooltips aplicados.
 */
function colorirTexto(linha, layoutArquivo) {

  let tipo = "";
  let colunasCNABTipo = [];
  let resultado = "";

  // CNAB150
  if (layoutArquivo === "CNAB150") {

    const primeiraPosicao = posicao(linha, 1, 1);

    switch (primeiraPosicao) {
      case "A": tipo = "registroA"; break; // HEADER
      case "C": tipo = "registroC"; break; // OCORRÊNCIAS NO CADASTRAMENTO DO DÉBITO AUTOMÁTICO
      case "D": tipo = "registroD"; break; // ALTERAÇÃO DE CHAVES PELA EMPRESA
      case "F": tipo = "registroF"; break; // RETORNO DO DÉBITO AUTOMÁTICO
      case "M": tipo = "registroM"; break; // INCLUSÃO DE CONTAS NO DÉBITO AUTOMÁTICO
      case "N": tipo = "registroN"; break; // EXCLUSÃO DE CONTAS NO DÉBITO AUTOMÁTICO
      case "O": tipo = "registroO"; break; // BLOQUEIO DE VALORES AGENDADOS
      case "P": tipo = "registroP"; break; // ATUALIZAÇÃO DO CADASTRO DE CONCESSIONÁRIAS E SERVIÇOS
      case "W": tipo = "registroW"; break; // DETALHE LANÇAMENTOS FUTUROS PARA CLIENTES
      case "Z": tipo = "registroZ"; break; // TRAILLER
      default: tipo = "outros";
    }

    colunasCNABTipo = colunasCNAB150[tipo] || [];
  }

  // CNAB240
  else if (layoutArquivo === "CNAB240") {

    const tipoRegistro = posicao(linha, 8, 8);

    switch (tipoRegistro) {
      case "0": tipo = "headerArquivo"; break;
      case "1": tipo = "headerLote"; break;
      case "2": tipo = "iniciaisLote"; break;
      case "3":

        switch (posicao(linha, 14, 14)) {
          case "A": tipo = "segmentoA"; break;
          case "B": tipo = "segmentoB"; break;
          case "E": tipo = "segmentoE"; break;
          case "J":
            if (posicao(linha, 18, 19) === "52") {
              tipo = "segmentoJ52";
            } else {
              tipo = "segmentoJ";
            }
            break;
          case "O": tipo = "segmentoO"; break;
          case "N":
            let receita = posicao(linha, 111, 116);
            if (["008301", "8301", "005592", "5592", "001708", "1708"].includes(receita)) {
              tipo = "segmentoN2";
            } else {
              tipo = "segmentoNX";
            }
            break;

          case "Z": tipo = "segmentoZ"; break;
          default: tipo = "outros";
        }
        break;

      case "4": tipo = "finaisLote"; break;
      case "5": tipo = "trailerLote"; break;
      case "9": tipo = "trailerArquivo"; break;
      default: tipo = "outros";
    }

    colunasCNABTipo = colunasCNAB240[tipo] || [];
  }

  // CNAB400
  else if (layoutArquivo === "CNAB400") {

    const primeiraPosicao = posicao(linha, 1, 1);

    switch (primeiraPosicao) {
      case "0": tipo = "tipo0"; break;
      case "1": tipo = "tipo1"; break;
      case "9": tipo = "tipo9"; break;
      default: tipo = "outros";
    }

    colunasCNABTipo = colunasCNAB400[tipo] || [];
  }

  for (const coluna of colunasCNABTipo) {
    const [ini, fin, desc] = coluna;
    const campo = posicao(linha, ini, fin);
    let descricao = desc.descricao;

    resultado += `<span style="color: ${cores[ini % cores.length]}; border: 1px solid #AAA;" title="${descricao.join(" | ")}" onclick="exibirTooltip(event, '${descricao.join("|")}')">${campo}</span>`;
  }

  return resultado;
}


/**
 * Processa o arquivo selecionado pelo usuário.
 * @param {Event} event - O evento de mudança de arquivo acionado pelo usuário.
 */
function processarArquivo(event) {

  const mainElement = document.getElementById("main");
  mainElement.style.flex = 'none'; // Define a propriedade flex para none, removendo a flexibilidade.

  const file = event.target.files[0];
  const extensaoPermitida = ["txt", "rem", "ret"];

  if (file) {
    const arquivoExtensao = file.name.split(".").pop().toLowerCase();

    if (extensaoPermitida.includes(arquivoExtensao)) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const conteudo = e.target.result;
        const linhas = conteudo.split('\n');
        let resultadoFinal = '';

        // Identificar o layout do arquivo com base na primeira linha
        layoutArquivo = identificarLayoutArquivo(linhas[0]);

        // Antes de preencher, limpar o campo de seleção
        limparCampoDescricao();

        // Chamando a função para preencher o select com os códigos da descrição
        preencherCampoDescricao(layoutArquivo);

        const tabelaConteudo = document.getElementById('conteudoColorido');
        tabelaConteudo.innerHTML = ''; // Limpar o conteúdo anterior da tabela

        for (let i = 0; i < linhas.length; i++) {
          const linha = linhas[i];
          resultadoFinal += colorirTexto(linha, layoutArquivo) + '<br>';
          const novaLinha = tabelaConteudo.insertRow();
          const celulaNumero = novaLinha.insertCell(); // Coluna para os números das linhas da tabela
          const celulaRegistro = novaLinha.insertCell(); // Coluna os dados dos arquivos

          celulaNumero.innerText = i + 1; // Número da linha
          celulaNumero.classList.add('celula-numero-linha'); // Adiciona a classe "celula-numero-linha"

          celulaRegistro.innerHTML = colorirTexto(linha, layoutArquivo);
          celulaRegistro.classList.add('celula-registro');
        }

        // Após carregar o conteúdo, alterar o background-color para #000000
        tabelaConteudo.classList.remove('conteudo-inicial');

        // Inserir o layout do arquivo selecionado dentro do elemento <div> com o id "tipoArquivo"
        document.getElementById('tipoArquivo').textContent = `${layoutArquivo}`;
      };

      reader.readAsText(file);
    } else {
      alert("Por favor, selecione um arquivo com extensão .txt, .rem ou .ret.");
    }
  }
}


/**
* Limpa as opções adicionais do campo "select id='codigoFiltro'".
*/
function limparCampoDescricao() {
  const selectElement = document.getElementById('codigoFiltro');
  const options = selectElement.getElementsByTagName('option');

  // Começar a remoção a partir do segundo elemento (índice 1) para manter a primeira opção.
  for (let i = options.length - 1; i >= 1; i--) {
    selectElement.removeChild(options[i]);
  }
}


/**
 * Preenche o select com as opções do array descricaoCampos.
 * @param {string} layoutArquivo - O tipo de layout do arquivo: "CNAB240" ou "CNAB400".
 */
function preencherCampoDescricao(layoutArquivo) {
  const selectElement = document.getElementById('codigoFiltro');

  //descricaoCampos = layoutArquivo === "CNAB240" ? descricaoCampos240 : descricaoCampos400;

  if (layoutArquivo === "CNAB150") {
    descricaoCampos = descricaoCampos150;
  } else if (layoutArquivo === "CNAB240") {
    descricaoCampos = descricaoCampos240;
  } else if (layoutArquivo === "CNAB400") {
    descricaoCampos = descricaoCampos400;
  } else {
    descricaoCampos = "Não Localizado";
  }
  /* 
    const descricaoCamposMapping = {
      "CNAB150": descricaoCampos150,
      "CNAB240": descricaoCampos240,
      "CNAB400": descricaoCampos400,
      "default": "Não Localizado"
    };
  
    const descricaoCampos = descricaoCamposMapping[layoutArquivo] || descricaoCamposMapping["default"];
   */
  descricaoCampos.forEach(item => {
    const option = document.createElement('option');
    selectElement.appendChild(option);
    option.value = item[0];
    option.textContent = item[0];
    selectElement.appendChild(option);
  });
}


/**
 * Exibe um tooltip com a descrição do conteúdo ao clicar em um valor.
 * @param {Event} event - O evento de clique que acionou a exibição do tooltip.
 * @param {string} descricao - A descrição do conteúdo a ser exibida no tooltip.
 */
function exibirTooltip(event, descricao) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip"); // Adiciona a classe 'tooltip' ao elemento

  // Ícone de ajuda dentro do tooltip
  const icon = document.createElement("span");
  icon.classList.add("tooltip-icon");
  icon.innerText = "?";
  tooltip.appendChild(icon);

  // Texto da descrição dentro do tooltip
  const tooltipText = document.createElement("span");
  tooltipText.innerText = descricao;
  tooltip.appendChild(tooltipText);

  document.body.appendChild(tooltip);

  // Posiciona o tooltip próximo ao cursor do mouse
  tooltip.style.left = `${event.clientX + 10}px`;
  tooltip.style.top = `${event.clientY + 10}px`;

  // Adiciona a classe 'tooltip-target' ao elemento alvo
  const target = event.target;
  target.classList.add("tooltip-target");

  // Remove o tooltip após 5 segundos
  setTimeout(() => {
    tooltip.remove();
  }, 5000);

  // Remove a classe 'tooltip-target' do elemento após 5 segundos
  setTimeout(() => {
    target.classList.remove("tooltip-target");
  }, 5000);

  // Exibe o modal com a descrição do campo ao clicar no ícone de ajuda
  icon.addEventListener("click", () => {
    let codigoDescricao = descricao.split('|')
    tooltip.remove();
    exibirModal(codigoDescricao[1]);
  });
}


/**
 * Exibe um tooltip com a descrição do conteúdo ao clicar em um valor.
 * @param {Event} event - O evento de clique que acionou a exibição do tooltip.
 * @param {string} descricao - A descrição do conteúdo a ser exibida no tooltip.
 */
function exibirModal(codigoDescricao) {
  let codigoFiltro = codigoDescricao ? codigoDescricao : document.getElementById("codigoFiltro").value;
  if (codigoFiltro === "") return;

  const codigoSelecionado = descricaoCampos.find((item) => item[0] === codigoFiltro);

  if (codigoSelecionado) {
    const descricaoModal = document.getElementById("descricaoModal");
    const linhas = codigoSelecionado[1].split('\n');
    const tituloDescricao = linhas.shift(); // Retira a primeira linha do texto (título da descrição)

    descricaoModal.innerHTML = `<pre class="descricao-modal"><h2>${codigoSelecionado[0]} - ${tituloDescricao}</h2>${linhas.join('<br>')}</pre>`;

    const modal = document.getElementById("modal");
    modal.style.display = "block";

    const modalContent = document.getElementById("modalContent");
    const windowHeight = window.innerHeight;
    const contentHeight = modalContent.offsetHeight;
    if (contentHeight >= windowHeight) {
      modalContent.classList.add("scrollbar");
    }
  }
}


/**
 * Fecha o modal que exibe a descrição do conteúdo.
 */
function fecharModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  const modalContent = document.getElementById("modalContent");
  modalContent.classList.remove("scrollbar");
}


/**
 * Fecha o modal ao clicar fora dele.
 */
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    fecharModal();
  }
};