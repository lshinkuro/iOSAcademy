import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Mastering Swift for iOS",
    date: "15 Maret 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_Ty7RzCeRaZwoVHcGWmjQhrZvUYFYGu3NQ&s",
  },
  {
    id: 2,
    title: "UIKit & SwiftUI in Practice",
    date: "22 Maret 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66ZRvGN_F7S00i30y7D1z6EwK1Qiu_hiehG_jguSt_-N5UEMQ-a9KTNHowssdffqtCgg&usqp=CAU",
  },
  {
    id: 3,
    title: "Advanced iOS Development",
    date: "29 Maret 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh-TESxyPBY4QrkfL2r7AWPdEhron2WO67tCaoM16bKT1sEK1LjfwATy1Q4E-DuM8kQE&usqp=CAU",
  },
  {
    id: 4,
    title: "Mastering Swift for iOS",
    date: "15 Maret 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSzgTO47awXbGKu1gZCadi_yHg8ndWjGbmgDX2wKF_8V2dXLugKp1Ve1cSTHVQ1zzQJA&usqp=CAU",
  },
  {
    id: 5,
    title: "Advanced iOS Development",
    date: "29 Maret 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh-TESxyPBY4QrkfL2r7AWPdEhron2WO67tCaoM16bKT1sEK1LjfwATy1Q4E-DuM8kQE&usqp=CAU",
  },
  {
    id: 6,
    title: "Mastering Swift for iOS",
    date: "15 Maret 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSzgTO47awXbGKu1gZCadi_yHg8ndWjGbmgDX2wKF_8V2dXLugKp1Ve1cSTHVQ1zzQJA&usqp=CAU",
  }
];

export default function EventSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 bg-white p-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Event di iOS Academy</h2>
        <div className="relative">
          <button
            onClick={() => scroll(-300)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <div ref={scrollRef} className="flex overflow-x-auto gap-6 scrollbar-hide px-10">
            {events.map((event) => (
              <div key={event.id} className="min-w-[250px] shadow-lg rounded-lg overflow-hidden bg-white">
                <img
                    src={event.image}
                    alt={event.title}
                    width={250}
                    height={300}
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.date}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(300)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Lihat Semua Event
          </button>
        </div>
      </div>
    </section>
  );
}
