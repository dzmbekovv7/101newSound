import {
	Hero,
	AboutSection,
	CategoriesSection,
	CallToActionSection,
	FeaturedArticlesSection,
} from '@/components/home'
 export function HomePage() {
	return (
		<>
			<Hero />
			<AboutSection />
			<FeaturedArticlesSection />
			<CategoriesSection />
			<CallToActionSection />
		</>
	)
}
