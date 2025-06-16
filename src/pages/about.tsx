import { Container } from '../components/shared/container'

export function AboutPage() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Dynamic floating particles */}
			<div className='fixed inset-0 pointer-events-none overflow-hidden'>
				<div className='absolute top-20 left-1/4 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			<Container className='relative  py-12 lg:py-20'>
				{/* Hero Introduction Section */}
			<section className="mb-24 lg:mb-40 bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-800 text-white rounded-3xl shadow-xl overflow-hidden relative px-6 lg:px-20 py-16">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

    {/* Левый блок — главный текст */}
    <div className="lg:w-1/2 space-y-8">
      <h2 className="text-6xl font-extrabold leading-tight drop-shadow-lg max-w-xl animate-fadeInLeft">
        Music is the <span className="text-pink-400">Language</span> of the Soul
      </h2>
      <p className="text-lg text-indigo-200 max-w-md font-light leading-relaxed animate-fadeInLeft delay-200">
        Dive into the rhythm and explore the stories behind every beat.  
        From classical harmonies to modern grooves, we bring you closer to the heart of music.
      </p>
      <p className="text-indigo-300 max-w-md font-light leading-relaxed animate-fadeInLeft delay-400">
        Join us on a journey where sound transcends words and emotions become melodies.
      </p>
      {/* Кнопка для действия — можно убрать если не нужно */}
      <button className="mt-6 px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-full font-semibold tracking-wide shadow-lg transition transform hover:scale-105 animate-fadeInLeft delay-600">
        Discover More
      </button>
    </div>

    {/* Правый блок — фото и доп. текст */}
    <div className="lg:w-1/2 relative group">
      {/* Крупное изображение с анимацией */}
      <div className="rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-105 border-4 border-pink-500">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
          alt="Music Vibes"
          className="w-full h-auto object-cover"
          draggable={false}
        />
      </div>

      {/* Полупрозрачный блок с цитатой справа снизу */}
      <blockquote className="absolute bottom-8 right-6 bg-indigo-900/70 backdrop-blur-sm rounded-xl p-6 max-w-sm text-sm italic text-pink-300 shadow-lg animate-fadeInUp delay-700">
        "Where words fail, music speaks." — Hans Christian Andersen
      </blockquote>

      {/* Абстрактные блески и анимированные точки */}
      <div className="absolute top-6 left-4 w-4 h-4 bg-pink-400 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-16 left-10 w-3 h-3 bg-indigo-400 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-16 right-16 w-5 h-5 bg-pink-300 rounded-full opacity-60 animate-ping"></div>
    </div>
  </div>

  {/* Анимация появления */}
  <style>{`
    @keyframes fadeInLeft {
      0% { opacity: 0; transform: translateX(-30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeInLeft {
      animation: fadeInLeft 0.8s ease forwards;
    }
    .animate-fadeInLeft.delay-200 {
      animation-delay: 0.2s;
    }
    .animate-fadeInLeft.delay-400 {
      animation-delay: 0.4s;
    }
    .animate-fadeInLeft.delay-600 {
      animation-delay: 0.6s;
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease forwards;
    }
    .animate-fadeInUp.delay-700 {
      animation-delay: 0.7s;
    }
  `}</style>
</section>
<section className="bg-white py-24 px-8 lg:px-24">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
      Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Music</span> Moves Us
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Music isn’t just sound — it’s a universal language that inspires emotion, fuels creativity, and brings people together.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* Card 1 */}
    <div className="group relative bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]">
      <div className="mb-4">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white text-2xl shadow-lg">
          🎧
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Emotional Power</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Music taps into our emotions, helping us process feelings and connect with memories.
      </p>
    </div>

    {/* Card 2 */}
    <div className="group relative bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]">
      <div className="mb-4">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 text-white text-2xl shadow-lg">
          🧠
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Brain Boost</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Listening to or playing music activates multiple brain regions, improving memory and focus.
      </p>
    </div>

    {/* Card 3 */}
    <div className="group relative bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]">
      <div className="mb-4">
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-2xl shadow-lg">
          🌍
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Connection</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        From street beats to symphonies, music unites cultures and breaks down boundaries worldwide.
      </p>
    </div>
  </div>
