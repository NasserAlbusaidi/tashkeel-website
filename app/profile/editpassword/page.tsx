
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from "next/link";
export default function EditPassword() {
    return (
        <div className='bg-[#ebe8df] relative min-h-screen'>
            <div className=" py-[18px] ">
              <Link className=" mt-[50px] px-[18px]" href={'/profile'}>
        <span className="text-[#615b51]  font-medium">
          <AiOutlineArrowRight className="inline-block " size={30} />
          <span className="inline-block mr-2 text-[20px]">
          تغيير كلمة المرور
          </span>
        </span>
      </Link>
      </div>
        <div className="container mx-auto py-[45px] px-[13px]  ">
            <label className="text-[#615b51] text-[18px] px-[10px] font-medium">كلمة المرور الحالية</label>
            <input type="text" className="w-full h-[50px] border border-[#e0dcce] rounded-lg bg-white text-[#615b51] text-[18px] px-[20px] mt-[12px] mb-[27px]"  />
            <label className="text-[#615b51] text-[18px] px-[10px] font-medium">كلمة المرور الجديدة</label>
            <input type="text" className="w-full h-[50px] border border-[#e0dcce] rounded-lg bg-white text-[#615b51] text-[18px] px-[20px] mt-[12px] mb-[18px] "  />
            <label className="text-[#615b51] text-[18px] px-[10px] font-medium mt-[18px]">تأكيد كلمة المرور الجديدة</label>
            <input type="text" className="w-full h-[50px] border border-[#e0dcce] rounded-lg bg-white text-[#615b51] text-[18px] px-[20px] mt-[12px]"  />
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