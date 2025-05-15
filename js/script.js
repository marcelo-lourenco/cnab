const EXTENSOES_PERMITIDAS = ["txt", "rem", "ret"];

// Cores para tema dark (alto contraste com fundo preto)
const coresDark = [
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
  "#FF0000", // Vermelho puro
  "#00FF00", // Verde puro
  "#0000FF", // Azul puro
  "#FF00FF", // Magenta vibrante
  "#FFFF00", // Amarelo vibrante
  "#00FFFF", // Ciano vibrante
  "#FF8000", // Laranja intenso
  "#FF0080", // Rosa neon
  "#8000FF", // Roxo intenso
  "#00FF80", // Verde-água brilhante
  "#FF4000", // Vermelho-alaranjado
  "#40FF00", // Verde-limão
  "#0040FF", // Azul royal
  "#FF00BF"  // Magenta profundo
];

// Cores para tema light (alto contraste com fundo branco)
const coresLight = [
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
  "#FF69B4", // Rosa Choque
  "#FF0000", // Vermelho puro
  "#FF00FF", // Magenta vibrante
  "#FF8000", // Laranja intenso
  "#FF0080", // Rosa neon
  "#8000FF", // Roxo intenso
  "#FF4000", // Vermelho-alaranjado
  "#0040FF", // Azul royal
  "#FF00BF"  // Magenta profundo
];

let layoutArquivo = "";
let tipoArquivo = "";
let descricaoCampos = [];
let versaoLayout = "";
let banco = "";
let codigoBanco = "";

// Função para obter as cores baseadas no tema atual
function getCoresPorTema() {
  const theme = document.documentElement.getAttribute('data-bs-theme');
  return theme === 'dark' ? coresDark : coresLight;
}


/**
 * Identifica o banco com base nas 3 primeiras posições da primeira linha do arquivo.
 * @param {string} primeiraLinha - A primeira linha do arquivo a ser processado.
 * @returns {string} O nome do banco: "Bradesco" ou "Itaú".
 */
function identificarBanco(primeiraLinha) {

  if (layoutArquivo === "CNAB150") {
    codigoBanco = posicao(primeiraLinha, 31, 33);
  } else if (layoutArquivo === "CNAB240") {
    codigoBanco = posicao(primeiraLinha, 1, 3);
  } else if (layoutArquivo === "CNAB400") {
    codigoBanco = posicao(primeiraLinha, 77, 79);
  }

  if (codigoBanco === "237") {
    return "Bradesco";
  } else if (codigoBanco === "341") {
    return "Itaú";
  } else {
    return "Outros";
  }
}

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

function identificarVersaoLayout(primeiraLinha) {
  const versaoLayout = posicao(primeiraLinha, 164, 166)
  return versaoLayout;
}