</section>


				{/* Mission Section with Geometric Design */}
	<section className="mb-20 lg:mb-32 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 text-white py-16 px-8 rounded-3xl shadow-2xl max-w-7xl mx-auto relative overflow-hidden">
  {/* Фоновые мягкие круги и световые эффекты */}
  <div
    aria-hidden="true"
    className="hidden lg:block absolute top-[-140px] left-[-140px] w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 opacity-30 blur-3xl animate-blob"
  />
  <div
    aria-hidden="true"
    className="hidden lg:block absolute bottom-[-160px] right-[-140px] w-80 h-80 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 opacity-25 blur-2xl animate-blob animation-delay-2000"
  />

  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
    {/* Левая колонка — текст */}
	  <div className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl">
      <img
        src="https://cdn.prod.website-files.com/673613aae2ea8c20504cbf6e/682f3449c7de1f19b5562ca0_concert-anthony-delanoix.jpg"
        alt="Музыкант играет на гитаре в лучах света"
        className="w-full object-cover h-[400px] lg:h-[500px] brightness-90"
        loading="lazy"
      />
      <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-6 max-w-sm shadow-xl border border-white border-opacity-30">
        <h3 className="text-xl font-bold text-indigo-900 mb-2">101newSound</h3>
        <p className="text-indigo-800 text-sm leading-snug">
          Discover new sounds, explore fresh beats, and connect with the rhythm that defines a generation. Let music be your guide on this endless journey.
        </p>
      </div>
    </div>
    <div className="lg:w-1/2">
      <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 tracking-wide">
        <span className="block">Feel the </span>
        <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
          Power of Music
        </span>
      </h2>
      <p className="text-lg font-light mb-8 max-w-xl leading-relaxed opacity-90">
        Music is more than sound — it’s emotion, connection, and energy. Dive deep into rhythms that inspire, beats that move your soul, and melodies that change your life.
      </p>
      <div className="flex gap-6 flex-wrap max-w-md">
        {[
          { label: "Inspiring", color: "bg-yellow-400 text-indigo-900" },
          { label: "Universal", color: "bg-pink-500 text-white" },
          { label: "Transformative", color: "bg-purple-600 text-white" },
          { label: "Passionate", color: "bg-red-400 text-white" },
        ].map(({ label, color }) => (
          <span
            key={label}
            className={`px-5 py-2 rounded-full font-semibold shadow-lg ${color} hover:scale-110 transition-transform cursor-default select-none`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>

    {/* Правая колонка — изображение и текст поверх */}
  
  </div>
</section>
		
				{/* Team Section with Geometric Cards */}
		<section className="bg-white py-20 px-10 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start gap-16">
  {/* Левый блок с текстом */}
  <div className="lg:w-1/3 max-w-md text-left">
    <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
      Meet Our
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        Music Team
      </span>
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-8">
      Our talented group of musicians, producers, and sound engineers brings passion and expertise to create unforgettable music experiences.
    </p>
    <div className="w-32 h-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
  </div>

  {/* Правый блок — команда 4 человека в 2 колонки */}
  <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">

    {[{
      name: "Lena Williams",
      role: "Lead Vocalist",
      desc: "Powerful singer with a soulful voice, delivering emotion and energy in every performance.",
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
      accentFrom: "from-purple-600",
      accentTo: "to-pink-500",
    },{
      name: "Marcus Lee",
      role: "Music Producer",
      desc: "Crafts unique sounds and arrangements, blending genres to create fresh music vibes.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
      accentFrom: "from-green-400",
      accentTo: "to-teal-500",
    },{
      name: "Sophie Chen",
      role: "Sound Engineer",
      desc: "Expert in mixing and mastering to ensure every track sounds crisp and perfect.",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
      accentFrom: "from-pink-500",
      accentTo: "to-rose-500",
    },{
      name: "David Kim",
      role: "Guitarist",
      desc: "Versatile musician adding depth and emotion with his masterful guitar skills.",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
      accentFrom: "from-blue-500",
      accentTo: "to-indigo-600",
    }].map(({name, role, desc, img, accentFrom, accentTo}, i) => (
      <div key={i} className="relative bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
        {/* Акцентная полоска сверху */}
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo}`}></div>

        {/* Аватар */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg mb-5">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Имя */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-1">{name}</h3>

        {/* Роль */}
        <p className={`mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r ${accentFrom} ${accentTo}`}>
          {role}
        </p>

        {/* Описание */}
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>

        {/* Номер участника */}
        <div className="absolute top-4 left-4 bg-gray-900 text-white rounded-full w-9 h-9 flex items-center justify-center font-mono font-bold text-lg select-none">
          {i + 1 < 10 ? `0${i + 1}` : i + 1}
        </div>
      </div>
    ))}
  </div>
</section>


				{/* Bottom decorative elements */}
				<div className='flex justify-center space-x-8'>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
					<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
				</div>
			</Container>
		</div>
	)
}

// Add styles to head if not already present
if (typeof document !== 'undefined' && !document.getElementById('about-page-styles')) {
	const style = document.createElement('style')
	style.id = 'about-page-styles'
	style.textContent = `
		/* Custom animation for slow spin */
		@keyframes spin-slow {
			from { 
				transform: rotate(0deg); 
			}
			to { 
				transform: rotate(360deg); 
			}
		}

		.animate-spin-slow {
			animation: spin-slow 20s linear infinite;
		}

		/* Responsive adjustments for clip-path */
		@media (max-width: 768px) {
			[style*="clip-path"] {
				clip-path: none !important;
			}
		}

		/* Ensure proper spacing on mobile */
		@media (max-width: 640px) {
			.transform.skew-x-12,
			.transform.-skew-x-12 {
				transform: none !important;
			}
		}
	`
	document.head.appendChild(style)
}