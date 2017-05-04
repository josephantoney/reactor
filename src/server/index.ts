import * as express from 'express';
import Status from './healthCheck/status'

let app = express();

app.get('/helthCheck', (req, res)=>{
    res.send(Status.getOSInfo());
})

app.listen(8098, ()=> {
    console.log('App started and listening at 8098');
});