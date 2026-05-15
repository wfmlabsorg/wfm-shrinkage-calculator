import { ShrinkageCalculator } from "./ShrinkageCalculator";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <h1>Shrinkage Impact Calculator</h1>
          <span className="badge">WFM Labs</span>
        </div>
      </header>
      <main className="main">
        <ShrinkageCalculator />
      </main>
      <footer className="footer">
        <p>&copy; 2026 WFM Labs &middot; <a href="https://wfmlabs.com" target="_blank" rel="noopener">wfmlabs.com</a></p>
      </footer>
    </div>
  );
}
