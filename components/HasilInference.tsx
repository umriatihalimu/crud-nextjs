import React from "react";

const HasilInference = () => {
  return (
    <div className="p-20">
      <h2 className="font-bold text-xl">Hasil Inference dan Fuzzyfikasi</h2>

      <table className="table w-full ">
        <thead>
          <tr className="text-black">
            <th>Rules Fuzzy</th>
            <th>Nilai</th>
          </tr>
        </thead>
        <tbody className="text-black">
          <tr>
            <td>(R1) IF BPBI Turun AND JAMKESDA Sedikit, THEN PBI Sedikit</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>(R2) IF BPBI Turun AND JAMKESDA Banyak, THEN PBI Sedikit</td>{" "}
            <td>0.00</td>
          </tr>
          <tr>
            <td>(R3) IF BPBI Naik AND JAMKESDA Sedikit, THEN PBI Banyak</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>(R4) IF BPBI Naik AND JAMKESDA Banyak, THEN PBI Banyak</td>
            <td>0.00</td>
          </tr>
        </tbody>
      </table>

      <div className="pt-10">
        <table className="table">
          <tr>
            <td>
              <h3 className="font-semibold">PBI Minimal</h3>
              <p className="text-sm">*nilai terendah antara R1 dan R2</p>
            </td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>
              <h3 className="font-semibold">PBI Maksimal</h3>
              <p className="text-sm">*nilai tertinggi antara R3 dan R4</p>
            </td>
            <td>0.00</td>
          </tr>
          <tr>
            <td className="mt-16">
              <h3 className="font-semibold text-xl">
                Hasil Nilai Defuzzyfikasi sugeno
              </h3>
            </td>
            <td>0.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default HasilInference;