function identificarTipoArquivo(primeiraLinha, layoutArquivo) {
  if (layoutArquivo === "CNAB400") {
    const tipoArq = posicao(primeiraLinha, 2, 2)
    if (tipoArq === "1") {
      return "remessa"
    } else if (tipoArq === "2") {
      return "retorno"
    }
  } else {
    return "";
  }
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
  const cores = getCoresPorTema();
  let tipo = "";
  let colunasCNABTipo = [];
  let resultado = "";

  // CNAB150
  if (layoutArquivo === "CNAB150") {
    const primeiraPosicao = posicao(linha, 1, 1);

    switch (primeiraPosicao) {
      case "A": tipo = "registroA"; break;
      case "C": tipo = "registroC"; break;
      case "D": tipo = "registroD"; break;
      case "F": tipo = "registroF"; break;
      case "M": tipo = "registroM"; break;
      case "N": tipo = "registroN"; break;
      case "O": tipo = "registroO"; break;
      case "P": tipo = "registroP"; break;
      case "W": tipo = "registroW"; break;
      case "Z": tipo = "registroZ"; break;
      default: tipo = "outros";
    }

    colunasCNABTipo = colunasCNAB150[tipo] || [];
  }
  // CNAB240
  else if (layoutArquivo === "CNAB240") {
    const tipoRegistro = posicao(linha, 8, 8);

    switch (tipoRegistro) {
      case "0": tipo = "headerArquivo"; break;
      case "1":
        tipo = versaoLayout === "050" ? "headerLoteE" : "headerLote";
        break;
      case "2": tipo = "iniciaisLote"; break;
      case "3":
        switch (posicao(linha, 14, 14)) {
          case "A": tipo = "segmentoA"; break;
          case "B": tipo = "segmentoB"; break;
          case "E": tipo = "segmentoE"; break;
          case "J":
            tipo = posicao(linha, 18, 19) === "52" ? "segmentoJ52" : "segmentoJ";
            break;
          case "O": tipo = "segmentoO"; break;
          case "N":

           console.log("EntreiN", )

            if (banco === "Bradesco") {
              let receita = posicao(linha, 111, 116);
              if (["008301", "8301", "005592", "5592", "001708", "1708"].includes(receita)) {
                tipo = "segmentoN2";
              } else {
                tipo = "segmentoNX";
              }

            } else if (banco === "Itaú") {
              console.log("Entrei no banco", banco)
              let tributo = posicao(linha, 18, 19);
              console.log("tributo", tributo)
              if (tributo === '01') { // GPF
                tipo = "segmentoN1";
              } else if (tributo === '02') { // DARF
                tipo = "segmentoN2";
              } else if (tributo === '03') { // DARF SIMPLES
                tipo = "segmentoN3";
              } else if (tributo === '05') { // GARE - SP ICMS
                tipo = "segmentoN5";
              } else if (tributo === '07' || tributo === '08') { // 07 - IPVA // 08 - DPVAT
                tipo = "segmentoN7";
              } else if (tributo === '11') { // 11=FGTS
                tipo = "segmentoN11";
              } else {
                tipo = "segmentoNX";
              }
            }
            break;
          case "Z": tipo = "segmentoZ"; break;
          default: tipo = "outros";
        }
        break;
      case "4": tipo = "finaisLote"; break;
      case "5":
        tipo = versaoLayout === "050" ? "trailerLoteE" : "trailerLote";
        break;
      case "9": tipo = "trailerArquivo"; break;
      default: tipo = "outros";
    }

    colunasCNABTipo = colunasCNAB240[tipo] || [];
  }
  // CNAB400
  else if (layoutArquivo === "CNAB400") {
    const primeiraPosicao = posicao(linha, 1, 1);

    if (tipoArquivo === "remessa") {
      switch (primeiraPosicao) {
        case "0": tipo = "remessaTipo0"; break;
        case "1": tipo = "remessaTipo1"; break;
        case "9": tipo = "remessaTipo9"; break;
        default: tipo = "outros";
      }
    } else if (tipoArquivo === "retorno") {
      switch (primeiraPosicao) {
        case "0": tipo = "retornoTipo0"; break;
        case "1": tipo = "retornoTipo1"; break;
        case "9": tipo = "retornoTipo9"; break;
        default: tipo = "outros";
      }
    }

    colunasCNABTipo = colunasCNAB400[tipo] || [];
  }

  for (const coluna of colunasCNABTipo) {
    const [ini, fin, desc] = coluna;
    const campo = posicao(linha, ini, fin);
    let descricao = desc.descricao;

    resultado += `<span style="color: ${cores[ini % cores.length]};" title="${descricao.join(" | ")}" onclick="exibirTooltip(event, '${descricao.join("|")}')">${campo}</span>`;
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

        // Identificar o banco com base na primeira linha
        banco = identificarBanco(linhas[0]);

        // Carregar os scripts correspondentes ao banco
        if (banco === "Bradesco") {
          descricaoCampos150 = descricaoCampos150Bradesco;
          descricaoCampos240 = descricaoCampos240Bradesco;
          descricaoCampos400 = descricaoCampos400Bradesco;
          colunasCNAB150 = colunasCNAB150Bradesco;
          colunasCNAB240 = colunasCNAB240Bradesco;
          colunasCNAB400 = colunasCNAB400Bradesco;
        } else if (banco === "Itaú") {
          descricaoCampos150 = descricaoCampos150Itau;
          descricaoCampos240 = descricaoCampos240Itau;
          descricaoCampos400 = descricaoCampos400Itau;
          colunasCNAB150 = colunasCNAB150Itau;
          colunasCNAB240 = colunasCNAB240Itau;
          colunasCNAB400 = colunasCNAB400Itau;
        } else {
          alert(`Ops! Ainda não implementamos este layout para o banco ${codigoBanco}.`);
          return;
        }

        versaoLayout = identificarVersaoLayout(linhas[0]);
        tipoArquivo = identificarTipoArquivo(linhas[0], layoutArquivo); // cnab 400 - 1=remessa, 2=Retorno

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
        document.getElementById('layoutArquivo').textContent = `${banco} - ${layoutArquivo}`;
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
  tooltip.classList.add("tooltip-descricao"); // Adiciona a classe 'tooltip' ao elemento

  // Ícone de ajuda dentro do tooltip
  const icon = document.createElement("span");
  icon.classList.add("tooltip-icon-descricao"); // Adiciona a classe 'tooltip-icon' ao elemento
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
  const codigoFiltro = codigoDescricao || document.getElementById("codigoFiltro").value;
  if (!codigoFiltro) return;

  const codigoSelecionado = descricaoCampos.find((item) => item[0] === codigoFiltro);

  if (codigoSelecionado) {
    const descricaoModal = document.getElementById("descricaoModal");
    const linhas = codigoSelecionado[1].split('\n');
    const tituloDescricao = linhas.shift(); // Retira a primeira linha do texto (título da descrição)

    // Atualiza o título e o conteúdo do modal
    document.getElementById("modalDescricaoLabel").textContent = `${codigoSelecionado[0]} - ${tituloDescricao}`;
    descricaoModal.innerHTML = `<pre>${linhas.join('<br>')}</pre>`;

    // Exibe o modal usando Bootstrap
    const modal = new bootstrap.Modal(document.getElementById("modalDescricao"));
    modal.show();
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


/*
document.getElementById('icon-info').addEventListener('click', function () {
  var notificationsContainer = document.getElementById('notificationsContainer');
  notificationsContainer.style.display = notificationsContainer.style.display === 'none' ? 'block' : 'none';
});


document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('options.html')) {
    const icon = document.getElementById('icon-info');
    let blinkCount = 0;
    const maxBlinks = 4;
    const blinkInterval = 1000; // 1 segundo

    const blinkIcon = () => {
      icon.classList.toggle('icon-info-blink');
      blinkCount++;

      if (blinkCount < maxBlinks * 2) {
        setTimeout(blinkIcon, blinkInterval / 2);
      } else {
        icon.classList.remove('icon-info-blink');
      }
    };
    setTimeout(blinkIcon, blinkInterval / 2);
  }
});
*/