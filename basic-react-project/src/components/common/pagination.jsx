import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({currentPage,movieCount,onPageChange,pageSize}) => {
    
    const pageCount = Math.ceil(movieCount/pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1,pageCount+1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                     <li key={page} 
                     className= {page === currentPage ? 'page-item active' : 'page-item'}>
                     <a className="page-link" onClick={()=> onPageChange(page)}>{page}</a>
                    </li>))
                }
            </ul>
        </nav>
        );
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    movieCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    pageSize: PropTypes.number.isRequired,
}
 
export default Pagination;
