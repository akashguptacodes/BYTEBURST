import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.URI, { dbName: "MERN_STACK_EVENT_MANAGEMENT" }).then(() => {
        console.log("Connected to database");
    }).catch((err) => {
        console.log("Error ", err);
    })
}