import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
            super(props);
            this.state = {
                trangthaiChinhsua : false
            }
        }
        thaydoiTrangthai = ()=>{
            this.setState({
                trangthaiChinhsua: !this.state.trangthaiChinhsua
            })
        }
        hienThiNut = ()=>{
            if(this.state.trangthaiChinhsua === true){
                //có arrow function của onClick để tránh vòng lặp true false nhiều lần 
                return <div className="btn btn-block btn-outline-secondary" onClick={()=> this.thaydoiTrangthai()} style={{maxWidth: '18rem'}}>Đóng</div>;
            } else {
                return <div className="btn btn-block btn-outline-primary" onClick={()=> this.thaydoiTrangthai()} style={{maxWidth: '18rem'}}>Thêm mới</div>;
            }
        }
        hienThiForm = ()=>{
            if(this.state.trangthaiChinhsua === true){
                return (
                    <div className="card text-white bg-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                        <div className="card-header">Thêm mới</div>
                        <div className="card-body">
                        <div className="form-group">
                            <h6 className="card-title">Tên khách hàng</h6>  
                            <input className="form-control"   type="text" />
                        </div>
                        <div className="form-group">
                            <h6 className="card-title">Điện thoại</h6>  
                            <input className="form-control"   type="text" />
                        </div>
                        <div className="form-group">
                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option defaultValue>Choose...</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-block btn-success">Thêm</div>
                        </div>
                        </div>
                    </div>
                )
            }
        }
    render() {
        return (
                <div className="col-3">
                    {this.hienThiNut()}
                    {this.hienThiForm()}
                 </div>   
        );
    }
}

export default AddUser;