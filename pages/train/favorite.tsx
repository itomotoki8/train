import { useEffect, useState } from "react";
import { DataFetch } from "../../components/function/Fetch";
import { RailData } from "../../types/Api.type";
import { GetStaticProps } from "next";


export const getStaticProps:GetStaticProps = async () => {
    const data = await DataFetch();
    const time = await data.lastUpdated; 

return { props: { time },
revalidate: 5};
};

const Favorite = ({time}:any) => {

    // const m = time.getMonth() + 1;
    // const d = time.getDate();
    // const h = time.getHours();
    // const mm = time.getMinutes();

    // const times = `${m}月${d}日${h}時${mm}分`;

    const [favorites,setFavorite] = useState<RailData[]|null>([]);

    useEffect(() => {
        setFavorite(JSON.parse(localStorage.getItem("value")?? "null"));
    },[])


    const onDelete = (key:number) => {
        if(favorites) {
            setFavorite(favorites.filter((favo,keys) => (key !== keys)));
        

        const a = favorites;
        a.splice(key,1);
        localStorage.setItem("value",JSON.stringify(a));            
            if(JSON.parse(localStorage.getItem("value")?? "null").length == 0) {
                localStorage.clear();
                setFavorite(null);
            }
        }
    }
    return (
        <div>
            <p className="mb-6 text-right mr-3">更新時間:{time && time}</p>
            {favorites ? 
            <>
                {favorites.map((e:any,key:number) => (
                                <ul className="mx-5 mt-8" key={key}>
                                <li>{e.companyName}</li>
                                <div className="flex justify-around my-3">
                                <li>{e.railName}</li>
                                <li>運行情報:{e.status}</li>
                                </div>
                                <li className="text-right"><button className="inline-block text-blue-500 hover:text-blue-900" onClick={() => {onDelete(key)}}>削除</button></li>
                            </ul>
                
                ))}
            </>

        :
        <p className="text-3xl mt-52 text-center">お気に入りがありません</p>}
        </div>
    );
}

export default Favorite;