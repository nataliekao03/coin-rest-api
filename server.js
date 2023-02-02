const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('hello! i work!!');
});

app.get('/flip-coin', (request, response) => {
    const randomNumber = Math.random();
    let coinValue = '';
    if(randomNumber < 0.5){
        coinValue  = 'Heads!';
    } else{
        coinValue = 'Tails!'
    }
    response.send(coinValue);
});


app.get('/flip-coins', (request, response) => {
    const times = request.query.times;
    if(times && times > 0){
        let heads = 0;
        let tails = 0;
        for(let i = 0; i < times; i++) {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                heads++;
            } else {
                tails++;
            }
        }
        response.json({heads, tails});
    }else{
        response.send('hey! you need to send times');
    }    
});

app.listen(5000, () => {
    console.log('Started server. Listening on port 5000.');
});