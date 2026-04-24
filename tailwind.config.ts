import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "surface-container-low": "#1c1b1b",
                "primary": "#c3f5ff",
                "on-surface-variant": "#bac9cc",
                "primary-fixed": "#9cf0ff",
            },
            fontFamily: {
                "headline": ["Sans-Serif"],
                "body": ["Consolas"]
            },
        },
    },
} satisfies Config;
