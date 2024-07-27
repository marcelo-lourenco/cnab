
// Definição das colunas para cada tipo de arquivo CNAB240

// TODO
// ["Tipo 1 - 022 a 024", "Códigos da Carteira."],
// ["Tipo 1 - 025 a 029", "Códigos da Agência Beneficiários, sem o Dígito. 30 a 36 - Contas-Corrente."],
// ["Tipo 1 - 037 a 037", "Dígitos da Conta."],

const colunasCNAB400 = {
  // remessa
  remessaTipo0: [
    [1, 1, { descricao: ["001 a 001", "   ", "Identificação do Registro"] }],
    [2, 2, { descricao: ["002 a 002", "   ", "Identificação do Arquivo - Remessa"] }],
    [3, 9, { descricao: ["003 a 009", "   ", "Literal Remessa"] }],
    [10, 11, { descricao: ["010 a 011", "   ", "Código de Serviço"] }],
    [12, 26, { descricao: ["012 a 026", "   ", "Literal Serviço"] }],
    [27, 46, { descricao: ["027 a 046", "Header - 027 a 046", "Código da Empresa"] }],
    [47, 76, { descricao: ["047 a 076", "   ", "Nome da Empresa"] }],
    [77, 79, { descricao: ["077 a 079", "   ", "Número do Bradesco na Câmara de Compensação"] }],
    [80, 94, { descricao: ["080 a 094", "   ", "Nome do Banco por Extenso"] }],
    [95, 100, { descricao: ["095 a 100", "Header - 095 a 100", "Data da Gravação do Arquivo"] }],
    [101, 108, { descricao: ["101 a 108", "Header - 111 a 117", "Branco"] }],
    [109, 110, { descricao: ["109 a 110", "Header - 111 a 117", "Identificação do Sistema"] }],
    [111, 117, { descricao: ["111 a 117", "Header - 111 a 117", "Nº Sequencial de Remessa"] }],
    [118, 394, { descricao: ["118 a 394", "   ", "Branco"] }],
    [395, 400, { descricao: ["395 a 400", "   ", "Nº Sequencial do Registro de Um em Um"] }]
  ],
  remessaTipo1: [
    [1, 1, { descricao: ["001 a 001", "   ", "Identificação do Registro"] }],
    [2, 6, { descricao: ["002 a 006", "Tipo 1 - 002 a 020", "Agência de Débito (opcional)"] }],
    [7, 7, { descricao: ["007 a 007", "Tipo 1 - 002 a 020", "Dígito da Agência de Débito (opcional)"] }],
    [8, 12, { descricao: ["008 a 012", "Tipo 1 - 002 a 020", "Razão da Conta-Corrente (opcional)"] }],
    [13, 19, { descricao: ["013 a 019", "Tipo 1 - 002 a 020", "Conta-Corrente (opcional)"] }],
    [20, 20, { descricao: ["020 a 020", "Tipo 1 - 002 a 020", "Dígito da Conta-Corrente (opcional)"] }],
    [21, 37, { descricao: ["021 a 037", "Tipo 1 - 021 a 037", "Identificação da Empresa Beneficiária no Banco"] }],
    [38, 62, { descricao: ["038 a 062", "Tipo 1 - 038 a 062", "Nº Controle do Participante"] }],
    [63, 65, { descricao: ["063 a 065", "Tipo 1 - 063 a 065", "Código do Banco a ser debitado na Câmara de Compensação"] }],
    [66, 66, { descricao: ["066 a 066", "Tipo 1 - 066 a 066", "Campo de Multa"] }],
    [67, 70, { descricao: ["067 a 070", "Tipo 1 - 067 a 070", "Percentual de Multa"] }],
    [71, 81, { descricao: ["071 a 081", "Tipo 1 - 071 a 082", "Identificação do Título no Banco"] }],
    [82, 82, { descricao: ["082 a 082", "Tipo 1 - 071 a 082", "Dígito de Autoconferência do Número Bancário"] }],
    [83, 92, { descricao: ["083 a 092", "   ", "Desconto Bonificação por dia"] }],
    [93, 93, { descricao: ["093 a 093", "Tipo 1 - 093 a 093", "Condição para Emissão da Papeleta de Cobrança"] }],
    [94, 94, { descricao: ["094 a 094", "Tipo 1 - 094 a 094", "Ident. se emite Boleto para Débito Automático"] }],
    [95, 104, { descricao: ["095 a 104", "   ", "Identificação da Operação do Banco"] }],
    [105, 105, { descricao: ["105 a 105", "Tipo 1 - 105 a 105", "Indicador Rateio Crédito (opcional)"] }],
    [106, 106, { descricao: ["106 a 106", "Tipo 1 - 106 a 106", "Endereçamento para Aviso do Débito Automático em Conta-Corrente (opcional)"] }],
    [107, 108, { descricao: ["107 a 108", "Tipo 1 - 107 a 108", "Quantidade de Pagamentos"] }],
    [109, 110, { descricao: ["109 a 110", "Tipo 1 - 109 a 110", "Identificação da Ocorrência"] }],
    [111, 120, { descricao: ["111 a 120", "   ", "Nº do Documento"] }],
    [121, 126, { descricao: ["121 a 126", "Tipo 1 - 121 a 126", "Data do Vencimento do Título"] }],
    [127, 139, { descricao: ["127 a 139", "   ", "Valor do Título"] }],
    [140, 142, { descricao: ["140 a 142", "   ", "Banco Encarregado da Cobrança"] }],
    [143, 147, { descricao: ["143 a 147", "   ", "Agência Depositária"] }],
    [148, 149, { descricao: ["148 a 149", "   ", "Espécie de Título"] }],
    [150, 150, { descricao: ["150 a 150", "   ", "Identificação"] }],
    [151, 156, { descricao: ["151 a 156", "   ", "Data da Emissão do Título"] }],
    [157, 158, { descricao: ["157 a 158", "Tipo 1 - 157 a 160", "19 Instrução"] }],
    [159, 160, { descricao: ["159 a 160", "Tipo 1 - 157 a 160", "29 Instrução"] }],
    [161, 173, { descricao: ["161 a 173", "Tipo 1 - 161 a 173", "Valor a ser Cobrado por Dia de Atraso"] }],
    [174, 179, { descricao: ["174 a 179", "   ", "Data Limite P/Concessão de Desconto"] }],
    [180, 192, { descricao: ["180 a 192", "   ", "Valor do Desconto"] }],
    [193, 205, { descricao: ["193 a 205", "Tipo 1 - 193 a 205", "Valor do IOF"] }],
    [206, 218, { descricao: ["206 a 218", "   ", "Valor do Abatimento a ser Concedido ou Cancelado"] }],
    [219, 220, { descricao: ["219 a 220", "   ", "Identificação do Tipo de Inscrição do Pagador"] }],
    [221, 234, { descricao: ["221 a 234", "Tipo 1 - 221 a 234", "Nº Inscrição do Pagador"] }],
    [235, 274, { descricao: ["235 a 274", "   ", "Nome do Pagador"] }],
    [275, 314, { descricao: ["275 a 314", "   ", "Endereço Completo"] }],
    [315, 326, { descricao: ["315 a 326", "Tipo 1 - 315 a 326", "19 Mensagem"] }],
    [327, 331, { descricao: ["327 a 331", "   ", "CEP"] }],
    [332, 334, { descricao: ["332 a 334", "   ", "Sufixo do CEP"] }],
    [335, 394, { descricao: ["335 a 394", "Tipo 1 - 335 a 394", "Beneficiário Final ou 29 Mensagem"] }],
    [395, 400, { descricao: ["395 a 400", "   ", "Nº Sequencial do Registro"] }],
  ],
  remessaTipo9: [
    [1, 1, { descricao: ["001 a 001", "   ", "Identificação Registro"] }],
    [2, 394, { descricao: ["002 a 394", "   ", "Branco"] }],
    [395, 400, { descricao: ["395 a 400", "   ", "Número Sequencial de Registro"] }],
  ],



  // retorno
  retornoTipo0: [
    [  1 ,   1    , { descricao: ["001 a 001", "   ", "Identificação do Registro | 001 | 0"] }],
    [  2 ,   2    , { descricao: ["002 a 002", "   ", "Identificação do Arquivo-Retorno | 001 | 2"] }],
    [  3 ,   9    , { descricao: ["003 a 009", "   ", "Literal Retorno | 007 | Retorno"] }],
    [ 10 ,  11    , { descricao: ["010 a 011", "   ", "Código do Serviço | 002 | 01"] }],
    [ 12 ,  26    , { descricao: ["012 a 026", "   ", "Literal Serviço | 015 | Cobrança"] }],
    [ 27 ,  46    , { descricao: ["027 a 046", "   ", "Código da Empresa | 020 | Nº Empresa "] }],
    [ 47 ,  76    , { descricao: ["047 a 076", "   ", "Nome da Empresa por Extenso | 030 | Razão Social"] }],
    [ 77 ,  79    , { descricao: ["077 a 079", "   ", "Nº do Bradesco na Câmara Compensação | 003 | 237"] }],
    [ 80 ,  94    , { descricao: ["080 a 094", "   ", "Nome do Banco por Extenso | 015 | Bradesco"] }],
    [ 95 , 100    , { descricao: ["095 a 100", "   ", "Data da Gravação do Arquivo | 006 | DDMMAA"] }],
    [101 , 108    , { descricao: ["101 a 108", "   ", "Densidade de Gravação | 008 | 01600000"] }],
    [109 , 113    , { descricao: ["109 a 113", "   ", "Nº Aviso Bancário | 005 | Nº Aviso"] }],
    [114 , 379    , { descricao: ["114 a 379", "   ", "Branco | 266 | Branco"] }],
    [380 , 385    , { descricao: ["380 a 385", "   ", "Data do Crédito | 006 | DDMMAA"] }],
    [386 , 394    , { descricao: ["386 a 394", "   ", "Branco | 009 | Branco"] }],
    [395 , 400    , { descricao: ["395 a 400", "   ", "Nº Sequencial de Registro | 006 | 000001"] }]
  ],
  retornoTipo1: [
    [  1 ,   1 , { descricao: ["001 a 001", "  ", "Identificação do Registro | 001 | 1"] }],
    [  2 ,   3 , { descricao: ["002 a 003", "  ", "Tipo de Inscrição Empresa | 002 | 01-CPF 02-CNPJ"] }],
    [  4 ,  17 , { descricao: ["004 a 017", "  ", "Nº Inscrição da Empresa | 014 | CNPJ/CPF Número Filial Controle"] }],
    [ 18 ,  20 , { descricao: ["018 a 020", "  ", "Zeros | 003 | Zeros"] }],
    [ 21 ,  37 , { descricao: ["021 a 037", "  ", "Identificação da Empresa Beneficiário no Banco | 017 | Zero Carteira Agência Conta-Corrente"] }],
    [ 38 ,  62 , { descricao: ["038 a 062", "  ", "Nº Controle do Participante | 025 | Uso da Empresa"] }],
    [ 63 ,  70 , { descricao: ["063 a 070", "  ", "Zeros | 008 | Zeros"] }],
    [ 71 ,  82 , { descricao: ["071 a 082", "  ", "Identificação do Título no Banco | 012 | Nº Banco"] }],
    [ 83 ,  92 , { descricao: ["083 a 092", "  ", "Uso do Banco | 010 | Zeros"] }],
    [ 93 , 104 , { descricao: ["093 a 104", "  ", "Uso do Banco | 012 | Zeros"] }],
    [105 , 105 , { descricao: ["105 a 105", "  ", "Indicador de Rateio Crédito | 001 | “R”"] }],
    [106 , 107 , { descricao: ["106 a 107", "  ", "Pagamento Parcial | 002 | 00 - Não foi informado parcelamento ou o parcelamento foi rejeitado / Diferente 00 - Parcelamento aceito"] }],
    [108 , 108 , { descricao: ["108 a 108", "  ", "Carteira | 001 | Carteira"] }],
    [109 , 110 , { descricao: ["109 a 110", "  ", "Identificação de Ocorrência | 002 | |"] }],
    [111 , 116 , { descricao: ["111 a 116", "  ", "Data Ocorrência no Banco | 006 | DDMMAA"] }],
    [117 , 126 , { descricao: ["117 a 126", "  ", "Número do Documento | 010 | Nº do Documento"] }],
    [127 , 146 , { descricao: ["127 a 146", "  ", "Identificação do Título no Banco | 020 | Nº Banco"] }],
    [147 , 152 , { descricao: ["147 a 152", "  ", "Data Vencimento do Título | 006 | DDMMAA"] }],
    [153 , 165 , { descricao: ["153 a 165", "  ", "Valor do Título | 013 | Valor Título"] }],
    [166 , 168 , { descricao: ["166 a 168", "  ", "Banco Cobrador | 003 | Código do Banco Câmara de Compensação"] }],
    [169 , 173 , { descricao: ["169 a 173", "  ", "Agência Cobradora | 005 | Código da Agência do Banco Cobrador"] }],
    [174 , 175 , { descricao: ["174 a 175", "  ", "Espécie do Título | 002 | Branco"] }],
    [176 , 188 , { descricao: ["176 a 188", "  ", "Despesas de cobrança para os Códigos de Ocorrência 02 - Entradas Confirmadas 28 - Débitos de Tarifas| 013| Valor Despesa"] }],
    [189 , 201 , { descricao: ["189 a 201", "  ", "Outras Despesas Custas de Protesto | 013 | Valor Outras Despesas"] }],
    [202 , 214 , { descricao: ["202 a 214", "  ", "Juros Operação em Atraso | 013 | Será informado Com Zeros"] }],
    [215 , 227 , { descricao: ["215 a 227", "  ", "IOF Devido | 013 | Valor do IOF"] }],
    [228 , 240 , { descricao: ["228 a 240", "  ", "Abatimento Concedido sobre o Título | 013 | Valor Abatimento Concedido"] }],
    [241 , 253 , { descricao: ["241 a 253", "  ", "Desconto Concedido | 013 | Valor Desconto Concedido"] }],
    [254 , 266 , { descricao: ["254 a 266", "  ", "Valor Pago | 013 | Valor Pago"] }],
    [267 , 279 , { descricao: ["267 a 279", "  ", "Juros de Mora | 013 | Juros de Mora"] }],
    [280 , 292 , { descricao: ["280 a 292", "  ", "Outros Créditos | 013 | Será informado com Zeros"] }],
    [293 , 294 , { descricao: ["293 a 294", "  ", "Brancos | 002 | Brancos"] }],
    [295 , 295 , { descricao: ["295 a 295", "  ", "Motivo do Código de Ocorrência 25 (Confirmação de Instrução de Protesto Falimentar e (Do Código de Ocorrência 19 Confirmação de Instrução de Protesto) | 001| A - Aceito D - Desprezado"] }],
    [296 , 301 , { descricao: ["296 a 301", "  ", "Data do Crédito | 006 | DDMMAA"] }],
    [302 , 304 , { descricao: ["302 a 304", "  ", "Origem Pagamento | 003 | Origem"] }],
    [305 , 314 , { descricao: ["305 a 314", "  ", "Brancos | 010 | Brancos"] }],
    [315 , 318 , { descricao: ["315 a 318", "  ", "Quando Cheque Bradesco informe 0237 | 004 | Código do Banco"] }],
    [319 , 328 , { descricao: ["319 a 328", "  ", "Motivos das Rejeições para os Códigos de Ocorrência das Posições 109 a 110 | 010| Motivo"] }],
    [329 , 368 , { descricao: ["329 a 368", "  ", "Brancos | 040 | Brancos"] }],
    [369 , 370 , { descricao: ["369 a 370", "  ", "Número do Cartório | 002 | Número do Cartório"] }],
    [371 , 380 , { descricao: ["371 a 380", "  ", "Número do Protocolo | 010 | Número do Protocolo"] }],
    [381 , 394 , { descricao: ["381 a 394", "  ", "Brancos | 014 | Brancos"] }],
    [395 , 400 , { descricao: ["395 a 400", "  ", "Nº Sequencial de Registro | 006 | Nº Sequencial Registro"] }], 
  ],
  retornoTipo9: [
    [  1 ,   1, { descricao: ["001 a 001", "   ", "Identificação do Registro | 001 | 9"] }],
    [  2 ,   2, { descricao: ["002 a 002", "   ", "Identificação do Retorno | 001 | 2"] }],
    [  3 ,   4, { descricao: ["003 a 004", "   ", "Identificação Tipo de Registro | 002 | 01"] }],
    [  5 ,   7, { descricao: ["005 a 007", "   ", "Código do Banco | 003 | 237"] }],
    [  8 ,  17, { descricao: ["008 a 017", "   ", "Brancos | 010 | Brancos"] }],
    [ 18 ,  25, { descricao: ["018 a 025", "   ", "Quantidade de Títulos em Cobrança | 008 | Quantidade de Títulos em Cobrança"] }],
    [ 26 ,  39, { descricao: ["026 a 039", "   ", "Valor Total em Cobrança | 014 | Valor Total em Cobrança"] }],
    [ 40 ,  47, { descricao: ["040 a 047", "   ", "Nº do Aviso Bancário | 008 | Nº do Aviso Bancário"] }],
    [ 48 ,  57, { descricao: ["048 a 057", "   ", "Brancos | 010 | Brancos"] }],
    [ 58 ,  62, { descricao: ["058 a 062", "   ", "Quantidade de RegistrosOcorrência 02 - Confirmação de Entradas | 005 | Quantidade de Registros"] }],
    [ 63 ,  74, { descricao: ["063 a 074", "   ", "Valor dos Registros - Ocorrência 02 - Confirmação de Entradas | 012 | Valor dos Registros"] }],
    [ 75 ,  86, { descricao: ["075 a 086", "   ", "Valor dos Registros-Ocorrência 06 - Liquidação | 012 | Valor dos Registros"] }],
    [ 87 ,  91, { descricao: ["087 a 091", "   ", "Quantidade dos Registros - Ocorrência 06 - Liquidação | 005 | Quantidade de Registros"] }],
    [ 92 , 103, { descricao: ["092 a 103", "   ", "Valor dos Registros - Ocorrência 06 | 012 | Valor dos Registros"] }],
    [104 , 108, { descricao: ["104 a 108", "   ", "Quantidade dos Registros - Ocorrência 09 e 10-Títulos baixados | 005 | Quantidade de Registros Baixados"] }],
    [109 , 120, { descricao: ["109 a 120", "   ", "Valor dos Registros - Ocorrência 09 e 10 - Títulos Baixados | 012 | Valor dos Registros Baixados"] }],
    [121 , 125, { descricao: ["121 a 125", "   ", "Quantidade de Registros - Ocorrência 13 - Abatimento Cancelado | 005 | Quantidade de Registros"] }],
    [126 , 137, { descricao: ["126 a 137", "   ", "Valor dos Registros - Ocorrência 13 - Abatimento Cancelado | 012 | Valor dos Registros"] }],
    [138 , 142, { descricao: ["138 a 142", "   ", "Quantidade dos Registros - Ocorrência 14 - Vencimento Alterado | 005 | Quantidade dos Registros"] }],
    [143 , 154, { descricao: ["143 a 154", "   ", "Valor dos Registros - Ocorrência 14 - Vencimento Alterado | 012 | Valor dos Registros"] }],
    [155 , 159, { descricao: ["155 a 159", "   ", "Quantidade dos RegistrosOcorrência 12 - Abatimento Concedido | 005 | Quantidade de Registros"] }],
    [160 , 171, { descricao: ["160 a 171", "   ", "Valor dos Registros - Ocorrência 12 - Abatimento Concedido | 012 | Valor dos Registros"] }],
    [172 , 176, { descricao: ["172 a 176", "   ", "Quantidade dos RegistrosOcorrência 19-Confirmação da Instrução Protesto | 005 | Quantidade de Registros"] }],
    [177 , 188, { descricao: ["177 a 188", "   ", "Valor dos Registros - Ocorrência 19 - Confirmação da Instrução de Protesto | 012 | Valor dos Registros"] }],
    [189 , 362, { descricao: ["189 a 362", "   ", "Brancos | 174 | Brancos"] }],
    [363 , 377, { descricao: ["363 a 377", "   ", "Valor Total dos Rateios Efetuados | 015 | Valor Total Rateios"] }],
    [378 , 385, { descricao: ["378 a 385", "   ", "Quantidade Total dos Rateios Efetuados | 008 | Quantidade Rateios Efetuados"] }],
    [386 , 394, { descricao: ["386 a 394", "   ", "Brancos | 009 | Brancos"] }],
    [395 , 400, { descricao: ["395 a 400", "   ", "Número Sequencial do Registro | 006 | Nº Sequencial do Registro"] }],
  ],
}





