import { Container } from '../components/shared/container';

export const PrivacyPolicyPage = () => {
	return (
		<div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-900 text-white overflow-hidden">
			{/* Background Design Elements */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="absolute top-24 left-1/4 w-2 h-48 bg-gradient-to-b from-pink-500 to-transparent transform rotate-12 opacity-30 animate-pulse" />
				<div className="absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-indigo-400 to-transparent transform -rotate-45 opacity-40" />
				<div className="absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-blue-500 to-transparent transform rotate-45 opacity-35" />
				<div className="absolute top-1/2 right-1/6 w-24 h-24 border-2 border-fuchsia-300 transform rotate-45 opacity-20 animate-spin-slow" />
			</div>

			<Container className="relative z-10 py-20 lg:py-28">
				{/* Header */}
				<div className="flex flex-col lg:flex-row justify-between items-start gap-12">
					{/* Title and description */}
					<div>
						<h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
							101newSound
						</h1>
						<p className="mt-4 text-lg lg:text-xl text-purple-100 max-w-md leading-relaxed">
							This blog is all about music, its impact, stories, and sounds.
						</p>
					</div>

					{/* Privacy Policy Section */}
					<div className="text-right">
						<h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
						<p className="mt-2 text-sm text-purple-200 max-w-xs">
							We care about your data. Read how we handle and protect your information.
						</p>
					</div>
				</div>

				{/* Decorative Line */}
				<div className="mt-12 flex justify-center items-center space-x-4">
					<div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-600"></div>
					<div className="w-4 h-4 bg-pink-400 transform rotate-45"></div>
					<div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
				</div>

				{/* Page Content */}
			<div className="mt-20 max-w-4xl mx-auto space-y-10">
	{/* Point 1 */}
	<div className="relative border-l-4 border-purple-400 pl-6 py-6 bg-purple-950/40 rounded-tr-3xl rounded-bl-xl shadow-lg hover:scale-[1.02] transition-transform">
		<h4 className="text-2xl font-bold text-white mb-2">1. What Data We Collect</h4>
		<p className="text-purple-100 leading-relaxed">
			We only collect essential data such as browser type and visit duration. No sensitive personal data is stored without your permission.
		</p>
		<div className="absolute -top-3 -left-3 w-6 h-6 bg-fuchsia-500 rotate-45"></div>
	</div>

	{/* Point 2 */}
	<div className="relative border-r-4 border-fuchsia-400 pr-6 py-6 bg-purple-900/50 rounded-tl-xl rounded-br-3xl shadow-lg hover:scale-[1.02] transition-transform">
		<h4 className="text-2xl font-bold text-white mb-2 text-right">2. How We Use Your Data</h4>
		<p className="text-purple-100 leading-relaxed text-right">
			Data helps us improve your experience, like recommending music-related articles based on what you enjoy reading most.
		</p>
		<div className="absolute -bottom-3 -right-3 w-5 h-5 bg-pink-500 rotate-45"></div>
	</div>

	{/* Point 3 */}
	<div className="relative border-l-4 border-indigo-400 pl-6 py-6 bg-purple-950/50 rounded-tl-3xl rounded-br-xl shadow-md hover:scale-[1.02] transition-transform">
		<h4 className="text-2xl font-bold text-white mb-2">3. Your Rights</h4>
		<p className="text-purple-100 leading-relaxed">
			You can request to view, change, or delete your data at any time. Just contact our support team.
		</p>
		<div className="absolute -top-2 -left-2 w-4 h-4 bg-indigo-400 rotate-12"></div>
	</div>

	{/* Point 4 */}
	<div className="relative border-r-4 border-pink-500 pr-6 py-6 bg-purple-900/40 rounded-tr-xl rounded-bl-3xl shadow-xl hover:scale-[1.02] transition-transform">
		<h4 className="text-2xl font-bold text-white mb-2 text-right">4. Updates to This Policy</h4>
		<p className="text-purple-100 leading-relaxed text-right">
			Our Privacy Policy may change over time. We recommend checking back once a month to stay informed.
		</p>
		<div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-500 rotate-12"></div>
	</div>
</div>

				{/* Contact Section */}
				<div className="mt-20 text-center">
					<h3 className="text-2xl lg:text-3xl font-bold text-white">
						Have questions about privacy?
					</h3>
					<p className="text-purple-200 text-lg mt-4 max-w-xl mx-auto">
						Feel free to reach out to our support team. We're here to make your music journey safe and inspiring.
					</p>
					<a
						href="/contacts"
						className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full text-white font-bold shadow-lg hover:scale-105 transform transition-all duration-300"
					>
						Contact Us
					</a>
				</div>

				{/* Footer Texts */}
				<div className="mt-20 flex justify-between items-end text-sm text-purple-300">
					<p className="max-w-xs">
						© 2025 101newSound — Your daily music companion.
					</p>
					<p>
						Last updated: June 2025
					</p>
				</div>
			</Container>
				<style>{`
				/* Clip-path utilities for geometric shapes */
				.clip-path-slant-left {
					clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
				}

				.clip-path-slant-right {
					clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
				}

				.clip-path-corner-cut {
					clip-path: polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 15%);
				}

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

				/* Mobile responsiveness */
				@media (max-width: 768px) {
					.clip-path-slant-left,
					.clip-path-slant-right,
					.clip-path-corner-cut {
						clip-path: none;
						border-radius: 0.5rem;
					}
				}
			`}</style>
		</div>
	);
};
