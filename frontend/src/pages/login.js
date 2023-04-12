import React from "react";

function Login() {
  return (
    
    <div className="bg-gradient-to-b from-[#042848] to-transparent bg-fixed bg-repeat-x w-screen h-screen">
        <div className="relative login-container h-full flex flex-col justify-center items-start ml-6">
          <h1 className="font-Roboto font-semibold text-white text-28px leading-tight text-left mt-10 ml-10">
            Ingresa tu correo electrónico
          </h1>
          <input
            type="text"
            className="w-full h-12 rounded-md transform scale-x scale-y bg-gray-100 mt-2 ml-10"
          />
          <h1 className="font-Roboto font-semibold text-white text-28px leading-tight text-left mt-4 ml-10">
            Ingresa tu contraseña
          </h1>
          <input
            type="password"
            className="w-full h-12 rounded-md transform scale-x scale-y bg-gray-100 mt-2 ml-10"
          />
          <button
            type="submit"
            className="w-full h-12 rounded-md transform scale-x scale-y bg-[#042848] mt-5 ml-10 text-white font-bold"
          >
            Iniciar sesión
          </button>

          <a href="#" className="mt-5 ml-10 text-center w-full font-Roboto font-semibold text-[#042848]">
            Olvidé mi usuario y contraseña
          </a>

          <a href="#" className="mt-5 ml-10 text-center w-full font-Roboto font-semibold text-[#042848]">
            Necesito ayuda
          </a>

          <p className="mt-8 ml-10 text-[#042848] font-Roboto font-semibold">
  Al iniciar sesión, estás aceptando nuestros <a href="#" style={{color: "#0B5ED7"}}>Términos y Condiciones</a> y nuestra política sobre <a href="#" style={{color: "#0B5ED7"}}>Protección de Datos</a>.
</p>
        </div>
        <div className="absolute bottom-0 right-0 eduweb-img pr-40 pb-24">
          <img src="/eduweb.png" alt="" />
        </div>
      </div>

  );
}

export default Login;
