import Link from "next/link";
import { useState } from "react";

export async function getStaticProps() {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
return { props: { data }};
}
//使いたいページの()のなかに{}で記述
const Page2 = ({data}:any) => {
    const [count,setCount] = useState(0);
    console.log(data);



    return (
        <div>
            page2
            <br />
            <br />
            {count}
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>プラス</button>
            <p><Link href="/">ホームへ</Link></p>
            <ul>
            {data && data.map((e:any) => (
                <li key={e.id}>
                    <p>id:{e.id}</p>
                    <p>name:{e.name}</p>
                    <p>text:{e.text}</p>
                </li>
            ))}
            </ul>



        </div>
    );
}

export default Page2;