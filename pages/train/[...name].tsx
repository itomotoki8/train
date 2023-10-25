import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {useSelector } from 'react-redux'
import { DataFetch } from '../../components/function/Fetch';
import { RailData } from '../../types/Api.type';


type Props = {
    data:RailData[],
    time:number,
}

export async function getServerSideProps() {
    const datas = await DataFetch();
    const time = datas.lastUpdated;
    const {data} = datas;

return { props: { data, time }};
}

const Name = ({data,time}:Props) => {
    
    const date = new Date(time);
    
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const mm = date.getMinutes();


    const id:number = useSelector((state:any) => state.id.id);
    const router = useRouter();
    const {name}:any = router.query;
    const lineId:number = name[1];
    const line:any = data[id];
    const lineData:RailData = line[lineId];

    const [array,setArray] = useState<any>([]);
    const [clickStatus,setClickstatus] = useState(false);

    const style = clickStatus ? "text-red-400 text-4xl" : "text-slate-400 text-4xl";

    useEffect(() => {
        if(localStorage.getItem("value")) {
            setArray(JSON.parse(localStorage.getItem("value")?? "null"));

            JSON.parse(localStorage.getItem("value")?? "null").map((e:RailData) => {
                if(e.railName == lineData.railName) {
                    setClickstatus(true);
                }
            })
        }
    },[lineData.railName]);

    const post = () => {
        const a = array;
        if(clickStatus == false) {
            a.push(lineData);
            localStorage.setItem("value",JSON.stringify(a));
            setClickstatus(true);
        }else {
            a.pop();
            localStorage.setItem("value",JSON.stringify(a));            
            setClickstatus(false);
            if(JSON.parse(localStorage.getItem("value")?? "null").length == 0) {
                localStorage.clear();
            }
        }
    };

    return (
        <div>
            <p className="mb-6 text-right mr-3">更新時間:{`${m}月${d}日${h}時${mm}分`}</p>

            {lineData && 
                        <ul className='w-[100vw] text-2xl absolute top-1/2 flex flex-col items-center gap-11 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <li>{lineData.companyName}</li>
                            <li>{lineData.railName}</li>
                            <div className='flex gap-20'>
                            <li>{lineData.status}</li>
                            <button onClick={post} className={style}>♥</button>
                            </div>
                        </ul>         
            }   
        </div>
    );
}

export default Name;