import { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  // ----------------- INICIALIZANDO LOS HOOKS ----------------- //
  const [user, setUser] = useState(undefined);

  // ----------------- DEVUELVE LOS VALORES SELECCIONADOS DEL CONTEXTO ----------------- //
  const UserContextInit = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={UserContextInit}>
      {children}
    </UserContext.Provider>
  );
}
