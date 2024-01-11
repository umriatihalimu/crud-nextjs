"use client";

import { useRouter } from "next/navigation";
// SyntheticEvent itu type data untuk e
import { SyntheticEvent, useState } from "react";

const AddNewProduct = () => {
  const [kota, setKota] = useState("");
  const [pbi, setpbi] = useState("");
  const [bpbi, setbpbi] = useState("");
  const [jamkesda, setjamkesda] = useState("");
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false); //untuk loading savingnya
  const router = useRouter();

  const handleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault(); //spy kalo kita submit pagenya tdk reload
    setIsMutating(true); //sebelum submit
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        kota: kota,
        pbi: pbi,
        bpbi: bpbi,
        jamkesda: jamkesda,
      }),
    });
    setIsMutating(false); //setelah submit
    setKota("");
    setbpbi("");
    setpbi("");
    setjamkesda("");
    router.refresh();
    setModal(false);
  };

  return (
    <div className="p-3 pb-0 ">
      <button onClick={handleModal} className="btn btn-sm btn-neutral">
        Tambah Data
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
          <h3 className="font-semibold text-lg text-black">Tambah Data</h3>

          {/* form pasangannya sama onSubmit */}
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-semibold">Kota / Kabupaten</label>
              <input
                type="text"
                value={kota}
                onChange={(e) => setKota(e.target.value)}
                placeholder="kota/kab"
                className="border rounded-md p-2 px-2 text-sm"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">PBI</label>
              <input
                type="number"
                value={pbi}
                onChange={(e) => setpbi(e.target.value)}
                placeholder="pbi"
                className="border rounded-md p-2 px-2 text-sm"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">BPBI</label>
              <input
                type="number"
                value={bpbi}
                onChange={(e) => setbpbi(e.target.value)}
                placeholder="bpbi"
                className="border rounded-md p-2 px-2 text-sm"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Jamkesda</label>
              <input
                type="number"
                value={jamkesda}
                onChange={(e) => setjamkesda(e.target.value)}
                placeholder="jamkesda"
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
                <button type="submit" className="btn btn-sm">
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

export default AddNewProduct;
