export function AboutSection() {
	return (
		<section className="relative w-full bg-white overflow-hidden py-24">
			{/* Декоративные элементы */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-1/3 w-32 h-32 bg-violet-300 rounded-full blur-3xl opacity-40"></div>
				<div className="absolute bottom-10 right-1/4 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-30"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
				{/* Верхний заголовок */}
				<div className="mb-20">
					<h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
						Music is More Than Sound —
						<span className="block bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
							It’s a Lifestyle.
						</span>
					</h2>
					<p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto font-medium">
						Explore the rhythms, stories, and soul of the music universe. From underground beats to timeless classics — feel every note.
					</p>
				</div>

				{/* Картинки и центральный текст */}
				<div className="flex flex-col md:flex-row justify-center items-center gap-14">
					{/* Левая картинка */}
					<div className="md:w-1/3">
						<img
							src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
							alt="Music vibe"
							className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
						/>
					</div>

					{/* Текст в центре */}
					<div className="md:w-1/3 text-left">
						<h3 className="text-3xl font-bold text-violet-700 mb-5">
							The Pulse Behind Every Beat
						</h3>
						<p className="text-gray-700 leading-relaxed text-lg">
							This isn’t just a blog — it’s a sonic journey. A curated space where every word echoes the power of melody, rhythm, and cultural heartbeat.
						</p>
						<p className="mt-4 text-gray-600">
							Here, music tells stories, connects souls, and inspires minds. We don’t just write — we resonate.
						</p>
					</div>

					{/* Правая картинка */}
					<div className="md:w-1/3">
						<img
							src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
							alt="Studio moment"
							className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</div>

				{/* Нижняя часть — блок про блог */}
				<div className="mt-24 bg-gradient-to-r from-violet-600 to-pink-500 text-white px-10 py-14 rounded-3xl shadow-2xl">
					<h3 className="text-4xl font-extrabold mb-6 leading-tight">
						🎧 Welcome to the Soundtrack of a Generation
					</h3>
					<p className="text-xl max-w-3xl mx-auto font-light">
						Our blog is where emotions turn into lyrics, and passion becomes poetry. Dive into exclusive interviews, song breakdowns, and stories from the heart of the music world.
					</p>

					<a
						href="/blog"
						className="inline-block mt-10 px-8 py-4 bg-white text-violet-700 font-bold text-lg rounded-full hover:bg-gray-100 transition"
					>
						Read Our Stories
					</a>
				</div>
			</div>
		</section>
	);
}
