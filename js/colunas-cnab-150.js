
// Definição das colunas para cada tipo de arquivo CNAB150
const colunasCNAB150 = {
  registroA: [
    [1, 1, { descricao: ["001 a 001", "A01", "Código de registro = A"] }],
    [2, 2, { descricao: ["002 a 002", "A02", "Código de remessa"] }],
    [3, 10, { descricao: ["003 a 010", "A03", "Código de cliente"] }],
    [11, 30, { descricao: ["011 a 030", "A04", "Nome do cliente"] }],
    [31, 33, { descricao: ["031 a 033", "A05", "Código do Banco"] }],
    [34, 53, { descricao: ["034 a 053", "A06", "Nome do Banco"] }],
    [54, 61, { descricao: ["054 a 061", "A07", "Data geração do arquivo(AAAAMMDD)"] }],
    [62, 67, { descricao: ["062 a 067", "A08", "Número sequencial do arquivo(NSA)"] }],
    [68, 69, { descricao: ["068 a 069", "A09", "Reservado para o Banco no Arquivo Retorno"] }],
    [70, 150, { descricao: ["070 a 150", "A10", "Filler"] }]
  ],

  registroC: [
    [1, 1, { descricao: ["1 a 1", "C01", "Código do registro = C"] }],
    [2, 6, { descricao: ["2 a 6", "C02", "Código de Serviço"] }],
    [7, 31, { descricao: ["7 a 31", "C03", "Identificação do cliente na Empresa"] }],
    [32, 35, { descricao: ["32 a 35", "C04", "Agência da Debito"] }],
    [36, 49, { descricao: ["36 a 49", "C05", "Conta Corrente ou Poupança para Débito"] }],
    [50, 89, { descricao: ["50 a 89", "C06", "Ocorrência 1"] }],
    [90, 129, { descricao: ["90 a 129", "C07", "Ocorrência 2"] }],
    [130, 149, { descricao: ["130 a 149", "C08", "Reserva para o futuro"] }],
    [150, 150, { descricao: ["150 a 150", "C09", "Código do movimento"] }]
  ],

  registroD: [
    [1, 1, { descricao: ["1 a 1", "D01", "Código do registro D"] }],
    [2, 6, { descricao: ["2 a 6", "D02", "Código de Serviço"] }],
    [7, 31, { descricao: ["7 a 31", "D03", "Identificação do Cliente na Empresa - anterior"] }],
    [32, 35, { descricao: ["32 a 35", "D04", "Agência para Debito"] }],
    [36, 49, { descricao: ["36 a 49", "D05", "Conta Corrente ou Poupança para Débito"] }],
    [50, 74, { descricao: ["50 a 74", "D06", "Identificação do cliente na empresa - atual"] }],
    [75, 134, { descricao: ["75 a 134", "D07", "Ocorrência"] }],
    [135, 149, { descricao: ["135 a 149", "D08", "Reserva"] }],
    [150, 150, { descricao: ["150 a 150", "D09", "Código de movimento"] }]
  ],

  registroF: [
    [1, 1, { descricao: ["1 a 1", "F01", "Código do Registro = F"] }],
    [2, 6, { descricao: ["2 a 6", "F02", "Código de Serviço"] }],
    [7, 31, { descricao: ["7 a 31", "F03", "Identificação do Cliente na Empresa"] }],
    [32, 35, { descricao: ["32 a 35", "F04", "Agência para Debito"] }],
    [36, 49, { descricao: ["36 a 49", "F05", "Conta Corrente ou Poupança para Débito"] }],
    [50, 57, { descricao: ["50 a 57", "F06", "Data de Vencimento (AAAAMMDD)"] }],
    [58, 72, { descricao: ["58 a 72", "F07", "Valor do Débito"] }],
    [73, 74, { descricao: ["73 a 74", "F08", "Código de Retorno"] }],
    [75, 134, { descricao: ["75 a 134", "F09", "Uso da Empresa"] }],
    [135, 149, { descricao: ["135 a 149", "F10", "Filler"] }],
    [150, 150, { descricao: ["150 a 150", "F11", "Código do movimento"] }]
  ],

  registroM: [
    [1, 1, { descricao: ["1 a 1", "M01", "Código de registro = M"] }],
    [2, 6, { descricao: ["2 a 6", "M02", "Código de Serviço"] }],
    [7, 31, { descricao: ["7 a 31", "M03", "Identificação do cliente na Empresa"] }],
    [32, 36, { descricao: ["32 a 36", "M04", "Agência para Débitos"] }],
    [37, 49, { descricao: ["37 a 49", "M05", "Conta Corrente ou Poupança para Débito"] }],
    [50, 51, { descricao: ["50 a 51", "M06", "Dígito da Conta"] }],
    [52, 52, { descricao: ["52 a 52", "M07", "Tipo da Conta"] }],
    [53, 77, { descricao: ["53 a 77", "M08", "Reservado do Tipo O"] }],
    [78, 79, { descricao: ["78 a 79", "M09", "Status de Retorno"] }],
    [80, 80, { descricao: ["80 a 80", "M10", "Tipo de Inconsistência do M.02"] }],
    [81, 81, { descricao: ["81 a 81", "M11", "Tipo de Inconsistência do M.03"] }],
    [82, 82, { descricao: ["82 a 82", "M12", "Tipo de Inconsistência do M.04"] }],
    [83, 83, { descricao: ["83 a 83", "M13", "Tipo de Inconsistência do M.05"] }],
    [84, 84, { descricao: ["84 a 84", "M14", "Tipo de Inconsistência do M.06"] }],
    [85, 85, { descricao: ["85 a 85", "M15", "Tipo de Inconsistência do M.07"] }],
    [86, 87, { descricao: ["86 a 87", "M16", "Reservado do Tipo O"] }],
    [88, 88, { descricao: ["88 a 88", "M17", "Inconsistência do Tipo de Registro"] }],
    [89, 150, { descricao: ["89 a 150", "M18", "Reservado para o futuro (filler)"] }]
  ],

  registroN: [
    [1, 1, { descricao: ["1 a 1", "N01", "Código de registro = N"] }],
    [2, 6, { descricao: ["2 a 6", "N02", "Código de Serviço"] }],
    [7, 31, { descricao: ["7 a 31", "N03", "Identificação do Cliente na Empresa"] }],
    [32, 36, { descricao: ["32 a 36", "N04", "Agência para Débitos"] }],
    [37, 49, { descricao: ["37 a 49", "N05", "Conta Corrente ou Poupança para Débito"] }],
    [50, 51, { descricao: ["50 a 51", "N06", "Dígito da Conta"] }],
    [52, 52, { descricao: ["52 a 52", "N07", "Tipo da conta"] }],
    [53, 77, { descricao: ["53 a 77", "N08", "Filler (área utilizada no registro tipo O)"] }],
    [78, 79, { descricao: ["78 a 79", "N09", "Status de Retorno"] }],
    [80, 80, { descricao: ["80 a 80", "N10", "Tipo de Inconsistência do N.02"] }],
    [81, 81, { descricao: ["81 a 81", "N11", "Tipo de Inconsistência do N.03"] }],
    [82, 82, { descricao: ["82 a 82", "N12", "Tipo de Inconsistência do N.04"] }],
    [83, 83, { descricao: ["83 a 83", "N13", "Tipo de Inconsistência do N.05"] }],
    [84, 84, { descricao: ["84 a 84", "N14", "Tipo de Inconsistência do N.06"] }],
    [85, 85, { descricao: ["85 a 85", "N15", "Tipo de Inconsistência do N.07"] }],
    [86, 87, { descricao: ["86 a 87", "N16", "Reservado para o tipo O"] }],
    [88, 88, { descricao: ["88 a 88", "N17", "Inconsistência do Tipo de Registro"] }],
    [89, 150, { descricao: ["89 a 150", "N18", "Reservado para o futuro (filler)"] }]
  ],

  registroO: [
    [1, 1, { descricao: ["1 a 1", "O01", "Código de registro = O"] }],
    [2, 6, { descricao: ["2 a 6", "O02", "Codigo de Serviço"] }],
    [7, 31, { descricao: ["7 a 31", "O03", "Identificação do Cliente na Empresa"] }],
    [32, 36, { descricao: ["32 a 36", "O04", "Agência para Débito"] }],
    [37, 49, { descricao: ["37 a 49", "O05", "Conta Corrente ou Poupança para Débito"] }],
    [50, 51, { descricao: ["50 a 51", "O06", "Dígito da Conta Corrente ou Poupança"] }],
    [52, 52, { descricao: ["52 a 52", "O07", "Tipo de conta"] }],
    [53, 60, { descricao: ["53 a 60", "O08", "Data de Vencimento (AAAAMMDD)"] }],
    [61, 77, { descricao: ["61 a 77", "O09", "Valor do Débito"] }],
    [78, 79, { descricao: ["78 a 79", "O10", "Status de Retorno"] }],
    [80, 80, { descricao: ["80 a 80", "O11", "Tipo de Inconsistência do O.02"] }],
    [81, 81, { descricao: ["81 a 81", "O12", "Tipo de Inconsistência do O.03"] }],
    [82, 82, { descricao: ["82 a 82", "O13", "Tipo de Inconsistência do O.04"] }],
    [83, 83, { descricao: ["83 a 83", "O14", "Tipo de Inconsistência do O.05"] }],
    [84, 84, { descricao: ["84 a 84", "O15", "Tipo de Inconsistência do O.06"] }],
    [85, 85, { descricao: ["85 a 85", "O16", "Tipo de Inconsistência do O.07"] }],
    [86, 86, { descricao: ["86 a 86", "O17", "Tipo de Inconsistência do O.08"] }],
    [87, 87, { descricao: ["87 a 87", "O18", "Tipo de Inconsistência do O.09"] }],
    [88, 88, { descricao: ["88 a 88", "O19", "Inconsistência do Tipo de Registro"] }],
    [89, 150, { descricao: ["89 a 150", "O20", "Reservado para o futuro (filler)"] }]
  ],

  registroP: [
    [1, 1, { descricao: ["1 a 1", "P01", "Código do Registro = P"] }],
    [2, 6, { descricao: ["2 a 6", "P02", "Código de Serviço"] }],
    [7, 36, { descricao: ["7 a 36", "P03", "Nome Fantasia"] }],
    [37, 38, { descricao: ["37 a 38", "P04", "Código que identifica o tipo de serviço"] }],
    [39, 68, { descricao: ["39 a 68", "P05", "Nome do tipo do serviço"] }],
    [69, 98, { descricao: ["69 a 98", "P06", "Identifica a chave de débito da concessionaria"] }],
    [99, 100, { descricao: ["99 a 100", "P07", "Tamanho da chave de débito da concessionária"] }],
    [101, 102, { descricao: ["101 a 102", "P08", "Quantidade de dias que antecede a data de débito"] }],
    [103, 104, { descricao: ["103 a 104", "P09", "Tipo de operação"] }],
    [105, 150, { descricao: ["105 a 150", "P10", "Reserva para o futuro"] }]
  ],

  registroW: [
    [1, 1, { descricao: ["1 a 1", "W01", "Código de registro = W"] }],
    [2, 21, { descricao: ["2 a 21", "W02", "Nome da concessionária"] }],
    [22, 46, { descricao: ["22 a 46", "W03", "Identificação do cliente na concessionária"] }],
    [47, 50, { descricao: ["47 a 50", "W04", "Agência para débito"] }],
    [51, 64, { descricao: ["51 a 64", "W05", "Conta Corrente ou Poupança para Débito"] }],
    [65, 72, { descricao: ["65 a 72", "W06", "Data de Vencimento (AAAAMMDD)"] }],
    [73, 87, { descricao: ["73 a 87", "W07", "Valor do débito"] }],
    [88, 89, { descricao: ["88 a 89", "W08", "Código da Moeda"] }],
    [90, 94, { descricao: ["90 a 94", "W09", "Código de Serviço da concessionária"] }],
    [95, 102, { descricao: ["95 a 102", "W10", "Número de Telefone*"] }],
    [103, 149, { descricao: ["103 a 149", "W11", "Reservado"] }],
    [150, 150, { descricao: ["150 a 150", "W12", "Código do movimento"] }]
  ],

  registroZ: [
    [1, 1, { descricao: ["1 a 1", "Z01", "Código de registro Z"] }],
    [2, 7, { descricao: ["2 a 7", "Z02", "Total de registros do arquivo (incl. A e Z"] }],
    [8, 24, { descricao: ["8 a 24", "Z03", "Valor Total dos registros."] }],
    [25, 150, { descricao: ["25 a 150", "Z04", "Filler"] }]
  ],

  outros: []
}
