import React, { useState } from 'react';
import '../Style/Login.css';

export default function Login({ voltarHome }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    voltarHome();
  };

  return (
    <div className="login-page">
      <div className="box">
        
        <div className="painel-esq">
          <div className="bolinhas">
            <span className="bola red"></span>
            <span className="bola yellow"></span>
            <span className="bola green"></span>
          </div>

          <div className="painel-esq-conteudo">
            <span className="tag">Inteligência Acadêmica</span>
            <h2>Primeira vez no Malagon?</h2>
            <p>Crie sua conta para acessar recomendações por IA, comparador de custos globais e checklist completo de visto.</p>
            <button className="btn-cadastrar">Cadastrar-se Agora</button>
          </div>

          <div className="footer-texto">Portal do Estudante | Malagon</div>
        </div>

        <div className="painel-dir">
          <button 
            onClick={voltarHome} 
            style={{background: 'none', border: 'none', color: '#ff7a00', cursor: 'pointer', marginBottom: '16px', fontSize: '0.75rem', fontWeight: '600', padding: 0, textAlign: 'left'}}
          >
            ← Voltar para a Home
          </button>

          <h2>Acesse sua Conta</h2>
          <p className="sub">Entre para acompanhar simulações e vistos salvos.</p>

          <form onSubmit={handleLogin} className="form">
            <div className="campo">
              <label>E-mail Acadêmico ou Pessoal</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                required 
              />
            </div>

            <div className="campo">
              <div className="campo-linha">
                <label>Senha</label>
                <a href="#recuperar">Esqueceu a senha?</a>
              </div>
              <input 
                type="password" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                required 
              />
            </div>

            <button type="submit" className="btn-entrar">Entrar na Plataforma →</button>
          </form>

          <div className="divisor"><span>ou entre com</span></div>

          <div className="sociais">
            <button type="button">Google</button>
            <button type="button">GitHub</button>
          </div>
        </div>

      </div>
    </div>
  );
}