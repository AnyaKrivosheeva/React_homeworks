const Pagination = (props) => {
    const {
        pagination,
        currentPage,
        changePage,
    } = props

    return (
        <div className='pagination'>
            <h2>Pagination</h2>
            {pagination.map((page, index) => (
                <div key={index}
                    className={`pagination-item ${currentPage === page ? 'active' : ''}`}
                    onClick={() => changePage(page)}>
                    {page}
                </div>))}
        </div>
    )
}

export default Pagination