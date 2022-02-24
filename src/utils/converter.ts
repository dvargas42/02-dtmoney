export function dateConverter(date: Date) {
  return Intl.DateTimeFormat('pt-BR').format(date)
}

export function currencyConverter(money: number, type: string) {
  return `${type=== "withdraw" ? '-' : ""} ${Intl.NumberFormat('pt-BR', {
    style: 'currency', 
    currency: 'BRL'
  }).format(money)}`
}