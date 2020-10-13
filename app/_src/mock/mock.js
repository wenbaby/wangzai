/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-12 16:19:40
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-12 16:26:59
 */

const fs = require('fs')
const Mock = require('mockjs')
let data = Mock.mock({
    "userList|8":[{
        "image":"@image(50x50,clore())",
        "title":"@ctitle(5)",
        "price|10-30.2":0,
        "isF":false,
    }]
})

fs.writeFileSync('./data.json',JSON.stringify(data.userList))



