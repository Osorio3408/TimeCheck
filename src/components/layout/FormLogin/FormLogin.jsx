import React, { useEffect, useState } from "react";

import {FcGoogle } from 'react-icons/fc'
import {GrFacebook } from 'react-icons/gr'

export const FormLogin = () => {
  const [inputValueCorreo, setInputValueCorreo] = useState("");
  const [inputValueContraseña, setInputValueContraseña] = useState("");
  const [claseSpanCorreo, setClaseSpanCorreo] = useState("placeholder");
  const [claseSpanContraseña, setClaseSpanContraseña] = useState("placeholder");

  useEffect(() => {
    if (inputValueCorreo !== "") {
      setClaseSpanCorreo("up_correo");
    } else {
      setClaseSpanCorreo("placeholder");
    }
  }, [inputValueCorreo]);

  useEffect(() => {
    if (inputValueContraseña !== "") {
      setClaseSpanContraseña("up_contraseña");
    } else {
      setClaseSpanContraseña("placeholder");
    }
  }, [inputValueContraseña]);

  const handleInputChangeCorreo = (event) => {
    setInputValueCorreo(event.target.value);
  };
  const handleInputChangeContraseña = (event) => {
    setInputValueContraseña(event.target.value);
  };

  return (
    <div>
      <form action="">
        <div className="flex justify-center mt-14 input-container relative w-full">
          <input
            type="email"
            className="text-base text-zinc-600 border-b border-black bg-transparent focus:outline-none"
            placeholder=""
            value={inputValueCorreo}
            onChange={handleInputChangeCorreo}
          />
          <span className={claseSpanCorreo}>Correo electronico...</span>
        </div>
        <div className="flex justify-center mt-10 input-container relative w-full">
          <input
            type="password"
            className="border-b border-black bg-transparent focus:outline-none"
            placeholder=""
            value={inputValueContraseña}
            onChange={handleInputChangeContraseña}
          />
          <span className={claseSpanContraseña}>Contraseña...</span>
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white py-1 px-14 rounded-md mt-10 hover:bg-slate-900">
            Iniciar
          </button>
        </div>
      </form>

      <div className="flex flex-row justify-center mt-5">
        <div className="relative bottom-3 border-b-2 border-black w-24"></div>
        <p className="mx-3">or</p>
        <div className="relative bottom-3 border-b-2 border-black w-24"></div>
      </div>

      <div className="flex flex-col text-center justify-center mt-10 text-slate-400">
        <p>Registrate con las redes sociales</p>
        <div className="flex text-center justify-center text-4xl gap-12 mt-3">
          <FcGoogle/>
          <GrFacebook color="blue"/>
        </div>
      </div>

      <div className="flex justify-center flex-col text-center mt-14 text-slate-400">
        <p>¿No tienes cuenta? <strong className="text-black underline">Registrate</strong></p>
        <p className="mt-4">¿Se te olvidó la contraseña? <strong className="text-black underline">Recuperála</strong></p>
      </div>

    </div>
  );
};
