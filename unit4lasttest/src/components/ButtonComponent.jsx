import styles from "./Button.module.css";
import ReactPaginate from "react-paginate";

function ButtonComponent({ title, onClick, disabled, id }) {
  return (
    <button id={id} data-testid="button-component" className={styles.button}>
     Next Page
    </button>
  );
}

export default ButtonComponent;
