import { NextApiRequest, NextApiResponse } from "next";

interface Ingredient {
  ingrediente: string;
  quantidade: string;
}

interface Receita {
  id: string;
  titulo: string;
  tipo: string;
  numeroPessoas: number;
  nivelDificuldade: string;
  ingredientes: Ingredient[];
  etapas: string[];
}

let receitas: Receita[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(receitas);
      break;
    case "POST":
      const newReceita: Receita = req.body;  
      receitas.push(newReceita);
      res.status(201).json(newReceita);
      break;
    case "PUT":
      const updatedReceita: Receita = req.body;
      const index = receitas.findIndex((r) => r.id === updatedReceita.id);
      if (index !== -1) {
        receitas[index] = updatedReceita;
        res.status(200).json(updatedReceita);
      } else {
        res.status(404).json({ message: "Receita não encontrada" });
      }
      break;
    case "DELETE":
      const { id } = req.query;
      const deleteIndex = receitas.findIndex((r) => r.id === id);
      if (deleteIndex !== -1) {
        receitas.splice(deleteIndex, 1);
        res.status(200).json({ message: "Receita deletada" });
      } else {
        res.status(404).json({ message: "Receita não encontrada" });
      }
      break;
    default:
      res.status(405).json({ message: "Método não permitido" });
      break;
  }
}
