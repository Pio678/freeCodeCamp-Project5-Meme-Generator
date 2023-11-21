import pepeImg from "../assets/images/pepe.png";

export default function Header() {
  return (
    <header className="page-header">
      <div className="page-logo-container">
        <img className="page-logo-img" src={pepeImg} alt="pepe the frog" />
        <h1 className="page-logo-text">Meme Generator</h1>
      </div>

      <h2 className="project-name">React Course - Project 3</h2>
    </header>
  );
}
