import { Fragment } from "react";
import mealsIamge from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<Fragment>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={styles["main-image"]}>
				<img src={mealsIamge} alt="A table full of delicious Food!" />
			</div>
		</Fragment>
	);
};
export default Header;
