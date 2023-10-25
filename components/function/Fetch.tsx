export const DataFetch = async () => {
    const res = await fetch('https://ntool.online/data/train_all.json');
    const data = await res.json();
    return data;
}