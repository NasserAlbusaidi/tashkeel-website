export default function Footer() {
  return (
    <div className="bg-[#ebe8df] w-full h-[250px]">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-12">
          <div className="col-span-3 col-start-3">
            <h3 className=" pt-[76px]">
              تواصل معنا
            </h3>
          </div>
          <div className="col-span-3 col-start-6">
            <div className="flex flex-col gap-1">
              <ul className= "text-[16px] font-medium text-gray-600 dark:text-gray-400 text-[#615b51]">
                <li className=" pt-[64px]">
                  عن المنصة
                </li>
                <li className=" py-2">
                  تواصل معنا
                </li>
                <li className=" py-2">
                  مقالات
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 col-start-9">
            <div className="flex flex-col gap-1">
              <ul className= "text-[16px] font-medium text-gray-600 dark:text-gray-400 text-[#615b51]">
                <li className=" pt-[64px]">
                  سياسة الخصوصية
                </li>
                <li className=" py-2">
                  اتفاقية الاستخدام
                </li>
                <li className=" py-2">
                  سياسة الاستخدام
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 col-start-12">
            <h3 className=" pt-[110px]">
              تواصل معنا
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
