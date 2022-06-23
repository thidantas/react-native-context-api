import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function login(email, senha) {
    if (email == "thiago@email.com" && senha == 123) {
      setUsuario({
        nome: "Thiago",
        email: email,
        endereco: "Av. Brasilandia",
        telefone: "(11) 99999-000",
      });
      return "ok";
    } else {
      return "Email ou senha inválidos";
    }
  }

  return (
    <AutenticacaoContext.Provider
      value={{
        usuario,
        login,
      }}
    >
      {children}
    </AutenticacaoContext.Provider>
  );
}
