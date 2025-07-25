import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

connectDB()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)
        );
    })
    .catch((err) => {
        console.error("Mongodb connection error", err);
        process.exit(1);
    });

const PORT = process.env.PORT || 8000;