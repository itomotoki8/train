import { GetStaticProps } from "next";
import Link from "next/link";

type Resposes = {
    id:number,
    response_no:number,
    name:string,
    content:string,
    created_at:string,
    updated_at:string,
}


type Treads = {
    content
    : 
    string,
    created_at
    : 
    string,
    id
    : 
    number,
    name
    : 
    string,
    responses
    : 
    []|Resposes[],
    responses_count
    : 
    number,
    title
    : 
    string,
    updated_at
    : 
    string,
};


export const getStaticProps:GetStaticProps = async () => {
    const res = await fetch("https://next.maji-portfolio.com/api/threads");
    const {data} = await res.json()
return { props: { data },
revalidate: 30};
};


const Page1 = ({data}:any) => {

    let a = [];
    a = data;

    return (
        <div>
            {a && data.map((e:Treads) => (
                <>
                {e.title}
                <br />
                </>
            ))}
            <br />
            <Link href="/"><a>ホーム</a></Link>
        </div>
    );
}

export default Page1;