import { dobro, somar, media, temperatura } from './services.js'

const server = Router();


server.get('/ping', (req, resp) => {
    resp.send('pong');


})

server.get('/dobro/numero:', (req, resp) => {
    const numero = Number(req.params.numero);

    const x = dobro(numero)


    resp.send({
        dobro: x
    })

})




server.get('/somar', (req, resp) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const x = somar(a, b);

    resp.send({
        soma: x
    })

})

server.post('/somar', (req, resp) => {
    try {
        const { valores: { a, b } } = req.body;
        const x = a + b;

        resp.send({
            soma: x
        })
    } catch (err) {

        resp.status(404).send({
            erro: err.message
        })
    }


})

server.post('/media', (req, resp) => {
    try {
        const { valores: { a, b, c } } = req.body;
        const x = media(Number(a), Number(b), Number(c));

        resp.send({
            media: x
        })
    } catch (err) {

        resp.status(404).send({
            erro: err.message
        })
    }


})

server.get('/febre', (req,resp) =>{
    try{
        const febril= Number(req.query.a);

        const resposta= temperatura(febril);

        resp.send({
            febril: resposta
        });

    }catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
})


server.get('/tabuada', (req, resp)=>{
    try{
    const tabu= Number(req.query.a);

    const resposta= tabuada(tabu);

    resp.send({
      tabuada: resposta
    })
} catch(err){
    resp.status(404).send({
        erro: err.message
    })
}
} )

export function corprimaria(cor){
    let resposta= false;
    if(cor=="amarelo"||cor=="azul"|| cor=="vermelho" ){
        resposta=true;
    }
    })

    return resposta;
}
    server.post('/dia2/ingressocinema', (req,resp)=>{
        try{
            const { inginteiro, ingmeia, semana, nacionalidade} = req.body;
            const total = ingressocinema(inginteiro, ingmeia, semana, nacionalidade);
            resp.send({
                total: total
            })
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
    })

    export default server;