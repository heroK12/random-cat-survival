interface Image {
    id: string;
    url: string;
    width: number;
    height: number;
}

// interface Image {
//     url: string;
// }

export const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images: unknown = await res.json();
    // 配列として表現されているか？
    if (!Array.isArray(images)) {
        throw new Error("ねこの画像が取得できませんでした");
    }

    const image: unknown = images[0];
    // Imageの構造をなしているか？
    if (!isImage(image)) {
        throw new Error("ねこの画像が取得できませんでした");
    }
    return image;
};

// 型ガード関数
const isImage = (value: unknown): value is Image => {
    // 値がオブジェクトなのか？
    if (!value || typeof value !== "object") {
        return false;
    }
    // urlプロパティが存在し、かつ、それが文字列なのか？
    return "url" in value && typeof value.url === "string";
};
