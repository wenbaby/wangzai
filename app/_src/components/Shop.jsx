import React, { Component } from 'react'
import '@/assets/shop.scss'
import { inject, observer } from 'mobx-react';

@inject('homeapp')
@observer
class Shop extends Component {
    render() {
        return (
            <div className='shop'>
                <h3>购物车</h3>
                <ul>
                    {
                        this.props.homeapp.list.map(item => {
                            return <dl key={item.id}>
                                <dt>
                                    <input type="checkbox"  onChange={(e)=>this.allCk(e,item.id)}  checked={item.isF} />
                                    <span></span>
                                </dt>
                                <dd>
                                    <p>{item.tit}</p>
                                    <div>
                                        <b>￥{item.price}</b>
                                        <p>
                                            <span onClick={()=>this.changeEvent('+',item.id)}>+</span>
                                            <span>{item.num}</span>
                                            <span onClick={()=>this.changeEvent('-',item.id)}>-</span>
                                        </p>
                                    </div>
                                </dd>
                            </dl>
                        })
                    }
                </ul>
                <p><input type="checkbox" checked={this.props.homeapp.bigCk} onChange={(e)=>this.bigCkEvent(e)}/> <span>{this.props.homeapp.allNum}</span></p>
            </div>
        )
    }
    changeEvent(el,id){
        this.props.homeapp.change(el,id)
    }
    allCk(e,id){
        this.props.homeapp.changeAllCk(e.target.checked,id)
        // console.log(e.target.checked)
    }
    bigCkEvent(e){
        this.props.homeapp.bigAllCk(e.target.checked)
    }
}
export default Shop