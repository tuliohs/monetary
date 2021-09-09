export const cambio: Array<TCambio> = [
    { moeda: "USD", cotacao: "0,1879", iof: "1,3", spread: "0,6" },
    { moeda: "EUR", cotacao: "0,1588", iof: "1,9", spread: "0,9" },
    { moeda: "GBP", cotacao: "0,136", iof: "2,0", spread: "1,133" },
    { moeda: "JPY", cotacao: "20,657", iof: "2,283", spread: "1,383" },
    { moeda: "CHF", cotacao: "0,1728", iof: "2,533", spread: "1,633" },
    { moeda: "CAD", cotacao: "0,2384", iof: "2,783", spread: "1,883" },
    { moeda: "AUD", cotacao: "0,255", iof: "3,033", spread: "2,133" },
]

export type TCambio = { moeda: string, cotacao: string, iof: string, spread: string }