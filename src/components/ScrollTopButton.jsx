import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

function ScrollTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="cursor-pointer fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(144,0,0)] text-white shadow-lg hover:bg-red-800 transition"
                >
                    <IoIosArrowUp size={20} />
                </button>
            )}
        </>
    )
}

export default ScrollTopButton
