import products from "@/assets/json/products.json";

interface Product {
  id: string;
  name: string;
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

export const useProducts = () => {
  return {
    products: products,
  };
};
