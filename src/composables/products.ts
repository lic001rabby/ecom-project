import products from "@/assets/json/products.json";

interface Product {
  id: string;
  name: string;
  image: string;
  details: {
    id: string;
    description: string;
    price: number;
    company: string;
    createdAt: string;
    updatedAt: string;
    dob: string;
  };
}

const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};

export const useProducts = () => {
  return {
    products: products,
    getProductById: getProductById,
  };
};
