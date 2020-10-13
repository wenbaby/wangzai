import { observable, action, computed, runInAction } from 'mobx'
class HomeStore {
    //定义状态

    @observable HomeNum: number = 0;
    @observable list: string[] = [];

    //事件
    @action changeHomeNum = () => {
        this.HomeNum++;
    }
    //异步请求
    @action getList = async () => {
        //   let res = await axios.get('/list')
        let res: string[] = ['a', 'b']
        runInAction(() => {
            this.list = res
        })
    }

    //计算属性
    @computed get calculationNum() {
        return this.HomeNum * 5
    }
}



export default { name: 'homeStore', store: new HomeStore() }