import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

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

const RecipeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [receita, setReceita] = useState<Receita | null>(null);

  // Carrega os detalhes da receita
  useEffect(() => {
    if (id) {
      fetch(`https://67446b56b4e2e04abea2237b.mockapi.io/api/t1/receitas/${id}`)
        .then((response) => response.json())
        .then((data) => setReceita(data));
    }
  }, [id]);

  // Função para excluir a receita
  const handleDelete = () => {
    if (id) {
      fetch(`https://67446b56b4e2e04abea2237b.mockapi.io/api/t1/receitas/${id}`, {
        method: "DELETE",
      })
        .then(() => router.push("/"))
        .catch((error) => console.error("Erro ao excluir a receita:", error));
    }
  };

  if (!receita) return <div>Carregando...</div>;

  return (
    <Layout>
      <h1>{receita.titulo}</h1>
      <p><strong>Tipo:</strong> {receita.tipo}</p>
      <p><strong>Serve:</strong> {receita.numeroPessoas} pessoas</p>
      <p><strong>Nível de Dificuldade:</strong> {receita.nivelDificuldade}</p>

      <h3>Ingredientes:</h3>
      <ul>
        {receita.ingredientes.map((item, index) => (
          <li key={index}>{item.ingrediente} - {item.quantidade}</li>
        ))}
      </ul>

      <h3>Etapas de Preparo:</h3>
      <ol>
        {receita.etapas.map((etapa, index) => (
          <li key={index}>{etapa}</li>
        ))}
      </ol>

      <button
        onClick={() => router.push(`/receita/editar/${receita.id}`)}
        className="btn btn-secondary"
      >
        Editar
      </button>

      <button onClick={handleDelete} className="btn btn-danger">
        Excluir
      </button>
    </Layout>
  );
};

export default RecipeDetail;
