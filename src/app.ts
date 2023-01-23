import express from "express";
import cors from "cors"
import { mainRoutes} from "./routes/routes.js"
const app = express()

app
    .use(express.json())
    .use(cors())
    .use(mainRoutes)
    .get("/health", (req, res) => res.send("OK!"))
    .listen(4000, () => console.log("running in port 4000"))
    
export default app;