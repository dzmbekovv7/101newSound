import { Container } from './container';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-[60%] right-10 w-16 h-16 bg-purple-400 opacity-10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-0 right-1/3 w-1 h-32 bg-gradient-to-b from-indigo-400 to-transparent rotate-45 opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-12 h-12 border-2 border-violet-500 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute top-[40%] left-[20%] w-20 h-20 border-2 border-pink-500 rounded-full animate-spin-slow-reverse opacity-10"></div>
      </div>

      <Container>
        <div className="py-24 space-y-20">
          {/* LOGO + TEXT */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-extrabold tracking-tight">
              <span className="text-white">101</span>
			                <span className="text-white">new</span>

              <span className="text-purple-400">Sound</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Music is not just heard — it's felt. At <span className="text-purple-400 font-semibold">101Sound</span>, we capture emotion, memory, and rhythm in every beat. Join the vibe, live the sound.
            </p>
          </div>

          {/* 2 FORMS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT BOX */}
            <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 p-8 rounded-3xl border border-purple-600 shadow-xl transform -rotate-2 hover:rotate-0 transition duration-300">
              <h3 className="text-3xl font-bold mb-4 text-white">Why 101Sound?</h3>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>🎵 Handcrafted playlists for every mood</li>
                <li>📀 Dive deep into exclusive artist stories</li>
                <li>🎧 Weekly podcasts exploring the heart of music</li>
              </ul>
            </div>

            {/* RIGHT BOX */}
            <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 p-8 rounded-3xl border border-pink-600 shadow-xl transform rotate-3 hover:rotate-0 transition duration-300">
              <h3 className="text-3xl font-bold mb-4 text-white">Join the Wave</h3>
              <p className="text-gray-300 mb-6 text-lg">Subscribe for fresh beats, secret drops, and pure inspiration.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-lg bg-gray-800/60 border border-pink-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
     
        </div>
      </Container>
    </footer>
  );
}
