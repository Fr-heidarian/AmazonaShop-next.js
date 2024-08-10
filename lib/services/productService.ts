import data from "../data/data";

const getLatest = async () => {
  return data.products;
};

const productService = { getLatest };
export default productService;
