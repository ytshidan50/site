

const http=require('http');
const fs=require('fs');
const url=require('url');

http.createServer(function(req,res){
    const q = url.parse(req.url,true);

    if(q.pathname==='/'){
        fs.readFile('index.html',function (err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }else if(q.pathname==='/request'){
        res.write('hey');
        console.log(q.query);
        console.log(q.query.fullName);
        res.end();
    }else {
        res.write('error 404');
        res.end();
    }
}).listen(7000, ()=> {console.log("Server Startd");});