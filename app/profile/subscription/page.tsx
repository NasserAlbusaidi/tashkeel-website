import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineAlternateEmail, MdPassword } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { RxCaretLeft } from "react-icons/rx";

const Subscription  = () => {
  return (
    <div className="bg-[#f3f2ee] h-screen">
      <div className=" py-4 px-2">
        <span className="text-[#615b51]  font-medium">
          <AiOutlineArrowRight className="inline-block " size={30} />
          <span className="inline-block mr-2 text-[20px]">الإشتراك</span>
        </span>
      </div>
      
      {/* profile info list */}
      <div className=" container  mx-auto py-4 px-[13px]  ">
        <div className="flex flex-col justify-center items-center  mt-[35px] border border-[#e0dcce] rounded-lg bg-white">
          <div className="text-[#ba9050] h-[115px]  text-[18px] mx-[100px] pt-[27px] pb-[10px]  "
          >
            <div>
            <Image src="/images/crown-fill.svg" width={28} height={28} className="inline-block mx-[10px] " alt={'yo'} />
            إشتراك سنوي
            </div>
            <p className="text-[#615b51] text-[22px] text-center pt-[10px] font-bold">
          22 / 01 / 2024
          </p>
          </div>
          
          
        </div>
        <div className=" container flex justify-start mt-[40px] mx-[5px]">
            <p className="text-[#615b51] text-[16px] text-center pt-[10px] font-bold">
                طريقة الدفع
            </p>
        </div>
        <div className="flex flex-col justify-start items-right  mt-[14px] border border-[#e0dcce] rounded-lg bg-white relative">
          <div className="text-[#615b51] h-[80px]  text-[18px] mx-[25px]   "
          >
            <div>
            <Image src="/images/PayPal.png" width={20} height={24} className="inline-block mx-[10px] " alt={'yo'} />
            <p className="inline-block mt-[15px] mx-[25px] ">Paypal</p>
            <p className=" mt-p[15px] mx-[60px] pb-[13pxs] ">..nasserbusaidi@gm</p>
            <Link className="flex justify-end mr-[15px] absolute left-0 top-5  " href={''}>
          <RxCaretLeft className="inline-block " size={40} />
          </Link>
            </div>
            
          </div>
            
          
        </div>
        <div className="flex flex-col justify-start items-right  mt-[10px] border border-[#e0dcce] rounded-lg bg-white relative">
          <div className="text-[#615b51] h-[60px]  text-[18px] mr-[12px]    "
          >
            <div>
            <Image src="/images/Visa.png" width={60} height={28} className="inline-block mx-[10px] " alt={'yo'} />
            <p className="inline-block mt-[15px] mx-[5px] ">بطاقة الدفع</p>
            <Link className="flex justify-end mr-[15px] absolute left-0 top-3  " href={''}>
          <RxCaretLeft className="inline-block " size={40} />
          </Link>
            </div>
           
          </div>
          
          
        </div>

      </div>
    </div>
  );
};

export default Subscription;
