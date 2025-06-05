import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
	return (
		<div className={styles.backdrop} onClick={props.onConfirm}>
			<div className={styles.modal}>
				<h2 className={styles.title}>{props.title}</h2>
				<p className={styles.message}>{props.message}</p>
				<button className={styles.button} onClick={props.onConfirm}>
					Okay
				</button>
			</div>
		</div>
	);
}

export default ErrorModal;
