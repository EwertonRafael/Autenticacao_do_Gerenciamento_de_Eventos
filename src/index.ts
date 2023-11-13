import express from "express";
import router from "./routes/router"

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use(router);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});