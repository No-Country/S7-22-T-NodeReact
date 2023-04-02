function Alumnos() {
  const campos = Array.from({ length: 10 }, (_, i) => i + 1);

  const labels_information = campos.map((campo) => (
    <div key={campo} className={campo % 2 === 0 ? "ml-14" : ""}>
      <label htmlFor={`campo${campo}`}>Campo {campo}</label>
      <br />
      <input
        type="text"
        id={`campo${campo}`}
        name={`campo${campo}`}
        readOnly
        className="mt-4 border border-gray-500 w-[349px] h-[47px] rounded-lg"
      />
    </div>
  ));

  return (
    <>
    <div class="flex items-center mt-4">
  <h4 class="text-black text-[24px] font-bold ml-16 mt-4">Añadir alumno</h4>
  <button class="w-[150px] h-[43px] rounded-md bg-[#C0C0C0] text-black ml-2 ml-auto mr-6">
    Salir
  </button>
</div>
      <div className="container w-[full] h-[52rem] m-12 p-6 bg-[#D9D9D9] rounded-lg">
        <div className="bg-[#D9D9D9] p-4 overflow-y-scroll h-[804px] w-[359px] rounded-lg float-left">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 m-2 bg-white rounded-lg overflow-hidden w-260 h-55"
            >
              <div
                className="w-4 h-4 rounded-full border border-blue-500 ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  e.target.classList.toggle("bg-blue-500");
                }}
              ></div>
              <div className="flex flex-col pt-4 pb-4">
                <p className="font-bold text-black text-base leading-6">
                  Nombre {i + 1}
                </p>
                <p className="font-normal text-black text-sm leading-5">
                  DNI 5
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 mt-[1.5rem] bg-[#F5F5F5] h-full rounded-lg">
          <div className="flex justify-between">
            <h4 className="ml-[2.5rem] text-[20px] font-bold mb-4">
              Datos del alumno
            </h4>
            <hr className="border-b-1 border-blue-500 ml-[25.5rem] mb-4"></hr>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2-2h4a2 2 0 012 2v5"
                />
              </svg>
              <p className="inline-block ml-2">Editar</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2 ml-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.293 9.293a1 1 0 011.414 0L12 10.586l1.293-1.293a1 1 0 011.414 1.414L13.414 12l1.293 1.293a1 1 0 01-1.414 1.414L12 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L10.586 12l-1.293-1.293a1 1 0 010-1.414z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21,20c0,1.1046 -0.8954,2 -2,2H5c-1.1046,0 -2,-0.8954 -2,-2V8c0,-1.1046 
      "
                ></path>
              </svg>
              <p className="inline-block ml-2 mr-8">Eliminar</p>
            </div>
          </div>
          <hr className="border-b-1 border-blue-500 ml-[25rem] mb-4"></hr>
          <div className="grid grid-cols-2 gap-4 flex w-[600px] float-right mr-56">
            {labels_information}
            <div className="ml-[22.6rem]">
  <button className="w-[350px] h-[43px] rounded-md bg-[#022647] text-white mb-2" >
    Ver detalles de materias
  </button>
  <div className="flex mt-8 w-[20rem] ml-8">
    <button className="w-[150px] h-[43px] rounded-md bg-[#008060] text-white mr-2" >
      Guardar
    </button>
    <button className="w-[150px] h-[43px] rounded-md bg-[#C0C0C0] text-black ml-2" >
      Salir
    </button>
  </div>
</div>
    
          </div>
        </div>
      </div>
    </>
  );
}

export default Alumnos;
