import React from 'react'

function Grupos() {
  return (
    <div className='bg-blue-900 '>
    <div className='p-12'>
      <div class="flex flex-row justify-between items-center w-full">
  <div class="flex flex-row space-x-60 w-full">
    <a href="#" class="text-white font-bold">Opción</a>
    <a href="#" class="text-white font-bold">Opción</a>
    <a href="#" class="text-white font-bold">Opción</a>
    <a href="#" class="text-white font-bold">Opción</a>
    <a href="#" class="text-white font-bold">Opción</a>
  </div>
  
</div>
<div class="w-full h-1 bg-white"></div>
      <div className="flex justify-between mt-10" >
        <button className="w-[241px] h-[85px] rounded-[10px] bg-blue-100 mx-49">Botón 1</button>
        <button className="w-[241px] h-[85px] rounded-[10px] bg-blue-100 mx-49">Botón 2</button>
        <button className="w-[241px] h-[85px] rounded-[10px] bg-blue-100 mx-49">Botón 3</button>
        <button className="w-[241px] h-[85px] rounded-[10px] bg-blue-100 mx-49">Botón 4</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
        <h2 class=" font-bold text-white text-2xl leading-6 mt-14 mb-10">Alumnos</h2>
        <div className="bg-[#D9D9D9] p-4 overflow-y-scroll h-[804px] w-[359px] rounded-lg " >
  {Array.from({ length: 20 }).map((_, i) => (
    <div key={i} className="flex items-center space-x-4 m-2 bg-white rounded-lg overflow-hidden w-260 h-55">
      <div className="w-4 h-4 rounded-full border border-blue-500 ml-2" onClick={(e) => {
        e.stopPropagation();
        e.target.classList.toggle("bg-blue-500");
      }}></div>
      <div className="flex flex-col pt-4 pb-4">
        <p className="font-bold text-black text-base leading-6">Nombre {i + 1}</p>
        <p className="font-normal text-black text-sm leading-5">DNI {Math.floor(Math.random() * 100000)}</p>
      </div>
    </div>
  ))}
</div>
        </div>
        <div>
        <h2 class=" font-bold text-white text-2xl leading-6 mt-14 mb-10">Profesores</h2>
        <div className="bg-[#D9D9D9] p-4 overflow-y-scroll h-[804px] w-[359px] rounded-lg " >
  {Array.from({ length: 20 }).map((_, i) => (
    <div key={i} className="flex items-center space-x-4 m-2 bg-white rounded-lg overflow-hidden w-260 h-55">
      <div className="w-4 h-4 rounded-full border border-blue-500 ml-2" onClick={(e) => {
        e.stopPropagation();
        e.target.classList.toggle("bg-blue-500");
      }}></div>
      <div className="flex flex-col pt-4 pb-4">
        <p className="font-bold text-black text-base leading-6">Nombre {i + 1}</p>
        <p className="font-normal text-black text-sm leading-5">DNI {Math.floor(Math.random() * 100000)}</p>
      </div>
    </div>
  ))}
</div>
        </div>
        <div>
        <h2 class=" font-bold text-white text-2xl leading-6 mt-14 mb-10">Enlace rápidos</h2>
          <ul className="list-disc list-inside">
            <li><a href="#">Enlace rápido 1</a></li>
            <li><a href="#">Enlace rápido 2</a></li>
            <li><a href="#">Enlace rápido 3</a></li>
            <li><a href="#">Enlace rápido 4</a></li>
          </ul>
        </div>
      </div>

    </div >
    </div>
  )
}

export default Grupos