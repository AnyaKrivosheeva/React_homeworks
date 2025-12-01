import { useState, useEffect } from "react";

const Pagination = (props) => {
    const {
        currentPage,
        setCurrentPage,
        totalPages,
    } = props

    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        const tempPagination = [];

        for (let i = 0; i < totalPages; i++) {
            tempPagination.push(i + 1)
        }

        setPagination(tempPagination)
    }, [totalPages]);

    const changeCurrentPage = (page) => {
        setCurrentPage(page)
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < pagination.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='pagination'>
            <div className='arrow' onClick={prevPage}>👈</div>
            {pagination.map((page) => (<div key={page} className={`page ${currentPage === page ? 'active' : ''}`} onClick={() => changeCurrentPage(page)}>{page}</div>))}
            <div className='arrow' onClick={nextPage}>👉</div>
        </div>
    )
}

export default Pagination