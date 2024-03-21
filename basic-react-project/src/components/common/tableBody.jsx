import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {

    renderCell = (movie,column) => {
        if(column.content)
            return column.content(movie);
        else
            return _.get(movie, column.path);
    }

    render() { 
        const { data,columns} = this.props;
        return (
            <tbody>
                {data.map(movie => 
                    <tr key={movie._id}>
                        {columns.map(column =>
                        <td key={movie._id + (column.path || column.key)}>
                        {this.renderCell(movie,column)}</td>)}</tr>
                )}
            </tbody>

        );
    }
}
 
export default TableBody;