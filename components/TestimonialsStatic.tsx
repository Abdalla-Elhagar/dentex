// components/TestimonialsStatic.jsx
import Image from "next/image";

import image1 from "@/public/images/TestimonialsStaticImage.png";
import image2 from "@/public/images/TestimonialsStaticImage2.png";

export default function TestimonialsStatic() {
  return (
    <section className=" py-6 bg-white">
      <div className="mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#003570]">
            قالو عنا
          </h3>
          <div className="mx-auto mt-2 w-28 h-1 rounded-full bg-gradient-to-r from-blue-900 to-sky-400"></div>
        </div>

        {/* Main area */}
        <div className="grid grid-cols-1 w-full h-[600px] pt-14 md:grid-cols-2 overflow-hidden gap-40 items-center bg-gradient-to-r from-[#0b1220] via-[#2b2f36] to-[#1b2230]">
          {/* Big image (right) */}
          <div className="relative flex justify-center md:justify-end">
            {/* Image container */}
            <div className="relative w-[300px] h-[460px] md:w-[400px] md:h-[560px] bg-[#D9D9D9] rounded-t-full border border-white/10">
              <Image
                src={image1}
                alt="صورة توضيحية"
                fill
                className="object-cover"
              />
              {/* subtle outline */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-pink-300/40 to-transparent opacity-40" />
            </div>
          </div>
          {/* Card (left) */}
          <div className="flex justify-center flex-col md:justify-start">
            <div className="relative bg-white rounded-[40px] shadow-2xl p-8 w-full max-w-[700px] text-right">
              {/* Avatar */}
              <div className="absolute -right-8 -top-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow">
                  <Image
                    src={image2}
                    alt="فاطمة النجاح"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name & role */}
              <div className="pr-6">
                <h4 className="text-xl font-bold text-gray-900">
                  فاطمة النجاح
                </h4>
                <p className="text-sm text-gray-500 mb-4">زبون</p>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  هذا النص هو مثال للنص يمكن أن يستبدل في نفس المساحة. لقد تم
                  توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى لإضافة إلى زيادة عدد الحروف.
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                aria-label="السابق"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition cursor-default"
              >
                {/* right arrow icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-3">
                <span className="w-3 h-1 rounded-full bg-white/30"></span>
                <span className="w-3 h-1 rounded-full scale-110 bg-white"></span>
                <span className="w-3 h-1 rounded-full bg-white/30"></span>
              </div>

              <button
                aria-label="التالي"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition cursor-default"
              >
                {/* left arrow icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation (decoration only) */}
      </div>
    </section>
  );
}
