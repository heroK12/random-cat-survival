import styles from "../pages/index.module.css";

type Props = {
    handleClick: () => void;
};

export const Button = (props: Props) => {
    const { handleClick } = props;
    return (
        <button onClick={handleClick} className={styles.button}>
            他のにゃんこも見る
        </button>
    );
};
