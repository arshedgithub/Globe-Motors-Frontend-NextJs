import AppBar from "./components/AppBar";

async function getProducts() {
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
      {products.length}
    </div>
  )
}
