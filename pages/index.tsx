import { GetServerSideProps, NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { fetchImage } from "../model/Image";
import { Button } from "../components/Button";
import styles from "./index.module.css";

type Props = {
    initialImageUrl: string;
};

const indexPage: NextPage<Props> = ({ initialImageUrl }) => {
    const [imageUrl, setImageUrl] = useState(initialImageUrl);

    const handleClick = useCallback(async () => {
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
    }, []);

    return (
        <div className={styles.page}>
            <Button handleClick={handleClick} />
            <div className={styles.frame}>
                <img src={imageUrl} className={styles.img} />
            </div>
        </div>
    );
};

export default indexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const image = await fetchImage();
    return {
        props: {
            initialImageUrl: image.url,
        },
    };
};
