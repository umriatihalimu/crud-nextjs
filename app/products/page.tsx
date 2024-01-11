import AddNewProduct from "@/components/AddNewProduct";
import DeleteProduct from "@/components/DeleteProduct";
import EditProduct from "@/components/EditProduct";
import HasilInference from "@/components/HasilInference";
import InputSemesta from "@/components/InputSemesta";

interface Iproducts {
  id: number;
  kota: string;
  pbi: number;
  bpbi: number;
  jamkesda: number;
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
    <div className="p-5 bg-slate-300 ">
      <h1 className="text-black">
        Data BPI, BPBI dan Jamkesda Sulawesi Tenggara
      </h1>
      <div className="p-2">
        <AddNewProduct />
      </div>

      <table className="table w-full ">
        <thead>
          <tr className="text-black">
            <th>#</th>
            <th>Kota / Kab</th>
            <th>PBI</th>
            <th>BPBI</th>
            <th>Jamkesda</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.kota}</td>
                <td>{product.pbi}</td>
                <td>{product.bpbi}</td>
                <td>{product.jamkesda}</td>
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
      <div className="">
        <InputSemesta />
      </div>
      <HasilInference />
    </div>
  );
};

export default Products;
