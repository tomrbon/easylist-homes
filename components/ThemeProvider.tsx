"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isAutoMode: boolean;
    setAutoMode: (auto: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getTimeBasedTheme(): Theme {
    const hour = new Date().getHours();
    // Dark mode from 6 PM (18:00) to 6 AM (06:00)
    if (hour >= 18 || hour < 6) {
        return "dark";
    }
    return "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const [isAutoMode, setAutoMode] = useState(true);
    const [mounted, setMounted] = useState(false);

    // Initialize theme on mount
    useEffect(() => {
        setMounted(true);

        // Check for saved preference
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const savedAutoMode = localStorage.getItem("autoTheme");

        if (savedAutoMode === "false" && savedTheme) {
            setAutoMode(false);
            setTheme(savedTheme);
        } else {
            // Auto mode - use time-based theme
            setAutoMode(true);
            setTheme(getTimeBasedTheme());
        }
    }, []);

    // Update theme every minute when in auto mode
    useEffect(() => {
        if (!isAutoMode) return;

        const updateTheme = () => {
            setTheme(getTimeBasedTheme());
        };

        // Update immediately
        updateTheme();

        // Check every minute
        const interval = setInterval(updateTheme, 60000);
        return () => clearInterval(interval);
    }, [isAutoMode]);

    // Apply theme to document
    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        // Save preferences
        localStorage.setItem("theme", theme);
        localStorage.setItem("autoTheme", String(isAutoMode));
    }, [theme, isAutoMode, mounted]);

    // Prevent hydration mismatch
    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, isAutoMode, setAutoMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
