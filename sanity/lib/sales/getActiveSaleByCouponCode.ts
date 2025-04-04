import { defineQuery } from "next-sanity";
import { CouponCodes } from "./couponCodes";
import { sanityFetch } from "../live";

const getActiveSaleByCouponCode = async (couponCode: CouponCodes) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
    *[
        _type == "sale"
        && isActive == true
        && couponCode == $couponCode
    ] | order(validFrom desc)[0]
        `);

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_QUERY,
      params: {
        couponCode,
      },
    });
    return activeSale ? activeSale.data : null;
  } catch (e) {
    console.error("Error fetching active sale by coupon code: ", e);
    return null;
  }
};

export default getActiveSaleByCouponCode;
