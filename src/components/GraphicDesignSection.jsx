import { useState } from "react";
import img1 from "/projects-img/intern/img1.jpg";
import img2 from "/projects-img/intern/img2.jpg";
import img3 from "/projects-img/intern/img3.jpg";
import img4 from "/projects-img/intern/img4.jpg";
import img5 from "/projects-img/intern/img5.jpg";
import img6 from "/projects-img/intern/img6.jpg";
import img7 from "/projects-img/intern/img7.jpg";
import img8 from "/projects-img/intern/img8.jpg";
import img9 from "/projects-img/intern/img9.jpg";
import img10 from "/projects-img/intern/img10.jpg";
import img11 from "/projects-img/intern/img11.jpg";
import img12 from "/projects-img/intern/img12.jpg";
import img13 from "/projects-img/intern/img13.jpg";
import img14 from "/projects-img/intern/img14.jpg";
import img15 from "/projects-img/intern/img15.jpg";
import img16 from "/projects-img/intern/img16.jpg";
import img17 from "/projects-img/intern/img17.jpg";
import img18 from "/projects-img/intern/img18.jpg";
import img19 from "/projects-img/intern/img19.jpg";
import img20 from "/projects-img/intern/img20.jpg";
import img21 from "/projects-img/intern/img21.jpg";
import img22 from "/projects-img/intern/img22.jpg";
import img23 from "/projects-img/intern/img23.jpg";
import img24 from "/projects-img/intern/img24.jpg";
import img25 from "/projects-img/intern/img25.jpg";
import img26 from "/projects-img/intern/img26.jpg";
import img27 from "/projects-img/intern/img27.jpg";
import img28 from "/projects-img/intern/img28.jpg";
import img29 from "/projects-img/intern/img29.jpg";
import img30 from "/projects-img/intern/img30.jpg";
import img31 from "/projects-img/intern/img31.jpg";

const base = import.meta.env.BASE_URL;

// Static array of images for grid
const graphicProjects = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
];

export default function GraphicDesignSection() {
  const [showMore, setShowMore] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === 0 ? graphicProjects.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === graphicProjects.length - 1 ? 0 : prev + 1
    );
  };

  if (showMore) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            More Internship & Freelance Projects
          </h2>
          <p className="mb-12">
            Here’s a static page showing more of my graphic design work.
          </p>

          {/* Grid of 20 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {graphicProjects.map((src, index) => (
              <div key={index} className="relative cursor-pointer">
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(index)}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowMore(false)}
            className="mt-12 px-6 py-3 bg-black text-white rounded-full shadow-lg"
          >
            Go Back
          </button>
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <div className="relative">
              <img
                src={graphicProjects[lightboxIndex]}
                alt="Enlarged project"
                className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Prev/Next Buttons */}
              <button
                onClick={showPrev}
                className="absolute left-[-50px] top-1/2 -translate-y-1/2 px-4 py-2 bg-black/70 text-white rounded-full shadow-lg"
              >
                &#10094;
              </button>
              <button
                onClick={showNext}
                className="absolute right-[-50px] top-1/2 -translate-y-1/2 px-4 py-2 bg-black/70 text-white rounded-full shadow-lg"
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Examples of graphic design work from my internship experience
        </h2>

        <div className="relative w-full flex justify-center">
          <img
            src={`${base}projects-img/seemorelogo.png`}
            alt="Project Not Yet Compiled"
            className="w-full h-auto rounded-lg shadow-lg block"
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
              maskRepeat: "no-repeat",
              maskSize: "cover",
            }}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-3 bg-black/70 text-white font-semibold rounded-full shadow-lg"
            >
              Want to See More?
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
