import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({ path: "./.env" });

const PORT: number = parseInt(process.env.PORT || "7002", 10);

app.listen(PORT, () => {
    console.log(`Load balancer started at port no. ${PORT}`);
});