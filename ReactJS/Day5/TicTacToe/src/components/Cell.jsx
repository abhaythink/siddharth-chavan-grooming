import styles from "./Cell.module.css";

const Cell = ({ value, onClick }) => {
	return (
		<div className={styles.cell} onClick={onClick}>
			{value}
		</div>
	);
};

export default Cell;
