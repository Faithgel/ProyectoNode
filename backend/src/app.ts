import express from "express";
import morgan from "morgan";
import cors from "cors";

//Import routes here
import userRoutes from "./routes/user.routes";
import homeRoutes from "./routes/home.routes";
import dentalRoutes from "./routes/dental.routes";
import roleRoutes from "./routes/role.routes";
import bodyParser from "body-parser";
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());  //new line of code
app.use(bodyParser.urlencoded({ extended: false }));  //new line of cod

//Use routes here
app.use(userRoutes);
app.use(homeRoutes);
app.use(dentalRoutes);
app.use(roleRoutes);

export default app;
