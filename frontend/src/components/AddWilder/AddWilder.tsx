import styles from "./AddWilder.module.css";
import axios from "axios";
import { useState } from "react";
import { IWilderProps } from "../Wilders/Wilders";

const AddWilder = () => {
  const [name, setName] = useState<IWilderProps["name"]>("");
  const [city, setCity] = useState<IWilderProps["city"]>("");

  return (
    <>
      <h2>Ajouter un wilder</h2>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          axios.post("http://localhost:5000/api/wilder", { name, city });
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />

        <button>Add Wilder</button>
      </form>
    </>
  );
};

export default AddWilder;
