const express=require("express");
const app=express();
const port=process.env.port || 3000;
const bodyparser=require('body-parser')
const serverless=require('serverless-http')

app.use(bodyparser.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/', function(req,res){
    var n1,n2,re;
    n1=Number(req.body.num1)
    n2=Number(req.body.num2)
    re=Number(req.body.num1)+Number(req.body.num2)
    res.send('the answer of the calculation is '+ re);
})

app.get('/bmi', function(req, res){
    res.sendFile(__dirname+"/calculator.html")
})

app.post('/bmi', function(req, res){
    var ne1,ne2,resf;
    ne1=Number(req.body.nu1);
    ne2=Number(req.body.nu2);
    resf=ne1/ne2;
    res.send("the result is "+ resf);
})

app.listen(port,()=>{
    console.log('server is running on port '+port);
});