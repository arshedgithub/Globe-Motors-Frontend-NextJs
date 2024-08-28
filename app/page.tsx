import AppBar from "./components/AppBar";
import ProductCard from "./components/ProductCard";
import { IProduct } from "./intefaces/product";

async function getProducts(): Promise<IProduct[]> {
  const res = await fetch("https://globe-motors-backend.vercel.app/api/products/", {
    next: { revalidate: 30 }
  });
  return res.json();
}

export default function Home() {

  return (
    <>
      <AppBar />
      <Products />
    </>);
}

const Products = async () => {

  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => <ProductCard product={product} />)}
    </div>
  )
}
