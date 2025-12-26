import { useEffect, useState } from "react";

const withLoading = (WrappedComponent) => {
    return (props) => {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 2000);

            return () => clearTimeout(timer);
        }, []);

        if (isLoading) {
            return <div>Загрузка...</div>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withLoading