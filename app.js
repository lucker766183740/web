const express=require('express');
const server=express();
const cors=require('cors');
// 下载MySQL模块
//引入MySQL模块，创建连接池
const mysql=require('mysql');
const { runInNewContext } = require('vm');
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'',
    database:'limt',
    connectionLimit:20
});
// 下载cors插件，解决跨域问题
server.use(cors({
    //提供两个可自行选择的地址
    // 此时创建接口已经完全畅通
    origin:
    ['http://127.0.0.1:8080','http://localhost:8080']
}));
// 设置端口
server.listen(3000,()=>{
    console.log('server is running······')
});

server.get('/move_name',(req,res)=>{
    let sql='select * from move_row';
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,results:results})
    });
     
});