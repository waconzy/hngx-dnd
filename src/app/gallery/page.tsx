import GallerySection from '@/components/GallerySection';
import HeroSection from '@/components/HeroSection';
import { SearchProvider } from '@/components/SearchContext';

export default function Home() {
	return (
		<div className='bg-[#eeeeee] font-jose'>
			<SearchProvider>
				<HeroSection />

				<GallerySection />
			</SearchProvider>
		</div>
	);
}
