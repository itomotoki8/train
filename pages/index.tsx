import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../redux/counterSlice'
import { decrement10, increment10 } from '../redux/counter2Slice'
import { changeUser } from '../redux/user'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Heads from '../components/Head'


const Home: NextPage = () => {
  const [users, setUser] = useState<string>();
  const count:any = useSelector((state:any) => state.counter.count);
  const count2 = useSelector((state:any)=> state.counter2.count);
  const dispatch = useDispatch();
  const router = useRouter();

  const [id, setId] = useState<Number>();
  useEffect(() => {
    const id = Math.floor(Math.random() * 10) + 1;
    setId(id);
  },[]);

  const loginFunc = () => {
    if (users == 'Raillink321;') {
      dispatch(changeUser());
      router.push('/page1');
    }else {
      alert('login失敗');
    }
  }

  return (
    <div>
      <Heads />

      {count}
      <button onClick={() => dispatch(increase())}>up</button>
      <button onClick={() => dispatch(decrease())}>down</button>
      <br />
      {count2}
      <button onClick={() => dispatch(increment10())}>10up</button>
      <button onClick={() => dispatch(decrement10())}>10down</button>
      <br />
      <main>
        <p><Link href="/page1">page1</Link></p>
        <p><Link href="/page2">page2</Link></p>
        <p><Link href={`/posts/${id}`}>Postsへ</Link></p>
      </main>
      <div className='mt-20'>
      <p>ログイン</p>
      <input type="text" value={users} onChange={e => setUser(e.target.value) } className='border-slate-800 border' placeholder='password' />
      <button className='border border-slate-800 ml-3' onClick={loginFunc}>login</button>
      </div>
      

      <div className="flex">
        <div className="flex-1 w-full bg-slate-600">aaaaaaaaaaaaaaaa</div>
        <div className="flex-1">
      <Link href="/page1">
      <Image alt='ローディング画像' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///83QUkxPEQgLjgvOkMiLzkqNj8uOUIdKzY0PkYlMjsyPEUaKTQkMTstOUFVXWOanqHX2dr19faTl5vFx8mFio5pb3Tg4eLr7O13fIHQ0tNxd3xBSlJKU1q9v8Hx8vKjpqleZWuBhoq1uLqoq65iaW9YX2UTJDC4u709R0+Xm58AEyPLzc6EiY1OV10CaqNDAAALcElEQVR4nO2d6ZaiOBSAJYFAWFTEDQHFXXss3//xBq2ly4XcG8QAffh+zZk+lcqthLsn6XRaWlpaWlpaWlpaWv4dBpPZfBOsovGyd47jpLcch6tgc/CnVU+sDPxDsNUYNTzGuoQQh2c42X+YjHnUJuewf5hUPcfCDGZ/lpkUjHAtF64z2zLH/dOg6tlKM0kTajCSL9tvSLaeSXCqes4SzILEZYKVe7qajDrhsOqZo/BXliEr3he6Z6xqv5Lrs2UWku4L0yCjGqueSWDbxVbvN939tqa71Y8o+zVRQvQMomcWQlZGQuN11dI84m9d/TI7nilGg7oW34UXomi8ix3LzRSrKTIbd3DPTOtlQKahRTTetakXR+l8Nlnc/ftiMtuMdhr1mI4Vknn9SkR5yiAwTNN249HBvxftlulpEzKKNZOM12WvbqhF+eqA9TL9dOd5KIXLvaQOxsOP/zv2Z3I/sxiuqO1gZLS2lduOYB8Um8N8i/J7yD4oecZy+NGh+A9P05giPkkW++VNWJbJq1to9mVjxFvVHZUy24rwxxa8jpUu4+v4kQvKyPc1Mo4F8HsGuIx2r14+jixrGzSQ+rFyu/ESg5UFmQ5u1TTkwOLHDBBRc9OqJ/kiIwsSkUZVz/FFhh6kVNm52fqms1h6gIj6seEidgJopzpHcYBWf+YuICLRmi7iyQDMhqM1vd4xcQB94zR+FRcxEG80X8RBAohIGq9ROzGwUbu7qmf4KgsNEJE13bvpTLuARvUaHfdfmEBpKmtT9RRfxYdMvyuZwqwfayqWkJuNV6grIGDUt1XP8GUSIC1uNzs9lTEF9uk/8CkOgVjqH/gUw65YRLaqeoYvA8X8Vh3Kby8Bmgyt6hm+zBLQp+w93pufKkvOTqHEjVt20WY6DJYepWHJw+bTB+y+k5T4yybr1aWdIgts+LHEYQE4FGWU1M8wS8fcss3v3+aqywatgcIUJy8bxWxjJvu7Vkp7XsbkcSTAIrKXKv3+Oowtz3z4HabC/oEh5LxZBRNTi1N/SynTn/4F+blcKYT0gEU0C1iM6XyUeAYT2CKm0COcQ54NldIKA38TcdeD8iRUpVsPqdMu2j3NdMrZpsLe8581TN8o0T2QTcQtor8Jj65nYnqxLugq03mgYwOp02zpekaeTsnDViPcJ5B3qtF8tfBpDgq0nlsqWyMONjAblpPQ2CR72aX7wVbZ/DmAJOROzk9uLHTP7j3mh0IJOxFU4ffynKzFGOxjyYGX6dODgCaR9HJ/duiAfSzPMVQW8QZ7aDquQC+MXKyJuMFT2qLUg+YodN38BPqQn8H+KBOvgzD6ubrmk7SAxiFLRcJdmUEBhmaI99R0C47wgKtIuCsDUFvoUGZlDjdA3kGVNu6CHyL8F0c0QN7ClNYoA3ABEKpvBuULbiHqEm4dhOMGb9MOQmHdoDLh1ulMYEWhw6Oc5bappbT9Cqp6Y6LygaQ+VZlw63Q08M+fF2D85QS3zN+gMuHW6YzBMwsOmB77I+mhqnW+R7A1E8TBn+yQBwPxI5YJQg16UDVROsgwVCbc1rDzDH2IE7BX/mHEVIlsnwxhCSFXGYwyH0ccqxHuyhAxPSYeAvaLHkDY2NKYITQ9kB4DU3bSI5aKj5DQFh/4LBDpq0y4+Qh/RGyhp9KfYTaiwn4WjIRE2DuMGeEelc43ZpdqRDSCvCrNMNQ53xhNo3mi+WyKZBVtdQk3hD0E8g4fRS6Wea2GLgVqj3kiZQr77k9QmHBbY/aY0MuSDH+/oKoExCUghMq9WP1CXcJtBXRiXhH6kdJ+9xV1Cbct6qoQQRA8gPMgzyDKqt24C18E3ZhgrVx+yFJBroBALyCydd/c/DWpIucb6XK5goI+WkIW0F91nNzi6ys8GRNlLIQZTpRTdIEnnUX0twDQfUeT7oY95EcQiagLgi2FlvCaDBmS7z/pWxJuE9cK77YbsuIgsF7oZOlX1PtTOd6/I+FGNPM2ml0gp2cIJESGFj/K87tyDKbwinAxfnT765vCZGmuEuan/7C79Fe9PL1e8wTn0gtwddF0K/35H8jPsAwJf1fprpVj5x1HyL52lJd8bzq4avE1vfwdhZbwpslkzkygRaAY390lztctWOhcrmANkfbw3vEbhJaok6UwP6qT6ZdNk2LDc4GESJ/m0fzN3uJ8//3uuBUt8KGdQEKkX/osf/gWr+aX7tRpgM6wCOwh1rNVFA/ebil8gkWUo8ZJKPBsywWrPO8lFCTbcCMqq1RExfpCRSuA+pjfYvyeUii5mWkawZCoXBu+7/9ViqTggYB8hfmc3+KiPaeYhPmNtMhsHVNXbFoWyd8KD0nAbVXamyL65+Bt4C+EfbQox7RudYp7hP7VFCOhwu4L1HzuEe8xTMZVZU/psYDNF88P0zCkUkJUGv8OYf0Q1YuhUkJEi9AD4lgVM6Ig0VM68h1MmiMu9mFGVNrnJe+ZdoGCLcIAvSWxlod8zRYy1wgvQqE9lEhd/AB1MCH6S5WeyUOn4X8wgRERWVel3YiyXdlwVwFixLfUYXKROx2B6Qw5g26N0gPO6ET3N7AehAMoHquQ7BvZNi24Kxs+IKb2OJdk5d0Rhb9fwDZW6RFuSecbowZDUESFIXAHccD5Bp7AHhe88SG/qFwkE27cva8cPwKmhbnS+22lE25dA3JJ4G2h9iI/+TYmYylueYXdGqXXtsgf48kcG1ec8QRHVJgx7cgfxbpix6JVGEGpA2HOtXSwDQp3c3RXgtYocOe/pbskD2yTyT1Mz7dqoLer9lylrPP9DbfGeRoHzNao67e8gKqmPJ+nm5cdBodUec1XoYSbdn1Kk+7jHBHBAAM4XFQuBRJu3LStY7TJzwouwIdQlF6IIbWG2dIZNBnNgXMuYNyp9JT6GHvgLFs697J0iG8IvjtMpdFHJdx0ZthJAC3dX0JgETl/p0h3QFH55atzonQmpf7ARVQZJIqubXGY5yWjQ4GgHDJCgmunyud5jwjXGbW2/VPRiz2hRaQKU9+PJbHLxoxDgTnAjAp83ipTbvMbe5GZg72MTsljAF3EV9b1xAim37EA79oWH0vqlFw2QNSi8i70S8KNMI9qq3WZiT7obQmFd5mFlHrLYFi2mwHGieocm2H6nsLzB/QGilLv9C040E3CdXnbvTDQAyGa0fwHQgDPxmz8y2CDx6vYb2n6A72ZWw/pU7mbwutIHwiw4cu1as8WqLY1/60e8FNsvskAP8XSn3lRzhoQkbNmP+qeEUCPoHQbr1BDwEFt/iPLnR70PK/SHpt3MDgCZVM9abqHutCAcFiP/3kRCWm6Rp1CLxBzo+nP9IGPLGuuyprbO1hA6kazmv7K8uAI9bzZu4YbxsEZqnORxofEEdhl1vidmoLNNixueKwxBB8X4JagHakJTEB9o5lKz2SUz6AHN0cYvWZv1T97sBGLuONGy+jHcHuEbu0a/Sr4yIX76Rxr+6qMkwo3AmYZNULjzQteznxc7S4I9oj+ZM5oVMzNmYzcylOxky3q4R1ieKOTpIWc9eP/jnX4jIdHD9XeahrmEl3GnR4ik1pAM7o61jqy0dxhlIWbkzjvuPDXH5prE9MK6uMWDQIP3UyvX9opdqN06N8LupjM5mkUe/TyKrZuRfVKwA76uo1vxebEzOS0XCfejaMoDMPxNuGWSw3v6wFb3d3WMOOzTqj0uQ/uEJ3oOnFuugUYDWvqC522+wI3PNxBPDuo1/68YTIiRuGu+gumtVN6yqEIpw9qQOXG5/AuNUY13Z53nFYOlX1amDPrOKqDecdyChKaKUaccDoz6DmtofIEWJz6Y9OyhU8pZ8LZrlZaK2UVTA798Ey8bD2ZSYjDLziEkC5jNvW6ySoFPJyGMPUPm2AVjntxxrm3HEerYDN/cGpaWlpaWlpaWlpaWhrN//YOsQ8T+zASAAAAAElFTkSuQmCC" height={200} width={200} priority/>
      </Link>
      </div>
      </div>
      


    </div>
  )
}

export default Home
