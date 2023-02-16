// a simple header made with tailwindcss nas Nextjs
//import logo from "../public/logo.svg";

import  logo  from "public/images/logo.png"
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="bg-white border border-[#e0dcce]">
    <nav className="container mx-auto  py-4 grid grid-cols-12  ">
    <div className="col-span-2 col-start-1  mr-8">
    <div className="flex ">
    <img src={logo.src} alt="Logo" className="h-[50px] w-[50px]" />
    <div>
        <h3 className=" text-xl mr-6 text-brown">تشكيل</h3>
    <p className="text-black mr-6">أحد خدمات منصة الخليل</p>
    </div>
   
    </div>
  </div>
  <div className="col-span-10 col-start-3 flex items-center justify-end">
    {!data && (
        <>
    <Link href="/">
    <button className="bg-brown text-white px-4 py-2 rounded-md mr-4 h-[46px] w-[110px]">إشترك</button>
    </Link>
    <Link href="/login">
    <button className="bg-white text-brown px-4 py-2 rounded-md mr-4 h-[46px] w-[110px] border border-bborder">دخول</button>
    </Link>
    </>
    )}
    {data && (
        <>
    <Link href="/profile">
    <button className="bg-brown text-white px-4 py-2 rounded-md mr-4 h-[46px] w-[110px]">حسابي</button>
    </Link>
    <p className="text-brown mr-4">مرحباً {data.user?.firstName}</p>
    </>
    )}
    
    {/* <Link href="/profile">
    <button className="bg-brown text-white px-4 py-2 rounded-md mr-4 h-[46px] w-[110px]">حسابي</button>
    </Link>
    <p className="text-brown mr-4">مرحباً {data.user.name}</p> */}


    {/* <Link href="/">
   <button className="bg-brown text-white px-4 py-2 rounded-md mr-4 h-[46px] w-[110px]">إشترك</button>
    </Link>
    <Link href="/login">
    <button className="bg-white text-brown px-4 py-2 rounded-md mr-4 h-[46px] w-[110px] border border-bborder">دخول</button>
    </Link> */}
  </div>
    

</nav>
</div>

  );
}
