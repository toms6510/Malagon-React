import React from 'react';
import '../Style/Home.css';

export default function Home({ irParaLogin }) {
  return (
    <div className="home">
      
      <header className="nav">
        <div className="logo">MALAGON</div>
        <nav className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#financeiro">Financeiro</a>
          <a href="#academico">Acadêmico</a>
          <a href="#visto">Visto</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <button onClick={irParaLogin} className="btn">Login</button>
      </header>

      <main className="main">
        <div className="hero">
          <span className="tag">IA + Intercâmbio</span>
          <h1>Planeje seu <span>Intercâmbio</span> com Inteligência</h1>
          <p>Simule custos, organize vistos e encontre sua rota acadêmica em qualquer lugar do mundo com total segurança e precisão.</p>
          <div className="acoes">
            <button className="btn" style={{padding: '16px 32px', borderRadius: '12px'}}>Começar Simulação</button>
            <button className="btn-outline">Saiba Mais ↓</button>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <span>MONTHLY AVG</span>
            <div className="valor">€ 850,00</div>
            <p>Média estimada para o seu destino.</p>
            <div className="barra"><div className="fill orange" style={{width: '75%'}}></div></div>
          </div>

          <div className="card">
            <span>TARGET</span>
            <div className="valor">€ 3.500,00</div>
            <p>Reserva para visto acadêmico.</p>
            <div className="barra"><div className="fill purple" style={{width: '50%'}}></div></div>
          </div>

          <div className="card">
            <span>MATCHING IA</span>
            <div className="valor green">95.8%</div>
            <span className="badge-ok">Alta Compatibilidade</span>
            <div className="barra"><div className="fill green" style={{width: '95.8%'}}></div></div>
          </div>
        </div>
      </main>
    </div>
  );
}