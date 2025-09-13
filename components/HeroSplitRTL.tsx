"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSplitRTL() {
  const [agree, setAgree] = useState(false);
  return (
    <section
      dir="ltr"
      className="w-full flex items-center justify-center bg-white"
    >
      <div className="w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">
          {/* LEFT: Image + Form (overlayed) */}
          <div className="relative bg-gray-800">
            <div className="relative h-[680px] sm:h-[560px] md:h-[640px]">
              {/* background image (uses next/image for optimization) */}
              <Image
                src="/images/office-hero.jpg"
                alt="خلفية مكتب"
                fill
                className="object-cover"
                priority
              />

              {/* dark overlay: مغمّقة قليلاً */}
              <div className="absolute inset-0 bg-black/45 z-10" />

              {/* content on top of overlay */}
              <div
                dir="rtl"
                className="absolute inset-0 z-20 flex flex-col justify-center items-start px-8 md:px-16"
              >
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-xl drop-shadow-sm">
                  اشترك في النشرة الإخبارية لدينا وابقى على اطلاع دائم!
                </h2>

                <form className="mt-8 w-full max-w-3xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="sr-only">الاسم كامل</label>
                    <input
                      placeholder="الاسم كامل"
                      className="w-full py-4 px-5 rounded-full bg-white/95 placeholder-gray-700 text-gray-900 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <label className="sr-only">البريد الالكتروني</label>
                    <input
                      type="email"
                      placeholder="البريد الالكتروني"
                      className="w-full py-4 px-5 rounded-full bg-white/95 placeholder-gray-700 text-gray-900 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="mt-6 flex md:flex-col flex-row sm:items-center sm:gap-4 gap-3">
                    <button
                      type="button"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
                    >
                      اضغط للتسجيل
                    </button>

                    <label className="flex items-center gap-2 text-sm text-white/90 leading-tight cursor-pointer">
                      <span
                        className={`w-5 h-5 flex items-center justify-center rounded border transition-colors duration-200 ${
                          agree
                            ? "bg-blue-600 border-blue-600"
                            : "bg-white/90 border-gray-300"
                        }`}
                        onClick={() => setAgree(!agree)}
                      >
                        {agree && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="white"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 5.29a1 1 0 00-1.408-1.42l-6.59 6.55-2.59-2.58a1 1 0 00-1.42 1.41l3.3 3.29a1 1 0 001.41 0l7.3-7.25z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>
                      <span>
                        أُرغب في تلقي معلومات وإعلانات حول الخصومات والمنتجات
                        الجديدة وأوافق على شروط الاستخدام
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT: Blue information panel */}
          <div
            dir="rtl"
            className="bg-gradient-to-tr from-blue-500 to-[#0077ff] p-8 md:p-12 flex items-center"
          >
            <div className="text-white max-w-xl">
              <h3 className="text-4xl md:text-4xl font-extrabold mb-4">
                نحن نجَهز العيادة لك في لحظة
              </h3>

              <p className="text-2xl mb-3 leading-relaxed text-white/90">
                بعد اجتماع للتعرف عليك وفهم احتياجاتك، يقوم فريق المبيعات الماهر
                لدينا (المساعدون وأطباء الأسنان المحترفون) بإعداد عرض أسعار لك
                يتضمن جميع المعدات / الملحقات / المواد اللازمة لإعداد العيادة
                وبدء تشغيلها.
              </p>

              <p className="text-2xl mb-6 leading-relaxed text-white/90">
                عرض السعر خاص ولفرة واحدة لافتتاح العيادة. سيرافقك وكيل دائم
                طوال العملية والاطلاع على سير العمل اليومي، للتأكد من تقديم أفضل
                خدمة لك بشكل احترافي وخبرة كبيرة.
              </p>

              <div className="flex justify-start">
                <button className="bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold shadow hover:shadow-md transition">
                  اضغط هنا للمزيد
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
