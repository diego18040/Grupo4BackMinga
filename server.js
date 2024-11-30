import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./router/index.js"


const server = express()
const PORT = process.env.PORT || 8080
const ready = () => console.log("server ready in port :" + PORT)


server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(cors())
server.use(morgan("dev"))

server.use((req, res, next) => {
    res.set({
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    next ();
  });


server.listen(PORT, ready)


server.use("/api", indexRouter)