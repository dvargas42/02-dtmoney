type CurrencyConverter = {
  money: number;
  type?: string;
}

export function dateConverter(date: Date) {
  return Intl.DateTimeFormat('pt-BR').format(date)
}

export function currencyConverter({money, type}: CurrencyConverter) {
  return `${type=== "withdraw" ? '-' : ""} ${Intl.NumberFormat('pt-BR', {
    style: 'currency', 
    currency: 'BRL'
  }).format(money)}`
}