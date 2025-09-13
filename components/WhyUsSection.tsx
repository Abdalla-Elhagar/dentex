import React from "react";
import Image from "next/image";
import whyUsImage from "@/public/images/whyUs.jpg";

export default function WhyUsSection() {
  return (
    <section className="bg-white py-6">
      <div className="w-full mx-auto">
        {/* العنوان */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003570]">
            لماذا نحن
          </h2>
          <div className="mx-auto mt-2 w-28 h-1 rounded-full bg-gradient-to-r from-blue-900 to-sky-400"></div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative w-full h-96 md:h-auto">
            <Image
              src={whyUsImage}
              alt="Clinic"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-blue-600 text-xl text-white p-6 md:p-12 flex flex-col justify-center">
            <p className="mb-2 leading-relaxed">
              نحن نجهز العيادة لك في لحظة
              <br />
              تتمتع معنا دنت بخبرة كبيرة في تقديم المشورة والدعم المهني في فتح
              عيادة أو توسيع عيادة موجودة.
            </p>
            <p className="mb-2 leading-relaxed">
              بعد اجتماع للتعرف عليك وفهم احتياجاتك، يقوم فريق المبيعات الماهر
              لدينا (المساعدون وأطباء الأسنان المحترفون) بإعداد عرض أسعار لك يضم
              جميع المعدات / الملحقات / المواد اللازمة لإعداد العيادة وبدء
              تشغيلها.
            </p>
            <p className="mb-2 leading-relaxed">
              عرض السعر خاص ولمرة واحدة لافتتاح العيادة.
              <br />
              سيرافقك وكيل دائم طوال العملية وبالطبع سيبقى بجانبك أثناء العمل
              اليومي والتأكد من تقديم أفضل خدمة لك بشكل احترافي وخبرة كبيرة.
            </p>

            <button className="mt-2 text-2xl inline-block w-52 bg-white text-black font-medium px-2 py-3 rounded-md shadow hover:bg-gray-100 transition">
              اضغط هنا للمزيد
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
