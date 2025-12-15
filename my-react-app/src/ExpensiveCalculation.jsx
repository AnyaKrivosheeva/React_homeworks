import { useMemo } from "react";

const ExpensiveCalculation = (props) => {
    const {
        numbers,
    } = props

    const minNumber = useMemo(() => {
        const sortedNumbers = [...numbers].sort((a, b) => a - b);
        return sortedNumbers[0];
    }, [numbers]);  

    return (
        <div style={{ marginTop: '15px' }}>{minNumber}</div>
    )
}

export default ExpensiveCalculation