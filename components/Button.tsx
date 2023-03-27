import { memo } from "react";
import styles from "../pages/index.module.css";

type Props = {
    handleClick: () => void;
};

export const Button = memo((props: Props) => {
    const { handleClick } = props;
    return (
        <button
            onClick={handleClick}
            className={styles.button}
        >
            きょうのにゃんこ🐱
        </button>
    );
});
