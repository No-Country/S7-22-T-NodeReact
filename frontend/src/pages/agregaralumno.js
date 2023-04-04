import React from "react";
import Layout from "@/components/Layout";

function AgregarAlumno() {
  const campos = Array.from({ length: 32 }, (_, i) => i + 1);

  const labels_information = campos.map((campo) => (
    <div key={campo}>
      <label htmlFor={`campo${campo}`}>Campo {campo}</label>
      <br />
      <input
        type="text"
        id={`campo${campo}`}
        name={`campo${campo}`}
        readOnly
        className="mt-4 border border-gray-500 w-[249px] h-[47px] rounded-lg"
      />
    </div>
  ));

  return (
      <Layout name={'Agregar alumno'}>
          <div className="ml-32">
              <div className="flex items-center mt-20 mr-24">
                  <h4 className="text-black text-[24px] font-bold ml-16 mt-4">
                      Ingresar datos de nuevo alumno
                  </h4>
                  <button className="w-[344px] h-[43px] rounded-md bg-[#022647] text-white ml-2 ml-[13rem]">
                      Generar usuario y contraseña
                  </button>
                  <button className="w-[112.19px] h-[43px] rounded-md bg-[#10B981] text-black ml-2 ml-auto">
                      Guardar
                  </button>
              </div>
              <div className="grid grid-cols-4 gap-4 m-14">{labels_information}</div>
          </div>
      </Layout>
  );
}

export default AgregarAlumno;
