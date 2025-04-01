import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } 
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } 
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição do livro`});
        }
    };

    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {  }
            res.status(201).json({message: "Criado com sucesso", livro: novoLivro});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro.`});
        }
    };
    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
        } 
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização do livro`});
        }
    };
    static async exluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro exluído com sucesso"});
        } 
        catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na exlusão do livro`});
        }
    };

};

export default LivroController;