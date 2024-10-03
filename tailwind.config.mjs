/** @type {import('tailwindcss').Config} */

export default {
  


  darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {   
    
    container: {      
			center: true,
      padding: '1rem',
			screens: {
				xl: '1024px'
			}      
		},



		extend: {
      colors: {
        "accent": "var(--accent)",
      },
      typography: {
        

        invert: {
          css: {
            '--tw-prose-body': 'var(--tw-prose-invert-body)',
            '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
            '--tw-prose-lead': 'var(--tw-prose-invert-lead)',
            '--tw-prose-links': '#fb4451',
            '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
            '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
            '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
            '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
            '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
            '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
            '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
            '--tw-prose-kbd': 'var(--tw-prose-invert-kbd)',
            '--tw-prose-kbd-shadows': 'var(--tw-prose-invert-kbd-shadows)',
            '--tw-prose-code': 'var(--tw-prose-invert-code)',
            '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
            '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
            '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
            '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
            
          },
        },

        DEFAULT: {
          css: {            
            maxWidth: '100%', // add required value here    
            
            '--tw-prose-body': '#000000',
            '--tw-prose-headings': '#000000',
            '--tw-prose-lead': 'var(--tw-prose-invert-lead)',
            '--tw-prose-links': '#ff2626',
            '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
            '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
            '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
            '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
            '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
            '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
            '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
            '--tw-prose-kbd': 'var(--tw-prose-invert-kbd)',
            '--tw-prose-kbd-shadows': 'var(--tw-prose-invert-kbd-shadows)',
            '--tw-prose-code': 'var(--tw-prose-invert-code)',
            '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
            '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
            '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
            '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
            a: {
              textDecoration: 'underline 1px',
              fontWeight: '100',
            },
          }
        }
        
      }
      
    },
	},
	plugins: [require('@tailwindcss/typography')],
  
}
