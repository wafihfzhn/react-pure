import React, { Component, Fragment } from 'react';

class Product extends Component {
  state = {
    order: 1
  }

  handleMinus = () => {
    if(this.state.order > 0){
      this.setState({
        order: this.state.order - 1
      })
    }
  }

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1
    })
  }

  render(){
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="troley">
            <img src="" alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <div className="card">
          <div className="img-thumb-prod">
            <img src="" alt="" />
          </div>
          <p className="product-title">Daging Ayam Berbumbu</p>
          <p className="product-price">Rp 410,000</p>
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>-</button>
            <input type="text" value={this.state.order} />
            <button className="plus" onClick={this.handlePlus}>+</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Product;