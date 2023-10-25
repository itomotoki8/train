
export async function getServerSideProps() {
    const url = "https://ntool.online/data/train_all.json";
    const res = await fetch(url);
    const data = await res.json();
return { props: { data } };
}
//使いたいページの()のなかに{}で記述
 

const page3 = ({data}:any) => {
    //地方の取得
    const JapanArea = data.areaList;
    const JapanAreaKeys = Object.keys(JapanArea);
    //地方の取得ここまで
    
    //地方の路線
    const data1 = data.data;
    const kanto = data1[4];
    //地方の路線ここまで
    const area = Object.entries(data.areaList);
    console.log(area[0][0])
    return (
        <div>
            <p>地方</p>
            <ul className="flex gap-3">
            {JapanAreaKeys.map((e,key) => (
                <li key={key}>{JapanArea[e]}</li>
                ))}
            </ul>
            <div className="mt-5">
                <p className="mb-2 text-3xl">走っている路線</p>
                {kanto.map((e:any) => (
                    <div key={e.railCode} className="flex gap-5">
                    <p>{e.railName}</p>
                    <p><span className="text-yellow-400">{e.status}</span>:{e.info}</p>
                    </div>
                ))}
            </div>
        </div> 
    );
}

export default page3;