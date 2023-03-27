import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchImage } from "../model/Image";
import { Button } from "../components/Button";
import styles from "./index.module.css";


type Props = {
    initialImageUrl: string;
};

const indexPage: NextPage<Props> = ({ initialImageUrl }) => {
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     fetchImage().then((newImage) => {
    //         setImageUrl(newImage.url);
    //         setLoading(false);
    //     });
    // }, []);

    const handleClick = async () => {
        setLoading(true);
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
        setLoading(false);
    };

    return (
        <div className={styles.page}>
            <Button handleClick={handleClick} />
            <div className={styles.frame}>
                {loading || <img src={imageUrl} className={styles.img} />}
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
