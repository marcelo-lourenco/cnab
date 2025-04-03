
// Definição das colunas para cada tipo de arquivo CNAB240
const descricaoCampos400Bradesco = [
  ["Header - 027 a 046", "Códigos da Empresa\nSerá informado pelo Bradesco, quando do cadastramento da conta do beneficiário na sua Agência. Esse código deve ser alinhado à direita com zeros à esquerda."],
  ["Header - 095 a 100", "Datas da Gravação do Arquivo\nPara a retransmissão de um arquivo-remessa rejeitado, será necessário alterar a data constante desse campo, bem como atualizar o número de remessa nas posições 111 a 117 (número sequencial de remessa)."],
  ["Header - 111 a 117", "Números Sequencial de Remessa\nO número de remessa deve iniciar de 0000001 e incrementado de + 1 a cada novo arquivo-remessa, com o objetivo de evitar que ocorra duplicidade de arquivo, não podendo, em hipótese alguma, ser repetida ou zerada.\nCaso for enviado um número sequencial inferior ao da remessa encaminhada anteriormente, o sistema rejeitará a remessa e não será disponibilizado arquivo de retorno, pois o arquivo inteiro será rejeitado. Se o cliente enviar o arquivo, com o sequencial sendo 10 números acima do enviado anteriormente, o sistema acatará a remessa enviada no dia, e caso haja mais remessas, essas poderão ser envidas com os sequencias inferiores, desde que estejam dentro do ranger dos 10 últimos números sequências faltantes.\nEX: Último sequencial de remessa enviado no dia 01/04, número 10.\nNo dia 02/04 foi enviado a primeira remessa com o sequencial 25, as demais remessas que serão enviadas no dia poderão ter a sequência de 15 até a 24 por estarem dentre do ranger sequencial dos 10 números faltantes para processamento no mesmo dia. As sequencias 11 a 14, serão rejeitadas por serem superiores as 10 faltantes a contar da última remessa registrada."],
  ["Tipo 1 - 002 a 020", "Identificações do Débito Automático em C/C\nSomente deverão ser preenchidos, caso o cliente beneficiário esteja previamente cadastrado para operar com a Modalidade de Cobrança com Débito Automático, cujos campos correspondentes a essas posições são:\n    • posições 002 a 006 = nº da Agência do pagador a ser debitada;\n    • posições 007 a 007 = dígito da Agência;\n    • posições 008 a 012 = razão da conta - Ex.: 07050;\n    • posições 013 a 019 = nº da conta-corrente do pagador;\n    • posições 020 a 020 = dígito da conta-corrente."],
  ["Tipo 1 - 021 a 037", "Identificações da Empresa Beneficiária no Banco\nDeverá ser preenchido (da esquerda para a direita) da seguinte maneira: 21 a 21 - Zero."],
  ["Tipo 1 - 022 a 024", "Códigos da Carteira."],
  ["Tipo 1 - 025 a 029", "Códigos da Agência Beneficiários, sem o Dígito. 30 a 36 - Contas-Corrente."],
  ["Tipo 1 - 037 a 037", "Dígitos da Conta."],
  ["Tipo 1 - 038 a 062", "Nº do Controle do Participante\nCampo destinado para uso da empresa. A informação que constar do arquivo-remessa será confirmada no arquivo-retorno. Não será impresso nos boletos de cobrança."],
  ["Tipo 1 - 063 a 065", "Códigos do Banco para Débito - '237'\nDeverá ser informado 237, caso o cliente beneficiário tenha optado pelo Débito Automático em conta do pagador.\nPara títulos em que não deve ser aplicado o Débito Automático, esse campo deverá ser preenchido com zeros."],
  ["Tipo 1 - 066 a 066", "Identificativos de Multa\nSe = 0 (sem multa). Se = 2 (tem multa)."],
  ["Tipo 1 - 067 a 070", "Percentual de 1 Multa por Atraso\nSe Campo 66 a 66 = 0, preencher com zeros.\nSe Campo 66 a 66 = 2, preencher com percentual da multa com 2 decimais."],
  ["Tipo 1 - 071 a 082", "Identificações do Título no Banco (Nosso Número)\nCampo reservado para o Nosso Número do Título (Número Bancário), cujo procedimento a ser adotado deve obedecer aos itens a seguir:\nEMISSÃO DO BOLETO PELO BANCO\nCobrança com Registro: nesse caso, esse campo deverá ser enviado com 'zeros', pois o sistema\ninformará o Nosso Número no arquivo-retorno, quando da confirmação de entrada.\nEMISSÃO DO BOLETO PELO CLIENTE\nCobrança com Registro: a ficha de compensação deverá apresentar as especificações exigidas, com relação ao código de barras, conforme consta na página 32, e, nesse caso, as posições 71 a 82 do registro de transação deverão vir preenchidas com o Nosso Número e seu respectivo dígito de autoconferência, o qual será confirmado no arquivo-retorno, quando do registro do título, inclusive, apresentamos, a seguir, o critério a ser adotado para o cálculo do dígito de autoconferência:\nA linha de numeração deverá ser composta de 11 algarismos mais o dígito de autoconferência, a qual obedecerá ao seguinte formato:\n    • Posições 71 a 81: Nosso Número - poderá ser gerado a partir de 00000000001, 00000000002 etc.\n11 posições, devendo ser atribuído número diferenciado para identificação de cada documento na Cobrança Bradesco.\n    • Posição 82 a 82: dígito de autoconferência do Nosso Número - 1 posição.\nNota: para o cálculo do dígito, será necessário acrescentar o número da carteira à esquerda antes do Nosso Número, e aplicar o módulo 11, com base 7."],
  ["Tipo 1 - 093 a 093", "Condições para Emissão do Boleto de Cobrança\n    • Se for igual a 1 = o Banco emite o boleto e processa o registro.\nSe o Nosso Número for informado nas posições 71 a 82 do registro de transação, o Banco assume.\nSe o Nosso Número não for informado, o Banco criará automaticamente.\n    • Se for igual a 2 = o cliente emite o boleto e o Banco somente processa o registro.\n Nesse caso, será obrigatório informar o Nosso Número formatado nas posições 71 a 82 do registro de transação Tipo 1."],
  ["Tipo 1 - 094 a 094", "Condições de Registro para Débito Automático\n    • Quando igual a 'N' e os dados do débito estiverem incorretos, rejeita o registro na cobrança e não emite boleto de cobrança.\n    • Quando diferente de 'N' e os dados do débito estiverem incorretos, registra na cobrança e emite\nboleto de cobrança. Nessa condição, não ocorrerá o agendamento do débito."],
  ["Tipo 1 - 105 a 105", "Indicadores de Rateio de Crédito\nSomente deverá ser preenchido com a Letra 'R' se a empresa contratou o serviço de rateio de crédito; caso não tenha contratado, deixar em Branco."],
  ["Tipo 1 - 106 a 106", "Endereçamentos do Aviso de Débito Automático em Conta-Corrente\n1 = emite aviso, e assume o endereço do pagador constante do arquivo-remessa. 2 = não emite aviso.\nDiferente de 1 ou 2 = emite e assume o endereço do cliente debitado, constante do cadastro do Banco."],
  ["Tipo 1 - 107 a 108", "Pagamento Parcial\nSomente deverá ser preenchido com a quantidade de parcelas para pagamento se a empresa contratou o serviço Pagamento Parcial; caso não tenha contratado, deixar em Branco.\nQuantidade mínima de parcelas = 02. Quantidade máxima de parcelas = 99."],
  ["Tipo 1 - 109 a 110", "Identificações de Ocorrência\n    • 01..Remessa 02..Pedido de Baixa\n    • 03..Pedido de Protesto Falimentar 04..Concessão de Abatimento 05..Cancelamento de Abatimento Concedido 06..Alteração de Vencimento\n    • 07..Alteração do Controle do Participante 08..Alteração de seu Número\n    • 09..Pedido de Protesto\n    • 12..Ped. Exc. de Cadastro Pagador Débito 13..Inclusão de Cadastro Pagador 14..Alteração Cadastro Pagador 18..Sustar Protesto e Baixar Título 19..Sustar Protesto e Manter em Carteira 20 Alteração de Valor*\n    • 21 Alteração de Valor com Emissão de Boleto (quando a emissão é pelo Banco)* 22..Transferência Cessão Crédito ID. Prod.10\n    • 23..Transferência entre Carteiras 24..Dev. Transferência entre Carteiras 31..Alteração de Outros Dados 32..Instrução de Negativação 45..Pedido de Negativação\n    • 46..Excluir Negativação com Baixa 47..Excluir Negativação e Manter Pendente 68..Acerto nos Dados do Rateio de Crédito 69..Cancelamento do Rateio de Crédito"],
  ["Tipo 1 - 121 a 126", "Datas do Vencimento do Título\n    • Preencher com a data de vencimento do título no formato (DDMMAA)."],
  ["Tipo 1 - 157 a 160", "19 / 29 Instrução\nCampo destinado para pré-determinar o protesto do título ou a baixa por decurso de prazo, quando do registro.\nNão havendo interesse, preencher com zeros.\nPorém, caso a empresa deseje utilizar a instrução automática de protesto ou a baixa por decurso de prazo, seguem os procedimentos:\nProtesto/Negativação:\n    • Posições 157 a 158 = indicar o Código '06' (Protestar).\n    • Posições 157 a 158 = indicar o Código '07' (Negativar).\n    • Posições 159 a 160 = indicar o número de dias a protestar (mínimo 5 dias).\nProtesto Falimentar:\n    • Posições 157 a 158 = indicar o Código '05' (Protesto Falimentar).\n    • Posições 159 a 160 = indicar o número de dias a protestar (mínimo 5 dias).\nDecurso de Prazo:\nPosições 157 a 158 = indicar o Código '18' (Decurso de Prazo).\n    • Posições 159 a 160 = indicar o número de dias para baixa por decurso de prazo.\nNota: as posições 157 a 158 também poderão ser utilizadas para definir as seguintes mensagens, a serem impressas nos boletos de cobrança, emitidas pelo Banco:\n    • 08 Não cobrar juros de mora.\n    • 09 Não receber após o vencimento.\n    • 10 Multas de 10% após o 4º dia do vencimento. 11 Não receber após o 8º dia do vencimento.\n    • 12 Cobrar encargos após o 5º dia do vencimento. 13 Cobrar encargos após o 10º dia do vencimento. 14 Cobrar encargos após o 15º dia do vencimento.\n    • 15 Conceder desconto mesmo se pago após o vencimento.\nNota: essas instruções deverão ser enviadas no arquivo-remessa, quando da entrada, desde que o código de ocorrência nas posições 109 a 110 do registro de transação seja '01'. Para as instruções de protesto/negativação, o CNPJ/CPF e o endereço do pagador deverão ser informados corretamente.\nCancelamento da Instrução Automática de Protesto/Negativação\nPara cancelar a instrução automática de protesto, basta enviar um arquivo-remessa com as seguintes características:\n    • Posições 109 a 110 do registro de transação = 31 - Alteração de Outros Dados; Posições 157 a 160 do registro de transação = 9999."],
  ["Tipo 1 - 161 a 173", "Valores a serem Cobrados por Dia de Atraso (Mora Dia)\nCampo destinado para o beneficiário informar o valor da mora dia a ser cobrado do pagador, no caso de pagamento com atraso (somente valor).\nPorém, caso o beneficiário não queira informar o valor da mora dia, no arquivo-remessa, poderemos calculá-lo e imprimi-lo. Contudo, torna-se necessário informar o valor de sua taxa de juros mensal, por meio de carta, a qual deverá ser encaminhada para a nossa Agência, para o efetivo cadastramento.\nNota: emissão dos boletos pelo próprio cliente. Quando houver Comissão de Permanência a ser cobrada por dia de atraso, será obrigatória a informação desse valor no arquivo-remessa."],
  ["Tipo 1 - 193 a 205", "Valores do IOF\nEsse campo somente deverá ser preenchido pelas empresas beneficiárias, cujo ramo de atividade seja Administradora de Seguros.\nO beneficiário deve informar o valor do IOF a ser recolhido. O recolhimento é realizado, automaticamente, pelo sistema do Banco."],
  ["Tipo 1 - 221 a 234", "Números da Inscrição do Pagador\nQuando se tratar de CNPJ, adotar o critério de preenchimento da direita para a esquerda, utilizando:\n2 posições para o controle; 4 posições para a filial;\n    • 8 posições para o CNPJ.\nQuando se tratar de CPF, adotar o mesmo critério da direita para a esquerda, utilizando: 2 posições para o controle;\n    • 9 posições para o CPF;\n3 posições à esquerda zeradas.\nNota: campo com o preenchimento obrigatório/deve ser diferente do CNPJ do beneficiário."],
  ["Tipo 1 - 315 a 326", "19 Mensagem\nCampo livre para uso da empresa. A mensagem enviada nesse campo será impressa somente no boleto e não será confirmada no arquivo-retorno.\nBeneficiário Final"],
  ["Tipo 1 - 335 a 394", "29 Mensagem/Beneficiário Final (pode ser utilizado para a finalidade de Beneficiário Final ou Mensagem)\nEsse campo poderá ser utilizado para informar:\nSomente Beneficiário Final, ou somente Mensagem.\n    • Não utilizar as expressões 'taxa bancária' ou 'tarifa bancária' nos boletos de cobrança, pois essa tarifa refere-se à negociada pelo Banco com seu cliente beneficiário. Orientação da FEBRABAN (Comunicado FB-170/2005).\nObs.: a empresa beneficiária, ao ser cadastrada na Cobrança Escritural, será automaticamente autorizada a enviar mensagens, porém, para informar beneficiário final, deverá ser previamente cadastrada por meio de pedido junto a sua Agência."],
]

