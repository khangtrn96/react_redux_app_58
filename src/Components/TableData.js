import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            
                <div className="col-9">
                    <table className="table table-striped table-hover ">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td >1</td>
                            <td>Trần An Khang</td>
                            <td>01010101</td>
                            <td>Admin</td>
                            <td>
                            <div className="btn-group">
                                <div className="btn btn-info sua"><i className="fa fa-edit">Edit</i></div>
                                <div className="btn btn-danger xoa"><i className="fa fa-remove">Delete</i></div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td >1</td>
                            <td>Trần An Khang</td>
                            <td>01010101</td>
                            <td>Admin</td>
                            <td>
                            <div className="btn-group">
                                <div className="btn btn-info sua"><i className="fa fa-edit">Edit</i></div>
                                <div className="btn btn-danger xoa"><i className="fa fa-remove">Delete</i></div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td >1</td>
                            <td>Trần An Khang</td>
                            <td>01010101</td>
                            <td>Admin</td>
                            <td>
                            <div className="btn-group">
                                <div className="btn btn-info sua"><i className="fa fa-edit">Edit</i></div>
                                <div className="btn btn-danger xoa"><i className="fa fa-remove">Delete</i></div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td >1</td>
                            <td>Trần An Khang</td>
                            <td>01010101</td>
                            <td>Admin</td>
                            <td>
                            <div className="btn-group">
                                <div className="btn btn-info sua"><i className="fa fa-edit">Edit</i></div>
                                <div className="btn btn-danger xoa"><i className="fa fa-remove">Delete</i></div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td >1</td>
                            <td>Trần An Khang</td>
                            <td>01010101</td>
                            <td>Admin</td>
                            <td>
                            <div className="btn-group">
                                <div className="btn btn-info sua"><i className="fa fa-edit">Edit</i></div>
                                <div className="btn btn-danger xoa"><i className="fa fa-remove">Delete</i></div>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

           
        );
    }
}

export default TableData;