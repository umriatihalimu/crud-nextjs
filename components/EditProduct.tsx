"use client";

import { useRouter } from "next/navigation";
// SyntheticEvent itu type data untuk e
import { useState } from "react";

interface Iproducts {
  id: number;
  produk: string;
  harga: number;
  index: number;
}

const EditProduct = (product: Iproducts) => {
  const [produk, setProduk] = useState(product.produk);
  const [harga, setHarga] = useState(product.harga);

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
        produk: produk,
        harga: harga,
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
          <h3 className="font-semibold text-lg">Ubah Data</h3>

          {/* form pasangannya sama onSubmit */}
          <form>
            <div className="form-control">
              <label className="label font-semibold">Produk</label>
              <input
                type="text"
                value={produk}
                onChange={(e) => setProduk(e.target.value)}
                placeholder="produk"
                className="border rounded-md p-2 px-2 text-sm"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Harga</label>
              <input
                type="number"
                value={harga}
                onChange={(e) => setHarga(Number(e.target.value))}
                placeholder="harga"
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
