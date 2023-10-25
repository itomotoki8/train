import Link from "next/link";
import { getId } from '../../redux/idSlice'
import { useDispatch } from "react-redux";
import { DataFetch } from "../../components/function/Fetch";

type Props = {
    area : any[],
    time :number,
};


export async function getStaticProps() {
    const data = await DataFetch();
    const area = Object.entries(data.areaList);
    const time = data.lastUpdated;
    console.log(area);

return { props: { area ,time}};
}

const Index = ({area,time}:Props) => {
    const dispatch = useDispatch();
    const date = new Date(time);
    
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const mm = date.getMinutes();
    
    return (
        <div>
            <p className="mb-6 text-right mr-3">更新時間:{`${m}月${d}日${h}時${mm}分`}</p>
            <ul className="flex flex-col items-center text-xl gap-10">
            {area.map((e:any) => (
                <>
                <li onClick={() => dispatch(getId(e[0]))}><Link href={`train/lines/${e[1]}`}>{e[1]}</Link></li>
                </>
            ))}
            </ul>
        </div>
    );
}

export default Index;