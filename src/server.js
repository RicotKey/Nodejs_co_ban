import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
//import connection from './configs/connectDB';
require('dotenv').config();

const app = express();
const port = process.env.PORT ||  8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//setup ViewEngine
configViewEngine(app);

//init WebRoute
initWebRoute(app);

//init API
initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})