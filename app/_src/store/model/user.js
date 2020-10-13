/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-12 20:20:37
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-12 20:21:39
 */
import { observable,action ,computed} from 'mobx';


class App {
  namespace = "user"; //命名空间
  @observable todos = 0 // 数据
  @action add(){  //修改方法
    this.todos++
  }
  @computed num(){  //计算属性
    const a = 0;
    return a
  }
}


export default new App(); //实例App