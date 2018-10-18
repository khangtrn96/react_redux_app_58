import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Project quản lý thành viên bằng REACTJS</h1>
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                </div>
                </div>
            </div>
        );
    }
}

export default Header;