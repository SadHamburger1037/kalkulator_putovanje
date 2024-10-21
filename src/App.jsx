import logo from './logo.svg';
import styles from './App.module.css';
import kalkulatorPutovanja from './kalkulator';
import KalkulatorPutovanja from './kalkulator';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <KalkulatorPutovanja/>
      </header>
    </div>
  );
}

export default App;
