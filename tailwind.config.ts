import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				art: 'url(/art.jpg)',
				art1: 'url(/art1.jpg)',
				art2: 'url(/art2.jpg)',
				art3: 'url(/art3.jpg)',
				art4: 'url(/art4.jpg)',
				model: 'url(/model.jpg)',
				model1: 'url(/model1.jpg)',
				model2: 'url(/model2.jpg)',
				model3: 'url(/model3.jpg)',
				model4: 'url(/model4.jpg)',
				image: 'url(/image.jpg)',
				image1: 'url(/image1.jpg)',
				image2: 'url(/image2.jpg)',
				image3: 'url(/image3.jpg)',
				image4: 'url(/image4.jpg)',
			},
		},
		screens: {
			xs: '350px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			jose: ['Josefin Slab', 'serif'],
		},
	},
	plugins: [],
};
export default config;
