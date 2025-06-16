import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
  return (
    <>
      {/* Hero Section с анимированным текстом */}
      <section className="relative bg-gradient-to-tr from-purple-900 via-indigo-900 to-pink-800 py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-3 h-48 bg-gradient-to-b from-pink-500 to-transparent rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute top-1/4 right-1/3 w-48 h-3 bg-gradient-to-r from-indigo-600 to-transparent rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-28 left-1/4 w-5 h-56 bg-gradient-to-t from-purple-500 to-transparent rounded-full opacity-15 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/2 w-52 h-52 border-4 border-pink-500 rounded-full opacity-8 animate-spin-slow"></div>
          <svg
            className="absolute bottom-20 right-16 w-20 h-20 stroke-pink-400 opacity-25 animate-bounce"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-8 leading-tight
            animate-fade-slide-up
            bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent
            transition-all duration-1000 hover:from-pink-400 hover:via-purple-500 hover:to-indigo-500 cursor-default
          ">
            GET IN TOUCH
          </h1>
          <p className="max-w-lg mx-auto text-base md:text-lg font-light opacity-90 leading-relaxed
            animate-fade-slide-up delay-200
            text-white/90
          ">
            Feel the vibe, share your sound, and connect with the rhythm.
          </p>

          <p className="mt-4 max-w-md mx-auto text-sm italic opacity-70 animate-fade-slide-up delay-400 text-pink-300">
            “Music is the strongest form of magic.” – Marilyn Manson
          </p>

          <div className="mt-14 flex justify-center items-center space-x-10 animate-pulse delay-700">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 rounded-full shadow-lg"></div>
            <div className="w-6 h-6 bg-pink-500 rounded-full animate-pulse shadow-lg"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 rounded-full shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Основной блок с плавным появлением */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100 py-24 px-8 sm:px-16 lg:px-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Форма слева с легкой тенью и мягким свечением */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden
            animate-fade-slide-left"
          >
            <div className="absolute -top-14 -right-14 w-48 h-48 bg-pink-500 opacity-25 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-12 left-10 w-32 h-32 bg-indigo-500 opacity-20 rounded-full blur-xl animate-pulse"></div>
            <ContactForm />
          </div>

          {/* Текст справа с анимацией */}
          <div className="pl-6 sm:pl-12 animate-fade-slide-right">
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-8
              bg-gradient-to-r from-pink-500 to-indigo-700 bg-clip-text text-transparent
              animate-gradient-move"
            >
              Say Hello or Share Your Sound
            </h2>
            <p className="text-indigo-700 mb-6 leading-relaxed text-lg
              drop-shadow-md
              animate-fade-in"
            >
              Whether it’s a fresh beat, a collaboration idea, or feedback, your voice matters here. We’re ready to amplify it.
            </p>
            <p className="text-indigo-600 italic mb-12 max-w-md
              animate-fade-in delay-200"
            >
              “Music expresses that which cannot be said and on which it is impossible to be silent.” – Victor Hugo
            </p>

            <div className="flex space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full shadow-md animate-pulse"></div>
              <div className="w-24 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA с анимацией */}
      <section className="bg-indigo-900 py-16 text-center text-white">
        <h3 className="text-3xl font-extrabold mb-5
          animate-fade-slide-up
          bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent
        ">
          JOIN OUR <span className="text-pink-500">MUSIC FAMILY</span>
        </h3>
        <p className="max-w-lg mx-auto mb-10 opacity-80 text-lg animate-fade-in delay-200">
          Stay tuned for exclusive releases, interviews, and all things music. Subscribe and never miss a beat.
        </p>
        <div className="flex justify-center space-x-12 animate-pulse delay-500">
          <div className="w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 rounded-full shadow-lg"></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 rounded-full shadow-lg"></div>
        </div>
      </section>

      {/* Кастомные анимации */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeSlideLeft {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeSlideRight {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 1s ease forwards;
        }
        .animate-fade-slide-left {
          animation: fadeSlideLeft 1s ease forwards;
        }
        .animate-fade-slide-right {
          animation: fadeSlideRight 1s ease forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease forwards;
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 4s ease infinite;
        }
      `}</style>
    </>
  )
}
