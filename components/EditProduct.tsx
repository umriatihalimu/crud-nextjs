"use client";

import { useRouter } from "next/navigation";
// SyntheticEvent itu type data untuk e
import { useState } from "react";

interface Iproducts {
  id: number;
  title: string;
  price: number;
  index: number;
}

const EditProduct = (product: Iproducts) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false); //untuk loading savingnya
  const router = useRouter();

  const handleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = async (productId: number) => {
    setIsMutating(true); //sebelum submit
    await fetch(`http://localhost:5000/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        price: price,
      }),
    });
    setIsMutating(false); //setelah submit

    router.refresh();
    setModal(false);
  };

  return (
    <div className="p-3 pb-0">
      <button onClick={handleModal} className="btn btn-sm btn-info">
        Ubah
      </button>
      {/* kontrol modalnya pake checkbox dngn class modal-toggle */}
      <input
        type="checkbox"
        checked={modal}
        onChange={handleModal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-semibold text-lg">Ubah Produk</h3>

          {/* form pasangannya sama onSubmit */}
          <form>
            <div className="form-control">
              <label className="label font-semibold">Nama Produk</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Produk"
                className="border rounded-md p-2 px-2 text-sm"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Harga</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Harga"
                className="border rounded-md p-2 px-2 text-sm"
              />
            </div>

            <div className="modal-action">
              <button
                type="button"
                className="btn btn-sm"
                onClick={handleModal}
              >
                Tutup
              </button>
              {!isMutating ? (
                <button
                  type="submit"
                  className="btn btn-sm"
                  onClick={() => handleSubmit(product.id)}
                >
                  Simpan
                </button>
              ) : (
                <button type="button" className="btn loading btn-sm">
                  Menyimpan...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
