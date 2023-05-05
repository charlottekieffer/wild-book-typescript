import styles from "./App";
import Wilders from "./components/Wilders/Wilders";
import Header from "./components/Header/Header";
import AddWilder from "./components/AddWilder/AddWilder";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Wilders />
      </main>
      <AddWilder />
      <footer>
        <div>
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
