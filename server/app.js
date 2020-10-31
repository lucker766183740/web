const express=require('express');
const server=express();
const cors=require('cors');
// 下载MySQL模块
//引入MySQL模块，创建连接池
const mysql=require('mysql');
const { runInNewContext } = require('vm');
const { start } = require('repl');
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

//冬冬
server.get('/header/:like',(req,res)=>{
  let like = req.params.like
    like= '%'+ like +'%'
  let sql='select move_row.move_sid,move_row.move_img,move_row.move_name,move_row.move_type,move_row.move_time,actor.actor from move_row,actor where move_type  like ?  or move_name like ? or move_time like ? or actor  like ?';
  pool.query(sql,[like,like,like,like],(err,results)=>{
    if(err) throw err;
    let pagecount = results.length
    res.send({results,pagecount})
  })
})

server.get('/move_name',(req,res)=>{
    let sql='select lunbo from move_lunbo';
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,results:results})
    });
     
    
});

server.get('/move_img',(req,res)=>{
        let sql='select * from move_row  limit 20';
        pool.query(sql,(err,results)=>{
            if(err) throw err;
            res.send({message:'查询成功',code:1,results:results})
        });   
      });

server.get('/move_index',(req,res)=>{
  let n=req.query.n
      let sql='select move_sid from move_row';
      let start=(n-1)*6
      pool.query(sql,(err,results)=>{
          if(err) throw err;
        let rowpage=results.length
        let pagecount=Math.ceil(rowpage/6) 

    let sql='select *   from move_row  limit ' +  start + ',' + 6 ;
    pool.query(sql,(err,results)=>{
      if(err) throw err;

        res.send({code:1,results,pagecount})
      })
    })
})

server.get('/detail/:lid',(req,res)=>{
    let move_sid=req.params.lid
      sql='select  * from move_row where move_sid=?'
      pool.query(sql,[move_sid],(err,results)=>{
          if(err) throw err;
      
        sql='select * from actor where famillc = ?';
      pool.query(sql,[move_sid],(err,result)=>{
            if(err) throw err ;
        
              res.send({code:1,results,result})
          })
        
    })
})
server.get('/type/:move_type',(req,res)=>{
  let move_type=req.params.move_type
  move_type= '%'+ move_type +'%'
  sql='select * from move_row where move_type  like ? limit 0,6'
  pool.query(sql,[move_type],(err,results)=>{
    if(err) throw err;
    let pagecount = results.length/6
    res.send({code:1,results,pagecount})
  })
})

server.get('/xiang',(req,res)=>{
  sql='select * from move_name';
  pool.query(sql,(err,results)=>{
    if(err) throw err;
    res.send({code:1,results})
  })
})

server.get('/ying/:sid',(req,res)=>{
  let sid=req.params.sid
  sql='select * from move_name,M_server where (sid = ? and M_id = ?)';
  pool.query(sql,[sid,sid],(err,results)=>{
    if(err) throw err;

       res.send({code:1,results})
    })
})
//座位
server.get('/zuowei',(req,res)=>{
  sql='select * from setdown';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({result})
  })
})


//嘉欣
server.get('/index',(req,res)=>{
	let currentPage=req.query.currentPage;
	let pageSize=req.query.pageSize;
	let start=(currentPage-1)*pageSize
	let sql = `SELECT bid,b_name,b_type,b_place,b_address,b_service_1,b_service_2,b_service_3,b_service_4,b_tag_1,b_tag_2,b_tag_3,b_score,b_evaluate,b_pic FROM jd_business LIMIT ${start},${pageSize}`;
	pool.query(sql,(err,results)=>{
	  if(err) throw err;
	  res.send({message:'查询成功',code:1,results:results});
	});
  });




  server.get('/jd_details',(req,res)=>{
	let id = req.query.id;
	console.log(id);
	
	let sql='select * from jd_business where bid = ?'
	// let sql='SELECT b_name,b_type,b_place,b_address,b_service_1,b_service_2,b_service_3,b_service_4,b_score,b_evaluate,FROM jd_business LIMIb_mg,b_phone,b_service_1,b_service_2,b_service_3,b_service_4 FROM jd_business where bid = ?'
	pool.query(sql,[id],(err,results)=>{
	  if(err) throw err;
	  res.send({message:'查询成功',code:1,results:results});
	});
  });

  //韦伟


  server.get('/login',(req,res)=>{
    let sql='select * from mt_family limit 0,10';
    pool.query(sql,(err,result)=>{
      if(err)throw err;
       if(result.length>0){
         res.send(result);
       }else{
         res.send('0');
      }
    });
  });
  //获取文章分页的接口
  server.get('/login2',(req,res)=>{
    let sql='select * from mt_family limit 10,10';
    pool.query(sql,(err,result)=>{
      if(err)throw err;
       if(result.length>0){
         res.send(result);
       }else{
         res.send('0');
      }
    });
  });
  server.get('/like',(req,res)=>{
    let sql='select * from MY_like';
    pool.query(sql,(err,result)=>{
      if(err)throw err;
       if(result.length>0){
         res.send(result);
       }else{
         res.send('0');
      }
    });
  });
  server.get('/likes',(req,res)=>{
    let sql = 'select * from MY_like where id<6';
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      res.send(result)
    })
  })
   server.get('/details',(req,res)=>{
     let fid = req.query.fid;
     let sql = 'select * from MT_laptop where fid=?';
     pool.query(sql,[fid],(err,result)=>{
       if(err) throw err;
       if(result.length>0){
         res.send(result)
       }
     })
   });
   server.get('/list',(req,res)=>{
    let fid = req.query.fid;
    let sql = 'select * from mt_family where fid=?';
    pool.query(sql,[fid],(err,result)=>{
      if(err) throw err;
      if(result.length>0){
        res.send(result)
      }
    })
  });
   server.get('/pinglun',(req,res)=>{
     let sql = 'select * from MT_pl';
     pool.query(sql,(err,result)=>{
       if(err) throw err;
       res.send(result)
     })
   })
   //筛选网吧网咖的接口
   server.get('/wangba',(req,res)=>{
     let sql = "select * from mt_family where leixing='网吧网咖'";
     pool.query(sql,(err,result)=>{
       if(err) throw err;
       res.send(result);
     })
   })
   server.get('/mishi',(req,res)=>{
    let sql = "select * from mt_family where leixing='密室逃脱'";
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      res.send(result);
    })
  })
  server.get('/jiage',(req,res)=>{
    let sql = "select * from mt_family order by price_per asc limit 0,10";
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      res.send(result);
    })
  })

