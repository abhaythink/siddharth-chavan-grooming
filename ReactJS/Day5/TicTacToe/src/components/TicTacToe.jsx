import { useState } from "react";
import SignSelection from "./SignSelection.jsx";
import Board from "./Board.jsx";
import GameInfo from "./GameInfo.jsx";
import styles from "./TicTacToe.module.css";

const TicTacToe = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [isXTurn, setIsXTurn] = useState(true);
	const [winner, setWinner] = useState(null);
	const [player1Sign, setPlayer1Sign] = useState(null);
	const [player2Sign, setPlayer2Sign] = useState(null);
	const [player1Name, setPlayer1Name] = useState("");
	const [player2Name, setPlayer2Name] = useState("");
	const [gameStarted, setGameStarted] = useState(false);
	const [scores, setScores] = useState({ player1: 0, player2: 0 });
	const [showPopup, setShowPopup] = useState(false);

	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Rows
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Columns
		[0, 4, 8],
		[2, 4, 6], // Diagonals
	];

	const checkWinner = (currentBoard) => {
		for (let combination of winningCombinations) {
			const [a, b, c] = combination;
			if (
				currentBoard[a] &&
				currentBoard[a] === currentBoard[b] &&
				currentBoard[a] === currentBoard[c]
			) {
				return currentBoard[a];
			}
		}
		return currentBoard.includes(null) ? null : "Draw";
	};

	const handleClick = (index) => {
		if (board[index] || winner || !gameStarted) return;

		const newBoard = [...board];
		const currentSign = isXTurn ? player1Sign : player2Sign;
		newBoard[index] = currentSign;
		setBoard(newBoard);
		setIsXTurn(!isXTurn);

		const gameResult = checkWinner(newBoard);
		if (gameResult) {
			setWinner(gameResult);
			if (gameResult !== "Draw") {
				setScores((prevScores) => ({
					...prevScores,
					[gameResult === player1Sign ? "player1" : "player2"]:
						prevScores[gameResult === player1Sign ? "player1" : "player2"] + 1,
				}));
			}
			setShowPopup(true); // Show pop-up for both win and draw
		}
	};

	const handleSignSelection = (sign, p1Name, p2Name) => {
		setPlayer1Sign(sign);
		setPlayer2Sign(sign === "X" ? "O" : "X");
		setPlayer1Name(p1Name || "Player 1");
		setPlayer2Name(p2Name || "Player 2");
		setGameStarted(true);
	};

	const handleRestart = () => {
		setBoard(Array(9).fill(null));
		setIsXTurn(true);
		setWinner(null);
		setShowPopup(false);
	};

	const handleQuit = () => {
		setBoard(Array(9).fill(null));
		setIsXTurn(true);
		setWinner(null);
		setPlayer1Sign(null);
		setPlayer2Sign(null);
		setPlayer1Name("");
		setPlayer2Name("");
		setGameStarted(false);
		setScores({ player1: 0, player2: 0 });
		setShowPopup(false);
	};

	const closePopup = () => {
		setShowPopup(false);
	};

	return (
		<div
			className={`flex flex-col items-center justify-center h-screen bg-gray-100 ${styles.container}`}
		>
			{showPopup && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg text-center">
						{winner === "Draw" ? (
							<>
								<h2 className="text-2xl font-bold mb-4">It's a Draw!</h2>
								<p className="text-lg mb-4">No winner this time.</p>
							</>
						) : (
							<>
								<h2 className="text-2xl font-bold mb-4">
									{winner === player1Sign ? player1Name : player2Name} Wins!
								</h2>
								<p className="text-lg mb-4">Player 1: {player1Name}</p>
							</>
						)}
						<div className="flex justify-center gap-4">
							<button
								className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
								onClick={handleRestart}
							>
								Restart
							</button>
							<button
								className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
								onClick={handleQuit}
							>
								Quit
							</button>
						</div>
					</div>
				</div>
			)}
			{!gameStarted ? (
				<SignSelection onSelectSign={handleSignSelection} />
			) : (
				<>
					<h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
					<Board board={board} handleClick={handleClick} />
					<GameInfo
						winner={winner}
						isXTurn={isXTurn}
						player1Sign={player1Sign}
						player2Sign={player2Sign}
						player1Name={player1Name}
						player2Name={player2Name}
						scores={scores}
						onRestart={handleRestart}
					/>
				</>
			)}
		</div>
	);
};

export default TicTacToe;
