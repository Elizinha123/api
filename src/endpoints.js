import { Router } from "express"
import {dobro, somar, media, temperatura} from './services.js'

const server = Router();


server.get('/ping' , (req, resp) => {
    resp.send('pong');


})

server.get('/dobro/numero:' , (req, resp) => {
    const numero = Number(req.params.numero);

    const x = dobro(numero)
   

   resp.send({
      dobro: x
   })
   
})




server.get('/somar' , (req, resp) => {
     const a = Number(req.query.a);
     const b = Number(req.query.b);

    const x = somar(a, b);

    resp.send({
        soma: x
    })
    
})

server.post('/somar' , (req, resp) => {
    try{
        const {valores: {a, b}}  = req.body;
        const x = a + b;

        resp.send({
            soma: x
        })
    }catch(err) {
         
        resp.status(404).send({
            erro: err.message
        })
    }
   
    
})

server.post('/media' , (req, resp) => {
    try{
          const {valores: {a, b, c}} = req.body;
          const x =(media (a + b + c));

        resp.send({
           media : x
        })
    }catch(err) {
         
        resp.status(404).send({
            erro: err.message
        })
    }
   
    
})

server.get('/temperatura' , (req, resp) => {
   try{
       const {valores: {febre}} = req.query;
       const x =(temperatura(febre));

       resp.send({
        temperatura : x
     })
 }catch(err) {
      
     resp.status(404).send({
         erro: err.message
     })
 }
}


   



export default server