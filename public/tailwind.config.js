module.exports = {
    content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
    theme: {
        extend: {
            colors: {
                // Primary Colors - Medical Authority
                primary: {
                    DEFAULT: "#2563EB", // blue-600
                    50: "#EFF6FF", // blue-50
                    100: "#DBEAFE", // blue-100
                    200: "#BFDBFE", // blue-200
                    300: "#93C5FD", // blue-300
                    400: "#60A5FA", // blue-400
                    500: "#3B82F6", // blue-500
                    600: "#2563EB", // blue-600
                    700: "#1D4ED8", // blue-700
                    800: "#1E40AF", // blue-800
                    900: "#1E3A8A", // blue-900
                },
                // Secondary Colors - Professional Depth
                secondary: {
                    DEFAULT: "#1E40AF", // blue-800
                    50: "#EFF6FF", // blue-50
                    100: "#DBEAFE", // blue-100
                    200: "#BFDBFE", // blue-200
                    300: "#93C5FD", // blue-300
                    400: "#60A5FA", // blue-400
                    500: "#3B82F6", // blue-500
                    600: "#2563EB", // blue-600
                    700: "#1D4ED8", // blue-700
                    800: "#1E40AF", // blue-800
                    900: "#1E3A8A", // blue-900
                },
                // Accent Colors - Health Positive
                accent: {
                    DEFAULT: "#059669", // emerald-600
                    50: "#ECFDF5", // emerald-50
                    100: "#D1FAE5", // emerald-100
                    200: "#A7F3D0", // emerald-200
                    300: "#6EE7B7", // emerald-300
                    400: "#34D399", // emerald-400
                    500: "#10B981", // emerald-500
                    600: "#059669", // emerald-600
                    700: "#047857", // emerald-700
                    800: "#065F46", // emerald-800
                    900: "#064E3B", // emerald-900
                },
                // Background Colors
                background: "#FAFBFC", // slate-50
                surface: "#F1F5F9", // slate-100
                // Text Colors
                text: {
                    primary: "#1E293B", // slate-800
                    secondary: "#64748B", // slate-500
                },
                // Status Colors
                success: "#10B981", // emerald-500
                warning: "#F59E0B", // amber-500
                error: "#EF4444", // red-500
                // Border Colors
                border: "#E2E8F0", // slate-200
                "border-light": "#F1F5F9", // slate-100
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                jetbrains: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'medical-xs': ['0.75rem', { lineHeight: '1rem' }],
                'medical-sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'medical-base': ['1rem', { lineHeight: '1.5rem' }],
                'medical-lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'medical-xl': ['1.25rem', { lineHeight: '1.75rem' }],
                'medical-2xl': ['1.5rem', { lineHeight: '2rem' }],
                'medical-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                'medical-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            },
            boxShadow: {
                'medical-light': '0 1px 3px rgba(0, 0, 0, 0.1)',
                'medical-medium': '0 4px 6px rgba(0, 0, 0, 0.1)',
                'consultation': '0 4px 6px rgba(0, 0, 0, 0.1)',
            },
            borderRadius: {
                'medical': '0.5rem',
                'medical-lg': '0.75rem',
            },
            transitionDuration: {
                'medical': '250ms',
            },
            transitionTimingFunction: {
                'medical': 'ease-out',
            },
            spacing: {
                'medical-xs': '0.5rem',
                'medical-sm': '1rem',
                'medical-md': '1.5rem',
                'medical-lg': '2rem',
                'medical-xl': '3rem',
            },
        },
    },
    plugins: [],
}