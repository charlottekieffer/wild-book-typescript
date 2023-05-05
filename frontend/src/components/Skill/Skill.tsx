import styles from "./Skill.module.css";
import PropTypes from "prop-types";

export interface ISkillsProps {
  title: string;
  votes: number;
}

function Skill({ title, votes }: ISkillsProps) {
  return (
    <div className={styles.skill}>
      <span>
        {title}{" "}
        <button type="button" className={styles.button}>
          {votes}
        </button>
      </span>
    </div>
  );
}

Skill.propTypes = {
  votes: PropTypes.number,
  title: PropTypes.string,
};

export default Skill;
