import express  from "express"; 
import { AppDataSource } from "./data-source";
import { routes } from "./routes";
import * as bodyParser from "body-parser";
import { handleError } from "./error-handler";

AppDataSource.initialize()
    .then(()=> {console.log("DB Connected")})
    .catch((err)=> {console.error("DB Connection failed",err)})

export const app = express();

app.use(bodyParser.json());

app.use("/api/v1",routes);

app.use(handleError)

// start the Express server
app.listen( 3000, () => {
    console.log( `server started at http://localhost:${ 8080 }` );
}); 