import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav style={{ marginTop: '10px' }}>
            <ul className='pagination' style={{ justifyContent: 'center' }}>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Pagination;