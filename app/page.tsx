import AppBar from "./components/AppBar";
import ProductCard from "./components/ProductCard";
import { IProduct } from "./intefaces/product";

async function getProducts(): Promise<IProduct[]> {
  const res = await fetch(`${process.env.BACKEND_API}/api/products/`, {
    next: { revalidate: 30 }
  });
  return res.json();
}

export default function Home() {

  return (
    <>
      <Products />
    </>);
}

const Products = async () => {

  const products = await getProducts();

  return (
    <div>
      {products.map(product => <ProductCard product={product} />)}
    </div>
  )
}
