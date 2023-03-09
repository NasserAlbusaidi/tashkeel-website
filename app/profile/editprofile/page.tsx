
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from "next/link";
export default function EditProfile() {
    return (
        <div className='bg-[#ebe8df] relative min-h-screen'>
              <Link className=" py-4 px-2" href={'/profile'}>
        <span className="text-[#615b51]  font-medium">
          <AiOutlineArrowRight className="inline-block " size={30} />
          <span className="inline-block mr-2 text-[20px]">
            تغيير البريد الالكتروني
          </span>
        </span>
      </Link>
        <div className="container mx-auto py-4 px-[13px]  ">
            <input type="text" className="w-full h-[50px] border border-[#e0dcce] rounded-lg bg-white text-[#615b51] text-[18px] px-[20px] mt-[35px]" placeholder="البريد الالكتروني الحالي" />

        </div>
        {/* bottom of the page button */}
        <div className="container mx-auto py-4 px-[13px] absolute bottom-0 ">
            <button className=" text-white w-full text-[18px] py-[10px] px-[20px] rounded-lg mt-[20px] border border-[#e0dcce] bg-[#170f03]">
            حفظ التعديل
            </button>
        </div>
        </div>
    );
}