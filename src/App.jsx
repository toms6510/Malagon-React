import React, { useState } from 'react';
import Home from './Componentes/Home';
import Login from './Componentes/Login';

export default function App() {
  // Estado que controla qual página está sendo exibida: 'home' ou 'login'
  const [pagina, setPagina] = useState('home');

  return (
    <>
      {pagina === 'home' && <Home irParaLogin={() => setPagina('login')} />}
      {pagina === 'login' && <Login voltarHome={() => setPagina('home')} />}
    </>
  );
}