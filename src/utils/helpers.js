export function formatPrice(price) {
  return Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
