import { useState, useEffect } from "react";

interface Size {
    width: number | undefined;
    height: number | undefined;
}

function App() {
    const size: Size = useWindowSize();
    return (
        <div>
            {size.width}px / {size.height}px
        </div>
    );
}

export function useWindowSize(): Size {
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}