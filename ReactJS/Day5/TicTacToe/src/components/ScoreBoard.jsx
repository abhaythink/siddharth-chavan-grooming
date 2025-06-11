function ScoreBoard({ scores }) {
	return (
		<div className="flex gap-8 mb-4">
			<p>Player 1 Score: {scores.player1}</p>
			<p>Player 2 Score: {scores.player2}</p>
		</div>
	);
}

export default ScoreBoard;
