import styles from "./WilderCard.module.css";
import avatar from "../../assets/avatar.png";
import Skill from "../Skill/Skill";
import AddSkill from "../AddSkill/AddSkill";
import { IWilderProps } from "../Wilders/Wilders";
import PropTypes from "prop-types";
import axios from "axios";

function WilderCard({ id, name, city, skills }: IWilderProps) {
  const deleteWilder = async () => {
    await axios.delete("http://localhost:5000/api/wilder", {
      data: { id: id },
    });
  };

  return (
    <section className={styles.cardrow}>
      <article className={styles.card}>
        <img src={avatar} alt="{name} Profile" />
        <h3>
          {name}, {city}
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Wild Skills</h4>
        <ul>
          {skills.map((skill) => {
            return (
              <li>
                <Skill title={skill.title} votes={skill.votes} />
              </li>
            );
          })}
        </ul>
        <AddSkill />
        <button type="button" onClick={deleteWilder}>
          Delete Wilder
        </button>
      </article>
    </section>
  );
}

WilderCard.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  city: PropTypes.string,
  skills: PropTypes.array,
};

export default WilderCard;
