"use client";

import { log } from "console";
import { useRouter } from "next/navigation";
// SyntheticEvent itu type data untuk e
import { useState } from "react";

interface Iproducts {
  id: number;
  title: string;
  price: number;
  index: number;
}

// tangkap props tidak perlu pake kurawal
const DeleteProduct = (product: Iproducts) => {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false); //untuk loading deletingnya
  const router = useRouter();

  const handleModal = () => {
    setModal(!modal);
  };

  //   tangkap parameter dati button Yes
  const handleDelete = async (productId: number) => {
    setIsMutating(true); //sebelum submit
    await fetch(`http://localhost:5000/products/${productId}`, {
      method: "DELETE",
    });
    setIsMutating(false); //setelah submit

    router.refresh();
    setModal(false);
  };

  return (
    <div className="p-3 pb-0">
      <button onClick={handleModal} className="btn btn-sm btn-error">
        Hapus
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
          <h3 className="font-semibold ">
            Anda akan menghapus {product.title}?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn btn-sm" onClick={handleModal}>
              Tidak
            </button>
            {!isMutating ? (
              <button
                type="submit"
                className="btn btn-sm "
                onClick={() => handleDelete(product.id)}
              >
                Ya
              </button>
            ) : (
              <button type="button" className="btn loading btn-sm">
                Menghapus...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
