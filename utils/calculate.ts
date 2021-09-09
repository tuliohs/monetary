import { TCambio } from "../constants/Config";

export default function calculate(value: number, cambio: TCambio) {
    let iof = value / 100 * cambio.iof
    let spread = value / 100 * cambio.spread
    let cotacao = value * cambio.cotacao
    let total = iof + spread + cotacao
    return total.toFixed(2)

}