import React, { Component } from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = ({data,onSort,onLiked,deleteMovie,sortColumn,columns}) => {

    return ( 
        <table className="table">
        <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
        <TableBody data={data}columns={columns} onLiked={onLiked} deleteMovie={deleteMovie}/>
      </table>
     );
}
 
export default Table;