import styles from "./GameInfo.module.css";

const GameInfo = ({
	winner,
	isXTurn,
	player1Sign,
	player2Sign,
	player1Name,
	player2Name,
	scores,
	onRestart,
}) => {
	return (
		<div className={`text-center mt-4 ${styles.gameInfo}`}>
			{winner ? (
				<p className="text-xl">
					{winner === "Draw"
						? "It's a Draw!"
						: `Player ${winner === player1Sign ? 1 : 2} (${winner}) Wins!`}
				</p>
			) : (
				<p className="text-xl">
					{isXTurn ? player1Name : player2Name}'s Turn (
					{isXTurn ? player1Sign : player2Sign})
				</p>
			)}
			<div className="mt-4">
				<table className={styles.scoreTable}>
					<thead>
						<tr>
							<th>{player1Name} (Player 1)</th>
							<th>{player2Name} (Player 2)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{scores.player1}</td>
							<td>{scores.player2}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<button
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				onClick={onRestart}
			>
				Restart Game
			</button>
		</div>
	);
};

export default GameInfo;
