import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParam: string) => {
  const PRODUCTS_SEARCH_QUERY = defineQuery(`
        *[
            _type == "product"
            && name match $searchParam
        ] | order(name asc)
        `);

  try {
    const products = await sanityFetch({
      query: PRODUCTS_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*`,
      },
    });

    return products.data || [];
  } catch (e) {
    console.error("Error fetching products by name: ", e);
    return [];
  }
};
