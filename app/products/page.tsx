import AddNewProduct from "@/components/AddNewProduct";
import DeleteProduct from "@/components/DeleteProduct";
import EditProduct from "@/components/EditProduct";

interface Iproducts {
  id: number;
  title: string;
  price: number;
  index: number;
}

const base_url = "http://localhost:5000/products";
const Products = async () => {
  // fetching data
  const res = await fetch(base_url, {
    cache: "no-store",
  });
  const products: Iproducts[] = await res.json();

  return (
    <div className="p-5 bg-[#1f130f] h-screen ">
      <h1 className="text-white">List Produk</h1>
      <div className="p-2">
        <AddNewProduct />
      </div>
      <table className="table w-full ">
        <thead>
          <tr className="text-white">
            <th>#</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td className="flex gap-2 font-semibold ">
                  <EditProduct {...product} />
                  {/* kirimkan props ke deleteProduct */}
                  <DeleteProduct {...product} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
