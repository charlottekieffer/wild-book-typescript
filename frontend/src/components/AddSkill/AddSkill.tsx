import styles from "./AddSkill.module.css";
import axios from "axios";
import { useState } from "react";
import { ISkillsProps } from "../Skill/Skill";

const AddSkill = () => {
  const [name, setName] = useState<ISkillsProps["title"]>("");

  return (
    <>
      <h3>Ajouter une compétence</h3>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          axios.post("http://localhost:5000/api/skill", { name });
        }}
      >
        <label>Skill:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <button>Add Skill</button>
      </form>
    </>
  );
};

export default AddSkill;
