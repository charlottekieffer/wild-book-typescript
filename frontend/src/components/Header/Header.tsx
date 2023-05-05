import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.container}>
        <h1>Wilders Book</h1>
      </div>
    </header>
  );
}

export default Header;
