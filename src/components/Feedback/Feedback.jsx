import styles from "./Feedback.module.css";

const Feedback = ({ feedback, total, positive }) => (
  <div className={styles.container}>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {total}</p>
    <p>Positive Feedback: {positive}%</p>
  </div>
);

export default Feedback;
