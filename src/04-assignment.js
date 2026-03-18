export function calculateGST(amount, category) {
  if (
    typeof amount !== "number" ||
    !isFinite(amount) ||
    amount <= 0 ||
    typeof category !== "string"
  ) {
    return null;
  }

  const type = category.toLowerCase();

  let gstRate;

  if (type === "essential") gstRate = 0;
  else if (type === "food") gstRate = 5;
  else if (type === "standard") gstRate = 12;
  else if (type === "electronics") gstRate = 18;
  else if (type === "luxury") gstRate = 28;
  else return null;

  let gstAmount = Number(((amount * gstRate) / 100).toFixed(2));
  let totalAmount = Number((amount + gstAmount).toFixed(2));

  return {
    baseAmount: amount,
    gstRate,
    gstAmount,
    totalAmount
  };
}