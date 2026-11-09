import Contador from "./Contador";

export default function Header() {
  const usuarioLogado = "Técnico Suporte";

  return (
    <header className="header-container">
      <div className="header-content">
        <h2> Sistema de Chamados</h2>
        <span className="user-badge">Usuário: {usuarioLogado}</span>
        <Contador/>
      </div>
    </header>
  );
}