import Link from "next/link";
import { useRouter } from "next/router";

const Posts = () => {
    const router = useRouter();
    const {id} = router.query;
    
    return (
        <div>
            {id}
            <p><Link href="/">ホームへ</Link></p>
        </div>
    );
}

export default Posts;