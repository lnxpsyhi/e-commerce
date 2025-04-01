export const COUPON_CODES = {
  BLACK_FRIDAY: "BLCKFRDY",
  CHRISTMAS_SALE: "CHRSTMSSL",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
