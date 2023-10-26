import Link from "next/link";
import { useRouter } from "next/router";

const Layouts = ({children}:any) => {
    const router = useRouter();
    return (
        <>
            <header className="text-white text-xl bg-blue-200 flex h-16 mb-6 items-center justify-around">
                <button type="button" onClick={router.back} className="lg:hover:text-slate-700">戻る</button>
                <Link href="/" className="ml-20 lg:hover:text-slate-700"><a>ホーム</a></Link>
                <Link href="/train/favorite" className="ml-20 lg:hover:text-slate-700">お気に入り</Link>
            </header>
            <main>
            {children}
            </main>
        </>
    );
}

export default Layouts;