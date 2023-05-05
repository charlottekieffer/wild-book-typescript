import { useState, useEffect } from "react";
import axios from "axios";
import WilderCard from "../WilderCard/WilderCard";
import { ISkillsProps } from "../Skill/Skill";
import styles from "./Wilders.module.css";
import PropTypes from "prop-types";

export interface IWilderProps {
  id: number;
  name: string;
  city: string;
  skills: ISkillsProps[];
}

function Wilders() {
  const [wilders, setWilders] = useState<IWilderProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:5000/api/wilder");
      console.log(wilders.data);
      setWilders(wilders.data);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Wilders</h2>
      </div>
      <div className={styles.card}>
        {wilders?.map((wilder) => (
          <WilderCard
            key={wilder.id}
            id={wilder.id}
            name={wilder.name}
            city={wilder.city}
            skills={wilder.skills}
          />
        ))}
      </div>
    </div>
  );
}

Wilders.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  city: PropTypes.string,
  skills: PropTypes.array,
};

export default Wilders;