const descricaoCampos400Itau = [
  ["Header - 027 a 046", "Códigos da Empresa\nSerá informado pelo Bradesco, quando do cadastramento da conta do beneficiário na sua Agência. Esse código deve ser alinhado à direita com zeros à esquerda."],
  ["Header - 095 a 100", "Datas da Gravação do Arquivo\nPara a retransmissão de um arquivo-remessa rejeitado, será necessário alterar a data constante desse campo, bem como atualizar o número de remessa nas posições 111 a 117 (número sequencial de remessa)."],
  ["Header - 111 a 117", "Números Sequencial de Remessa\nO número de remessa deve iniciar de 0000001 e incrementado de + 1 a cada novo arquivo-remessa, com o objetivo de evitar que ocorra duplicidade de arquivo, não podendo, em hipótese alguma, ser repetida ou zerada.\nCaso for enviado um número sequencial inferior ao da remessa encaminhada anteriormente, o sistema rejeitará a remessa e não será disponibilizado arquivo de retorno, pois o arquivo inteiro será rejeitado. Se o cliente enviar o arquivo, com o sequencial sendo 10 números acima do enviado anteriormente, o sistema acatará a remessa enviada no dia, e caso haja mais remessas, essas poderão ser envidas com os sequencias inferiores, desde que estejam dentro do ranger dos 10 últimos números sequências faltantes.\nEX: Último sequencial de remessa enviado no dia 01/04, número 10.\nNo dia 02/04 foi enviado a primeira remessa com o sequencial 25, as demais remessas que serão enviadas no dia poderão ter a sequência de 15 até a 24 por estarem dentre do ranger sequencial dos 10 números faltantes para processamento no mesmo dia. As sequencias 11 a 14, serão rejeitadas por serem superiores as 10 faltantes a contar da última remessa registrada."],
  ["Tipo 1 - 002 a 020", "Identificações do Débito Automático em C/C\nSomente deverão ser preenchidos, caso o cliente beneficiário esteja previamente cadastrado para operar com a Modalidade de Cobrança com Débito Automático, cujos campos correspondentes a essas posições são:\n    • posições 002 a 006 = nº da Agência do pagador a ser debitada;\n    • posições 007 a 007 = dígito da Agência;\n    • posições 008 a 012 = razão da conta - Ex.: 07050;\n    • posições 013 a 019 = nº da conta-corrente do pagador;\n    • posições 020 a 020 = dígito da conta-corrente."],
  ["Tipo 1 - 021 a 037", "Identificações da Empresa Beneficiária no Banco\nDeverá ser preenchido (da esquerda para a direita) da seguinte maneira: 21 a 21 - Zero."],
  ["Tipo 1 - 022 a 024", "Códigos da Carteira."],
  ["Tipo 1 - 025 a 029", "Códigos da Agência Beneficiários, sem o Dígito. 30 a 36 - Contas-Corrente."],
  ["Tipo 1 - 037 a 037", "Dígitos da Conta."],
  ["Tipo 1 - 038 a 062", "Nº do Controle do Participante\nCampo destinado para uso da empresa. A informação que constar do arquivo-remessa será confirmada no arquivo-retorno. Não será impresso nos boletos de cobrança."],
  ["Tipo 1 - 063 a 065", "Códigos do Banco para Débito - '237'\nDeverá ser informado 237, caso o cliente beneficiário tenha optado pelo Débito Automático em conta do pagador.\nPara títulos em que não deve ser aplicado o Débito Automático, esse campo deverá ser preenchido com zeros."],
  ["Tipo 1 - 066 a 066", "Identificativos de Multa\nSe = 0 (sem multa). Se = 2 (tem multa)."],
  ["Tipo 1 - 067 a 070", "Percentual de 1 Multa por Atraso\nSe Campo 66 a 66 = 0, preencher com zeros.\nSe Campo 66 a 66 = 2, preencher com percentual da multa com 2 decimais."],
  ["Tipo 1 - 071 a 082", "Identificações do Título no Banco (Nosso Número)\nCampo reservado para o Nosso Número do Título (Número Bancário), cujo procedimento a ser adotado deve obedecer aos itens a seguir:\nEMISSÃO DO BOLETO PELO BANCO\nCobrança com Registro: nesse caso, esse campo deverá ser enviado com 'zeros', pois o sistema\ninformará o Nosso Número no arquivo-retorno, quando da confirmação de entrada.\nEMISSÃO DO BOLETO PELO CLIENTE\nCobrança com Registro: a ficha de compensação deverá apresentar as especificações exigidas, com relação ao código de barras, conforme consta na página 32, e, nesse caso, as posições 71 a 82 do registro de transação deverão vir preenchidas com o Nosso Número e seu respectivo dígito de autoconferência, o qual será confirmado no arquivo-retorno, quando do registro do título, inclusive, apresentamos, a seguir, o critério a ser adotado para o cálculo do dígito de autoconferência:\nA linha de numeração deverá ser composta de 11 algarismos mais o dígito de autoconferência, a qual obedecerá ao seguinte formato:\n    • Posições 71 a 81: Nosso Número - poderá ser gerado a partir de 00000000001, 00000000002 etc.\n11 posições, devendo ser atribuído número diferenciado para identificação de cada documento na Cobrança Bradesco.\n    • Posição 82 a 82: dígito de autoconferência do Nosso Número - 1 posição.\nNota: para o cálculo do dígito, será necessário acrescentar o número da carteira à esquerda antes do Nosso Número, e aplicar o módulo 11, com base 7."],
  ["Tipo 1 - 093 a 093", "Condições para Emissão do Boleto de Cobrança\n    • Se for igual a 1 = o Banco emite o boleto e processa o registro.\nSe o Nosso Número for informado nas posições 71 a 82 do registro de transação, o Banco assume.\nSe o Nosso Número não for informado, o Banco criará automaticamente.\n    • Se for igual a 2 = o cliente emite o boleto e o Banco somente processa o registro.\n Nesse caso, será obrigatório informar o Nosso Número formatado nas posições 71 a 82 do registro de transação Tipo 1."],
  ["Tipo 1 - 094 a 094", "Condições de Registro para Débito Automático\n    • Quando igual a 'N' e os dados do débito estiverem incorretos, rejeita o registro na cobrança e não emite boleto de cobrança.\n    • Quando diferente de 'N' e os dados do débito estiverem incorretos, registra na cobrança e emite\nboleto de cobrança. Nessa condição, não ocorrerá o agendamento do débito."],
  ["Tipo 1 - 105 a 105", "Indicadores de Rateio de Crédito\nSomente deverá ser preenchido com a Letra 'R' se a empresa contratou o serviço de rateio de crédito; caso não tenha contratado, deixar em Branco."],
  ["Tipo 1 - 106 a 106", "Endereçamentos do Aviso de Débito Automático em Conta-Corrente\n1 = emite aviso, e assume o endereço do pagador constante do arquivo-remessa. 2 = não emite aviso.\nDiferente de 1 ou 2 = emite e assume o endereço do cliente debitado, constante do cadastro do Banco."],
  ["Tipo 1 - 107 a 108", "Pagamento Parcial\nSomente deverá ser preenchido com a quantidade de parcelas para pagamento se a empresa contratou o serviço Pagamento Parcial; caso não tenha contratado, deixar em Branco.\nQuantidade mínima de parcelas = 02. Quantidade máxima de parcelas = 99."],
  ["Tipo 1 - 109 a 110", "Identificações de Ocorrência\n    • 01..Remessa 02..Pedido de Baixa\n    • 03..Pedido de Protesto Falimentar 04..Concessão de Abatimento 05..Cancelamento de Abatimento Concedido 06..Alteração de Vencimento\n    • 07..Alteração do Controle do Participante 08..Alteração de seu Número\n    • 09..Pedido de Protesto\n    • 12..Ped. Exc. de Cadastro Pagador Débito 13..Inclusão de Cadastro Pagador 14..Alteração Cadastro Pagador 18..Sustar Protesto e Baixar Título 19..Sustar Protesto e Manter em Carteira 20 Alteração de Valor*\n    • 21 Alteração de Valor com Emissão de Boleto (quando a emissão é pelo Banco)* 22..Transferência Cessão Crédito ID. Prod.10\n    • 23..Transferência entre Carteiras 24..Dev. Transferência entre Carteiras 31..Alteração de Outros Dados 32..Instrução de Negativação 45..Pedido de Negativação\n    • 46..Excluir Negativação com Baixa 47..Excluir Negativação e Manter Pendente 68..Acerto nos Dados do Rateio de Crédito 69..Cancelamento do Rateio de Crédito"],
  ["Tipo 1 - 121 a 126", "Datas do Vencimento do Título\n    • Preencher com a data de vencimento do título no formato (DDMMAA)."],
  ["Tipo 1 - 157 a 160", "19 / 29 Instrução\nCampo destinado para pré-determinar o protesto do título ou a baixa por decurso de prazo, quando do registro.\nNão havendo interesse, preencher com zeros.\nPorém, caso a empresa deseje utilizar a instrução automática de protesto ou a baixa por decurso de prazo, seguem os procedimentos:\nProtesto/Negativação:\n    • Posições 157 a 158 = indicar o Código '06' (Protestar).\n    • Posições 157 a 158 = indicar o Código '07' (Negativar).\n    • Posições 159 a 160 = indicar o número de dias a protestar (mínimo 5 dias).\nProtesto Falimentar:\n    • Posições 157 a 158 = indicar o Código '05' (Protesto Falimentar).\n    • Posições 159 a 160 = indicar o número de dias a protestar (mínimo 5 dias).\nDecurso de Prazo:\nPosições 157 a 158 = indicar o Código '18' (Decurso de Prazo).\n    • Posições 159 a 160 = indicar o número de dias para baixa por decurso de prazo.\nNota: as posições 157 a 158 também poderão ser utilizadas para definir as seguintes mensagens, a serem impressas nos boletos de cobrança, emitidas pelo Banco:\n    • 08 Não cobrar juros de mora.\n    • 09 Não receber após o vencimento.\n    • 10 Multas de 10% após o 4º dia do vencimento. 11 Não receber após o 8º dia do vencimento.\n    • 12 Cobrar encargos após o 5º dia do vencimento. 13 Cobrar encargos após o 10º dia do vencimento. 14 Cobrar encargos após o 15º dia do vencimento.\n    • 15 Conceder desconto mesmo se pago após o vencimento.\nNota: essas instruções deverão ser enviadas no arquivo-remessa, quando da entrada, desde que o código de ocorrência nas posições 109 a 110 do registro de transação seja '01'. Para as instruções de protesto/negativação, o CNPJ/CPF e o endereço do pagador deverão ser informados corretamente.\nCancelamento da Instrução Automática de Protesto/Negativação\nPara cancelar a instrução automática de protesto, basta enviar um arquivo-remessa com as seguintes características:\n    • Posições 109 a 110 do registro de transação = 31 - Alteração de Outros Dados; Posições 157 a 160 do registro de transação = 9999."],
  ["Tipo 1 - 161 a 173", "Valores a serem Cobrados por Dia de Atraso (Mora Dia)\nCampo destinado para o beneficiário informar o valor da mora dia a ser cobrado do pagador, no caso de pagamento com atraso (somente valor).\nPorém, caso o beneficiário não queira informar o valor da mora dia, no arquivo-remessa, poderemos calculá-lo e imprimi-lo. Contudo, torna-se necessário informar o valor de sua taxa de juros mensal, por meio de carta, a qual deverá ser encaminhada para a nossa Agência, para o efetivo cadastramento.\nNota: emissão dos boletos pelo próprio cliente. Quando houver Comissão de Permanência a ser cobrada por dia de atraso, será obrigatória a informação desse valor no arquivo-remessa."],
  ["Tipo 1 - 193 a 205", "Valores do IOF\nEsse campo somente deverá ser preenchido pelas empresas beneficiárias, cujo ramo de atividade seja Administradora de Seguros.\nO beneficiário deve informar o valor do IOF a ser recolhido. O recolhimento é realizado, automaticamente, pelo sistema do Banco."],
  ["Tipo 1 - 221 a 234", "Números da Inscrição do Pagador\nQuando se tratar de CNPJ, adotar o critério de preenchimento da direita para a esquerda, utilizando:\n2 posições para o controle; 4 posições para a filial;\n    • 8 posições para o CNPJ.\nQuando se tratar de CPF, adotar o mesmo critério da direita para a esquerda, utilizando: 2 posições para o controle;\n    • 9 posições para o CPF;\n3 posições à esquerda zeradas.\nNota: campo com o preenchimento obrigatório/deve ser diferente do CNPJ do beneficiário."],
  ["Tipo 1 - 315 a 326", "19 Mensagem\nCampo livre para uso da empresa. A mensagem enviada nesse campo será impressa somente no boleto e não será confirmada no arquivo-retorno.\nBeneficiário Final"],
  ["Tipo 1 - 335 a 394", "29 Mensagem/Beneficiário Final (pode ser utilizado para a finalidade de Beneficiário Final ou Mensagem)\nEsse campo poderá ser utilizado para informar:\nSomente Beneficiário Final, ou somente Mensagem.\n    • Não utilizar as expressões 'taxa bancária' ou 'tarifa bancária' nos boletos de cobrança, pois essa tarifa refere-se à negociada pelo Banco com seu cliente beneficiário. Orientação da FEBRABAN (Comunicado FB-170/2005).\nObs.: a empresa beneficiária, ao ser cadastrada na Cobrança Escritural, será automaticamente autorizada a enviar mensagens, porém, para informar beneficiário final, deverá ser previamente cadastrada por meio de pedido junto a sua Agência."],
]