import express from "express";
import connectaNaDataBase from "./config/dbConect.js";
import routes from "./routes/index.js";

const conexao = await connectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});

const app = express();
routes(app);

export default app;