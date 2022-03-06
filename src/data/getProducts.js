import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GetProducts() {
  const { data, error } = useSWR(
    "https://fakestoreapi.com/products?limit=10",
    fetcher
  );
  // localStorage.setItem("products", JSON.stringify(data));
  // localStorage.setItem("error", JSON.stringify(error));

  const products = data;
  return { products, error };
}
