import mongoose from "mongoose";

let url  = process.env.URI_MONGO

async function contectBasesDatos() {
    try {
        await mongoose.connect(url)
        console.log("Bases de datos conectada");
    } catch (error) {
        console.log(error);
    }
}
contectBasesDatos()