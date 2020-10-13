/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-12 15:46:23
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-12 20:30:14
 */ 
import { observable, action ,computed  } from 'mobx'
// makeObservable 

class Homeapp  {
    // constructor(){     
    //     makeObservable(this)
    // }
    namespace = 'homeapp';
    @observable test = 0;
    @observable bigCk = false
    @observable list = [
        { 
            id: 0,
            tit: '香蕉',
            price: 1.2,
            num: 0,
            isF: false
        },
        {
            id: 1,
            tit: '苹果',
            price: 2.2,
            num: 0,
            isF: false
        },
        {
            id: 2,
            tit: '草莓',
            price: 13,
            num: 0,
            isF: false
        },
        {
            id: 3,
            tit: '芒果',
            price: 8,
            num: 0,
            isF: false
        }
    ]
    @action add() {
        this.test++
    }

    // @action change(el, id) {
    //     // if (el === '+') {
    //     //     console.log(el, id)
    //     //     console.log(this.list[id])
    //     //     Number(this.list[id].num + 1)
    //     //     console.log(Number(this.list[id].num + 1))
    //     // } else {
    //     //     this.list[id].num - 1
    //     // }

    //     this.list.forEach(item => {
    //         if (item.id === id) {
    //             if (el === '+') {
    //                 item.num++
    //             } else {  
    //                 item.num == 0 ? 0 : item.num--         
    //             }
    //         }
    //     })

    // }

    @action changeAllCk(e,id){
        this.list.forEach(item => {
            if (item.id === id) {
                item.isF = e
            }
        })
       this.bigCk = this.list.every(item=>item.isF)
    }

    @action bigAllCk(e){
        this.bigCk = e
        this.list.forEach(item => {
            item.isF = e
        })
    }
    

    @computed get allNum(){
        let n = 0
        let data = this.list.filter(item=>item.isF)
        data.forEach(item=>{
            n+=item.num*item.price
        })

        return n
    }
}

export default new Homeapp()

