import { forwardRef, useEffect } from "react"

const CustomButton = forwardRef((props, ref) => {
    useEffect(() => {
        ref.current?.focus();
    }, [ref]);

    return (
        <button ref={ref} style={{ marginTop: '15px' }}>
            {props.children}
        </button>
    );

});

export default CustomButton