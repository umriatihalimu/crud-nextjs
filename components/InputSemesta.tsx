import React from "react";

const InputSemesta = () => {
  return (
    <div className="grid grid-cols-2 gap-16 pt-20">
      <div className="">
        <h2 className="font-bold text-xl">Input Semesta</h2>
        <form>
          <div className="form-control ">
            <label className="label ">BPBI Minimal</label>
            <input
              type="text"
              placeholder="kota/kab"
              className="border rounded-md p-2 px-2 text-sm"
            />
          </div>
          <div className="form-control">
            <label className="label ">BPBI Maksimal</label>
            <input
              type="number"
              placeholder="pbi"
              className="border rounded-md p-2 px-2 text-sm"
            />
          </div>
          <div className="form-control">
            <label className="label ">Jamkesda Minimal</label>
            <input
              type="number"
              placeholder="bpbi"
              className="border rounded-md p-2 px-2 text-sm"
            />
          </div>
          <div className="form-control">
            <label className="label ">Jamkesda Maksimal</label>
            <input
              type="number"
              placeholder="jamkesda"
              className="border rounded-md p-2 px-2 text-sm"
            />
          </div>
          <div className="form-control">
            <label className="label ">PBI Minimal</label>
            <input
              type="number"
              placeholder="pbi"
              className="border rounded-md p-2 px-2 text-sm"
            />
          </div>
          <div className="form-control">
            <label className="label ">PBI Maksimal</label>
            <input
              type="number"
              placeholder="pbi"
              className="border rounded-md p-2 px-2 text-sm"
            />
          </div>
          <div className="modal-action">
            <button type="button" className="btn btn-sm">
              Fuzzyfikasi
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <h2 className="font-bold text-xl">Input Data per Kota/Kab</h2>
        <form>
          <div className="form-control ">
            <label className="label ">BPBI </label>
            <input
              type="text"
              placeholder="kota/kab"
              className="border rounded-md p-2 px-2 text-sm"
            />
          </div>
          <div className="form-control">
            <label className="label ">Jamkesda </label>
            <input
              type="number"
              placeholder="pbi"
              className="border rounded-md p-2 px-2 text-sm"
            />
          </div>

          <div className="modal-action">
            <button type="button" className="btn btn-sm">
              Defuzzyfikasi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputSemesta;
