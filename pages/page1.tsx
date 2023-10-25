import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page1 = () => {
    const user = useSelector(((state:any)=>state.user.user));
    const [data,setData] = useState<any>();
    useEffect(() => {
                    const fetchData = async () => {
        const res = await fetch('https://next.maji-portfolio.com/api/threads');
        const data = await res.json();
        setData(data.data);
        }
        fetchData();
    },[]);



    return (
        <div>
            {user ?              
            <>
            page1
            <p><Link href="/">ホームへ</Link></p>
            {data ? data.map((e:any) => (
                <p key={e.id}>{e.title}</p>
            )):<>loading...</>}
            {user}
            </>: <>
            <p>logout状態</p>
            <p><Link href="/">ホームへ</Link></p>
            </> }
            

        </div>
    );
}

export default Page1;