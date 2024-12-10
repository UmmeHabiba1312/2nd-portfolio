import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
    <nav>
      <div className="logo">
        <a href="/">PORTFOLIO</a>
      </div>
      <div className="navLinks">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
      <button className="hireButton">Hire Me</button>
    </nav>
  </header>
  
  );
}
