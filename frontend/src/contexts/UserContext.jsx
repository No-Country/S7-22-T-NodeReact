import { createContext, useState } from 'react';

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  // ----------------- INICIALIZANDO LOS HOOKS ----------------- //
  const [usuario, setUsuario] = useState(undefined);

  // ----------------- DEVUELVE LOS VALORES SELECCIONADOS DEL CONTEXTO ----------------- //
  const UserContextInit = {
    user: {
      get: usuario,
      set: setUsuario,
    },
  };
  return (
    <UserContext.Provider value={UserContextInit}>
      {children}
    </UserContext.Provider>
  );
}
