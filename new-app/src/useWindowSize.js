import { useEffect, useState } from "react"

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setWindowSize({
            width: width,
            height: height,
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
}

export default useWindowSize