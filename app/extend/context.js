module.exports = {
    success(data = null, msg = '操作成功') {  
        this.body = {  
          code: 0, // 成功状态码  
          message: msg,  
          data,  
        };  
    },  
        
    error(msg = '操作失败', code = -1, ) {  
        this.body = {  
            code,  
            message: msg,  
            data: null,  
        };  
    },  
}