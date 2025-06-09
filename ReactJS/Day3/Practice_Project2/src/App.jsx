import { useState } from "react";
import "./App.css";
import Result from "./components/Result/Result";
import AddUser from "./components/Users/AddUser";
function App() {
	const [userList, setUserList] = useState([]);

	const addUserHandler = (username, age) => {
		setUserList((prevUsers) => [
			...prevUsers,
			{ name: username, age: age, id: Math.random().toString() },
		]);
	};

	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<Result users={userList} />
		</>
	);
}

export default App;
