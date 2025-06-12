import styles from "./Result.module.css";

function Result(props) {
	if (!props.users || props.users.length === 0) {
		return <p style={{ textAlign: "center" }}>No users added yet.</p>;
	}

	return (
		<ul className={styles.outerList}>
			{props.users.map((user, index) => (
				<li key={index}>
					{user.name} ({user.age} years old)
				</li>
			))}
		</ul>
	);
}

export default Result;
