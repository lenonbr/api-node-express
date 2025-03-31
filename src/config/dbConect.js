import mongoose from "mongoose";

async function connectaNaDataBase() {
    mongoose.connect("mongodb+srv://lenonbr:admin1405@cluster0.nimkzst.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}

export default connectaNaDataBase;



