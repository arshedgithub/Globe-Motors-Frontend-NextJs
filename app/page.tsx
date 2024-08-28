import { getServerSideProps } from "next/dist/build/templates/pages";
import AppBar from "./components/AppBar";

export default function Home() {

  
  return (
    <>
      <AppBar />
      <Products />
    </>);
}

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      {/* Fetch data from an API */}
      {/* Render products */}
    </div>
  )
}
