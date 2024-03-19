import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({
    limit:"20kb",
}));

//  for understanding that url comes from any format so we need to parse it
app.use(express.urlencoded({extended:true}));

//  store anythings like pdf or images
app.use(express.static('public'));

//  for parsing cookies

app.use(cookieParser());


// route import 
import userRouter from './routes/user.route.js';


// routes declaration
app.use('/api/v1/users',userRouter);

// create router
app.get('/',(req,res)=>{
    res.send("Server is working fine")
})



export  {app};