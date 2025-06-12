import { useReducer } from "react";
function App() {
	function reducer(state, action) {
		if (action.type === "INCREMENT") {
			console.log("INCREMENT");
			return state + 1;
		}
		if (action.type === "DECREMENT") {
			console.log("DECREMENT");

			return state - 1;
		}
	}

	const [count, dispatch] = useReducer(reducer, 0);

	return (
		<div>
			<center>
				<h1>Counter App</h1>
				<h3>{count}</h3>
				<button onClick={() => dispatch({ type: "INCREMENT" })}>
					Increment
				</button>
				<button onClick={() => dispatch({ type: "DECREMENT" })}>
					Decrement
				</button>
			</center>
		</div>
	);
}
export default App;
