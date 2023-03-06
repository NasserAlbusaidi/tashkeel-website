"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className=" mx-auto w-full mb-64">
        <div className="grid grid-cols-12 ">
          <div className=" col-span-12 bg-[#ebe8df] h-[459px]">
            <div className="col-span-12 col-start-1  text-center  py-[40px] h-[180px]">
              <img
                src="/images/path.svg"
                alt="Tashkeel"
                className="w-[157px] sm:w-[200px]  mx-auto"
              />
              <p className="text-[#615b51] text-[8px] sm:text-[18px]  mt-[20px] sm:mt-[30px]">
                خدمة لتشكيل النصوص والكلمات العربية
              </p>
            </div>
            <div className="col-span-4 col-start-7 text-center ml-[45%]">
              <button className="bg-white text-brown px-[25px] py-[8px] h-[35px] rounded-md">
                تشكيل نص
              </button>
              <button className="bg-white text-[#615b51] px-[25px] py-[8px] h-[35px] mr-[14px] rounded-md  ">
                رفع ملف
              </button>
            </div>
            <div className="text-center mr-auto relative">
              <textarea
                className="border-2 outline-none text-right rounded-lg border-[#e0dcce] px-6 py-4 pl-12 mt-10 w-full min-h-[250px] sm:py-10 sm:min-h-[400px] resize-none sm:w-[1120px] sm:px-10 sm:text-[22px] text-[18px]"
                placeholder="أدخل النص"
                maxLength={240}
                onChange={(e) => {
                  setCount(e.target.value.length);
                }}
                contentEditable="true"
              ></textarea>

              <span className="absolute bottom-2 left-[22%]">
                240/<span className="font-ibmplexb">{count}</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center mt-[20px] sm:mt-[30px]">
              <button
                className="  bg-[#8a8480] text-white px-[85px] py-[10px] rounded-md mr-[10px]  "
                onClick={() => {
                  setCount(0);
                }}
              >
                تشكيل
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-[140px]">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-4 col-end-10  ">
            <h3 className="text-bold text-[8px] sm:text-[40px]">
              عن خدمة التشكيل
            </h3>
            <p className="text-[#615b51] pt-4 text-[8px] sm:text-[18px]">
              تُستخدم اللغة العربية كلغة رسمية في أكثر من 20 بلداً في أنحاء
              العالم، فاللغة العربية لغة واسعة الانتشار، والكثير من الأشخاص في
              جميع أنحاء العالم يسعون لتعلّم اللغة العربية غير مبالين لصعوبة
              تعلمها، ولكن لأنهم يدركون أهمية هذه اللغة. تُستخدم اللغة العربية
              كلغة رسمية في أكثر من 20 بلداً في أنحاء العالم، فاللغة العربية لغة
              واسعة الانتشار، والكثير من الأشخاص في جميع أنحاء العالم يسعون
              لتعلّم اللغة العربية غير مبالين لصعوبة تعلمها، ولكن لأنهم يدركون
              أهمية هذه اللغة.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-[114px]">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3  ">
            <h3 className=" text-[8px] sm:text-[45px] flex justify-center pb-20">
              مميزات تشكيل
            </h3>
            <div className=" flex flex-row justify-center gap-36 ">
              <div className="max-w-sm rounded overflow-hidden text-center ">
                <img
                  className="w-full border"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className=" py-8">
                  <div className="font-bold text-xl ">تشكيل بدقة 98 بالمئة</div>
                  <p className="text-gray-700 text-[20px] py-4">
                    تعلم اللغة العربية من الخبراء في اللغة الناطقين بالعربية،
                    وانغمس في ثقافتها، وتعرف على قيمها وحضارتها.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden text-center ">
                <img
                  className="w-full border"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className=" py-8">
                  <div className="font-bold text-xl">تشكيل بدقة 98 بالمئة</div>
                  <p className="text-gray-700 text-[20px] py-4">
                    تعلم اللغة العربية من الخبراء في اللغة الناطقين بالعربية،
                    وانغمس في ثقافتها، وتعرف على قيمها وحضارتها.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden text-center ">
                <img
                  className="w-full border"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className=" py-8 items-center ">
                  <div className="font-bold text-xl ">تشكيل بدقة 98 بالمئة</div>
                  <p className="text-gray-700 text-[20px] py-4">
                    تعلم اللغة العربية من الخبراء في اللغة الناطقين بالعربية،
                    وانغمس في ثقافتها، وتعرف على قيمها وحضارتها.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-[114px]">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3  ">
            <h3 className=" text-[8px] sm:text-[45px] flex justify-center pb-20">
              خطة الإشتراك
            </h3>
            <div className=" flex flex-row justify-center gap-[30px] ">
            <div className="w-full max-w-[520px] h-[280px] px-[40px] py-[20px]  bg-white border border-gray-200 rounded-lg shadow ">
              <div className="flex justify-between ">
                <div className="justify-end">
                  <span className= "text-[40px] font-medium ">
                    سنوي
                  </span>
                </div>
                <div className="">
                  <span className="text-[40px] font-medium text-gray-600 dark:text-gray-400">
                    7.99
                  </span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex items-center">
                  <span className="text-[20px] font-medium text-gray-600 dark:text-gray-400">
                    دولار
                  </span>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="flex items-center">
                  <ul className= "text-[16px] font-medium text-gray-600 dark:text-gray-400 text-[#615b51] ">
                    <li className="flex items-center ">- تشكيل ملفات </li>
                    <li className="flex items-center">- تشكيل غير محدود</li>
                    <li className="flex items-center">- أرشيف النصوص المشكولة</li>
                    </ul>  
                  </div>                  
                  </div>
                  <button className="bg-brown hover:bg-blue-700 h-[50px] w-[140px] text-white font-bold my-[28px]  rounded">
                      اشترك 
                    </button>
            </div>

            <div className="w-full max-w-[520px] h-[280px] px-[40px] py-[20px] bg-white border border-[#ba9050] rounded-lg shadow ">
              <div className="flex justify-between ">
                <div className="justify-end">
                  <span className= "text-[40px] font-medium text-[#ba9050] ">
                  مدى الحياة
                  </span>
                </div>
                <div className="">
                  <span className="text-[40px] text-[#ba9050] font-medium text-gray-600 dark:text-gray-400">
                    59.99
                  </span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex items-center">
                  <span className="text-[20px] text-[#ba9050] font-medium text-gray-600 dark:text-gray-400">
                    دولار
                  </span>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="flex items-center">
                  <ul className= "text-[16px] font-medium text-gray-600 dark:text-gray-400 text-[#615b51]">
                    <li className="flex items-center ">- تشكيل ملفات </li>
                    <li className="flex items-center">- تشكيل غير محدود</li>
                    <li className="flex items-center">- أرشيف النصوص المشكولة</li>
                    </ul>  
                  </div>                  
                  </div>
                  <button className="bg-brown hover:bg-blue-70 h-[50px] w-[140px] text-white font-bold my-[28px]   rounded">
                      اشترك 
                    </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
