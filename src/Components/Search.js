import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="btn-group">
                            <input className="form-control"  placeholder="Nhập tìm kiếm ở đây" style={{width: 500}} type="text" />
                            <div className="btn btn-success">Search</div>
                        </div>
                        <div className="btn-group1">
                            <div className="btn btn-block btn-outline-secondary" onClick={()=> this.props.ketNoi()} >Đóng</div>
                            <div className="btn btn-block btn-outline-primary">Thêm mới</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;