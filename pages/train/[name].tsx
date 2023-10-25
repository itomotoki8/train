import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { DataFetch } from "../../components/function/Fetch";
import { RailData, Serach } from "../../types/Api.type";

type Props = {
    data:RailData[],
}

export async function getStaticProps() {
    const {data} = await DataFetch();
return { props: { data },
revalidate: 30};
}

export const getStaticPaths = async () => {
    return {
      paths: [], // アプリのビルド時にはパスに何が入るかが分からないので空でOK
      fallback: 'blocking', // 👈 ポイント
    };
  };


const Line = ({data}:Props) => {
    const router = useRouter();
    const {name}:any = router.query;
    let id:number = 0;
    switch(name) {
        case "北海道" :
            id = 2;
            break;
        case "東北" :
            id = 3;
            break;
        case "関東" :
            id = 4;
            break;
        case "中部" :
            id = 5;
            break;
        case "近畿":
            id = 6;
            break;
        case "九州" :
            id = 7;
            break;
        case "中国" :
            id = 8;
            break;
        case "四国" :
            id = 9;
            break;
    };

    const line:RailData[]|any = data[id];

    const [searchName,setSearchName] = useState<string>("");

    const [searchData,setSearchData] = useState<Serach[]>([]); 

    const search = () => {
        const kekka:Serach[] = [];

        line.map((e:RailData|any,key:number):void => {
            if(e.railName.includes(searchName)) {
                e.key = key;
                kekka.push(e);
            }
        })
        if(kekka.length !== 0 &&kekka.length != line.length) {
            setSearchData(kekka);
            setSearchName("");
        }

    }
    
    return (
        <div>
            <div className="flex gap-5 px-5 justify-center">
            <input onChange={(e) => setSearchName(e.target.value)} value={searchName} type="text" className="border border-slate-950 w-[70vw]" placeholder="検索"/>
            <button onClick={search} className="border border-slate-950">検索</button>
            </div>
            {searchData.length !== 0 && 
            <div className="mt-5 border-b pb-3 border-slate-900">
                <p>検索結果</p>
                {searchData.map((e) => (
                                <>
                                <ul className="mx-5 mt-3" key={e.key}>
                                    <li>{e.companyName}</li>
                                    <div className="flex justify-around my-3">
                                    <li>{e.railName}</li>
                                    <li>運行情報:{e.status}</li>
                                    </div>
                                    <li className="text-right"><Link href={`${name}/${e.key}`} className="inline-block text-blue-500 hover:text-blue-900">詳細</Link></li>
                                </ul>
                                </>
                    
            ))}
            </div>
            }


            {line && line.map((e:any,key:any) => (
                <>
            <ul className="mx-5 mt-8" key={key}>
                <li>{e.companyName}</li>
                <div className="flex justify-around my-3 md:px-36">
                <li>{e.railName}</li>
                <li>運行情報:{e.status}</li>
                </div>
                <li className="text-right"><Link href={`${name}/${key}`} className="inline-block text-blue-500 hover:text-blue-900">詳細</Link></li>
            </ul>
            </>
            ))}
        </div>
    );
}

export default Line;