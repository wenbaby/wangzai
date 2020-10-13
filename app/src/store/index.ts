let files = (require as any).context('@/store/modules', false, /\.ts|js$/)
let mdObj: any = {}
files.keys().forEach((item: 'string') => {
    let res = require(`@/store/modules${item.slice(1)}`)
    mdObj[res.default.name] = res.default.store
})
// autorun(() => {
//     console.log('homenum', mdObj['homeStore'].HomeNum);
// })
export default {
    ...mdObj
}