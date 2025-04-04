type PriceType = number | undefined;

export const formatPrice = (price: PriceType): string => {
  // Check if the value is undefined
  if (price === undefined) {
    return "Price not available"; // Fallback for undefined values
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  });

  return formatter.format(price); // Format the number as currency
};
