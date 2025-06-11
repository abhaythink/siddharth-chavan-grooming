import Cell from "./Cell.jsx";
import styles from "./Board.module.css";

const Board = ({ board, handleClick }) => {
	return (
		<div className={styles.board}>
			{board.map((value, index) => (
				<Cell key={index} value={value} onClick={() => handleClick(index)} />
			))}
		</div>
	);
};

export default Board;
