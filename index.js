const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
app.post('/api/pay',async(req,res)=>{
    try{
        const resp= await fetch("https://payments.yoco.com/api/checkouts",{
            method: "POST",
            headers:{
                'Authorization': 'Bearer sk_test_960bfde0VBrLlpK098e4ffeb53e1',
                "Content-Type": "application/json",
            },
            body:JSON.stringify(req.body),
        });
    
        if( resp.status===200){
            const payload= await resp.json()
            res.status(200).json(payload);
        }else{
            console.log(resp);
            res.status(400).json({message:"could not resolve request"});
        }
    }catch(error){
        onsole.log(error);
        res.status(400).json({message:error.message})
    }
   
})
app.listen(4000,()=>{
    console.log("Listening on port :"+4000);
})
