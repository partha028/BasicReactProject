import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {

    render() { 
        const { data,columns} = this.props;
        return (
            <tbody>
                {data.map(movie => 
                    <tr key={movie._id}>
                        {columns.map(column =>
                        <td key={movie._id + (column.path || column.key)}>
                        {_.get(movie, column.path)||column.content(movie)}</td>)}</tr>
                )}
            </tbody>

        );
    }
}
 
export default TableBody;