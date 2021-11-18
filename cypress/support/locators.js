const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        TELA_HOME: '[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao] > .fas',
    },
    TELA_CONTAS: {
        NOME_CONTA: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        FN_XP_BTN_ALTERAR: nomeConta => `//table//td[contains(.,'${nomeConta}')]/..//i[@class='far fa-edit']`
    },
    TELA_MOVIMENTACAO: {
        TXT_DESCRICAO: '[data-test=descricao]',
        TXT_VALOR: '[data-test=valor]',
        TXT_INTERESSADO: '[data-test=envolvido]',
        SELEC_CONTA: '[data-test=conta]',
        BTN_APLICACAO: '[data-test=status]',
        BTN_SALVAR: '.btn-primary'
    },
    TELA_EXTRATO: {
        BTN_EXTRATO: '[data-test=menu-extrato]',
        LISTA_EXTRATOS: '.list-group > li',
        FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(.,'${conta}')]/../../..//i[@class='far fa-trash-alt']`,
        FN_XP_EDITAR_ELEMENTO: conta => `//span[contains(.,'${conta}')]/../../..//i[@class='fas fa-edit']`
    },
    TELA_SALDO: {
        FN_XP_SALDO_CONTA: nomeConta => `//td[contains(.,'${nomeConta}')]/../td[2]`
    },

    MESSAGE: '.toast-message'
}
export default locators
