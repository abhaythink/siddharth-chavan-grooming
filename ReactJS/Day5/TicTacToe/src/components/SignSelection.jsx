import { useState } from "react";
import styles from "./SignSelection.module.css";

const SignSelection = ({ onSelectSign }) => {
	const [player1Name, setPlayer1Name] = useState("");
	const [player2Name, setPlayer2Name] = useState("");

	const handleSignSelection = (sign) => {
		onSelectSign(sign, player1Name, player2Name);
	};

	return (
		<div className={`text-center ${styles.signSelection}`}>
			<h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
			<div className="mb-4">
				<label className="block text-lg mb-2">Player 1 Name:</label>
				<input
					type="text"
					value={player1Name}
					onChange={(e) => setPlayer1Name(e.target.value)}
					placeholder="Enter Player 1 name"
					className="px-4 py-2 border rounded"
				/>
			</div>
			<div className="mb-4">
				<label className="block text-lg mb-2">Player 2 Name:</label>
				<input
					type="text"
					value={player2Name}
					onChange={(e) => setPlayer2Name(e.target.value)}
					placeholder="Enter Player 2 name"
					className="px-4 py-2 border rounded"
				/>
			</div>
			<p className="text-lg mb-4">Player 1, choose your sign:</p>
			<div className="flex justify-center gap-4">
				<button
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					onClick={() => handleSignSelection("X")}
				>
					X
				</button>
				<button
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					onClick={() => handleSignSelection("O")}
				>
					O
				</button>
			</div>
		</div>
	);
};

export default SignSelection;
