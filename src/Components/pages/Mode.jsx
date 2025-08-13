import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

export default function Mode() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.classList.add(savedTheme);
        }  else {
            document.body.classList.add("dark");
        }
    }, []);

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
         //console.log("Theme toggled:", newTheme);
    };

    return (
        <button onClick={toggle}>
            {theme === "dark" ? (
                <div className="bg-slate-500 rounded-full p-2 text-white bg-opacity-70 shadow-lg">
                    < IoMdMoon className="text-lg" />
                </div>
            ) : (
                <div className="bg-gray-200 rounded-full p-2 text-gray-600 shadow-lg">
                    < FaSun className="text-lg" />
                </div>
            )}
        </button>
    );
}
