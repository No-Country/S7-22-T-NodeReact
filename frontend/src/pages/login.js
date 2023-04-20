import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';

function Login() {
  const router = useRouter();

  const [form, setForm] = useState({email: '', password: ''});
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prevState => ({
        ...prevState,
        [name]: value
    }));
  }

  useEffect(() => {
    // TODO check use role and redirect based on role
    if (user) {
      router.push('/');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://s7-22-t-nodereact-production.up.railway.app/api/auth/login/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await response.json();

      setUser(data);

      Cookies.set('user', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-gradient-to-b from-[#042848] to-transparent bg-fixed bg-repeat-x w-screen h-screen">
        <form onSubmit={handleSubmit} className="relative login-container h-full flex flex-col justify-center items-start ml-6">
          <h1 className="font-Roboto font-semibold text-white text-28px leading-tight text-left mt-10 ml-10">
            Ingresa tu correo electrónico
          </h1>
          <input
            type="text"
            name={'email'}
            value={form.email}
            onChange={handleChange}
            className="w-full h-12 rounded-md transform scale-x scale-y bg-gray-100 mt-2 ml-10"
          />
          <h1 className="font-Roboto font-semibold text-white text-28px leading-tight text-left mt-4 ml-10">
            Ingresa tu contraseña
          </h1>
          <input
            type="password"
            name={'password'}
            value={form.password}
            onChange={handleChange}
            className="w-full h-12 rounded-md transform scale-x scale-y bg-gray-100 mt-2 ml-10"
          />

          {/* <Button text={'Login'} size={'full'} /> Use button component*/}

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
        </form>

        <div className="absolute bottom-0 right-0 eduweb-img pr-40 pb-24">
          <img src="/eduweb.png" alt="" />
        </div>
    </div>
  );
}

export default Login;
