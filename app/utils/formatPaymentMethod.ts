const paymentMethodEnum: { [id: string]: string } = {
  "card": "Cartão",
  "pix": "PIX",
  "cash": "Dinheiro",
}

export const formatPaymentMethod = (paymentMethod: string) => {
  return paymentMethodEnum[paymentMethod]
}