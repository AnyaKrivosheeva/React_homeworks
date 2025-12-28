import { forwardRef, useEffect } from "react"

const CustomButton = forwardRef((props, ref) => {
    const {
        onClick,
    } = props;

    useEffect(() => {
        ref.current?.focus();
    }, [ref]);

    return (
        <button ref={ref} style={{ marginTop: '15px' }} onClick={onClick}>
            {props.children}
        </button>
    );

});

export default CustomButton