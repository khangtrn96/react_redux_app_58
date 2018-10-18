import React, { Component } from 'react';
import Header from './Header.js';
import Search from './Search.js';
import TableData from './TableData.js';
import AddUser from './AddUser.js';
import './../App.css';

class App extends Component {
  thongbao= ()=>{alert("Ket noi thanh cong");}
  render() {
    return (
      <div>
        <Header/>
        <div className="searchform">
          <div className="container">
              <div className="row">
                <Search ketNoi={()=>this.thongbao()}/>
                <TableData/>
                <AddUser/>
              </div>
          </div>
        </div>
          
      </div>
    );
  }
}

export default App;
