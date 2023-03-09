import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineAlternateEmail, MdPassword } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import Link from "next/link";

const profile = () => {
  return (
    <div className="bg-[#f3f2ee] h-screen">
      <div className=" py-4 px-2">
        <span className="text-[#615b51]  font-medium">
          <AiOutlineArrowRight className="inline-block " size={30} />
          <span className="inline-block mr-2 text-[20px]">حسابي</span>
        </span>
      </div>
      {/* rounded profile photo */}
      <div className="flex justify-center pt-[32px]">
        <div className="w-[150px] h-[150px] rounded-full bg-[#ba9050]">
          <img
            src="https://images.unsplash.com/photo-1616161610003-8e1b5e1b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            className="rounded-full w-full h-full"
          />
        </div>
        {/* name at the bottom */}
      </div>
      <div className="flex flex-col justify-center items-center pt-[16px]">
        <div className="text-[#615b51] font-bold text-[20px]">محمد العربي</div>
        <div className="text-[#ba9050] text-[14px] pt-[4px]">اشتراك مدفوع</div>
      </div>

      {/* profile info list */}
      <div className=" container  mx-auto py-4 px-[13px]  ">
        <div className="flex flex-col justify-center items-right  mt-[35px] border border-[#e0dcce] rounded-lg bg-white">
          <Link className="text-[#615b51] h-[50px]  text-[18px] border border-[#e0dcce]  inline-block border-t-0 border-l-0  "
          href={'/profile/editprofile'}
          >
            <MdOutlineAlternateEmail
              className="inline-block text-[#aba590] mx-[18px] my-[21px] "
              size={20}
            />
            البريد الالكتروني
          </Link>
          <Link className="text-[#615b51] h-[50px] text-[18px] border border-[#e0dcce] border-t-0 border-l-0" href={'/profile/editpassword'} >
            <MdPassword
              className="inline-block text-[#aba590]  mx-[18px] my-[21px] "
              size={20}
            />
            كلمة المرور
          </Link>
          <Link className="text-[#615b51] h-[50px] text-[18px] border rounded-lg border-[#e0dcce] border-y-0 border-l-0"
          href={'/profile/subscription'}
          >
            <AiFillCreditCard
              className="inline-block text-[#aba590]  mx-[18px] my-[21px] "
              size={20}
            />
            الإشتراك
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <button className=" text-[#615b51] w-full text-[18px] py-[10px] px-[20px] rounded-lg mt-[20px] border border-[#e0dcce]">
            تسجيل الخروج
          </button>
        </div>
        <div className="flex justify-center items-center mt-[220px] ">
          <span className="text-[#615b51] text-[14px] inline-block ">
            <Link href="/terms" className="mx-2">سياسة الخصوصية</Link>
            .
            <Link href="/terms" className="mx-2">شروط الاستخدام</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default profile;
