import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

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

const EditRecipe = () => {
  const router = useRouter();
  const { id } = router.query;
  const [receita, setReceita] = useState<Receita | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://67446b56b4e2e04abea2237b.mockapi.io/api/t1/receitas/${id}`)
        .then((response) => response.json())
        .then((data) => setReceita(data));
    }
  }, [id]);

  // Função para salvar a receita
  const handleSave = () => {
    if (receita) {
      fetch(`https://67446b56b4e2e04abea2237b.mockapi.io/api/t1/receitas/${receita.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(receita),
      })
        .then(() => router.push(`/receita/${receita.id}`))
        .catch((error) => console.error("Erro ao salvar a receita:", error));
    }
  };

  if (!receita) return <div>Carregando...</div>;

  return (
    <Layout>
      <h1>Editar Receita</h1>
      <form>
        <label>
          Título:
          <input
            type="text"
            value={receita.titulo}
            onChange={(e) => setReceita({ ...receita, titulo: e.target.value })}
          />
        </label>
        <label>
          Tipo:
          <input
            type="text"
            value={receita.tipo}
            onChange={(e) => setReceita({ ...receita, tipo: e.target.value })}
          />
        </label>
        <label>
          Número de Pessoas:
          <input
            type="number"
            value={receita.numeroPessoas}
            onChange={(e) => setReceita({ ...receita, numeroPessoas: +e.target.value })}
          />
        </label>
        <label>
          Nível de Dificuldade:
          <input
            type="text"
            value={receita.nivelDificuldade}
            onChange={(e) => setReceita({ ...receita, nivelDificuldade: e.target.value })}
          />
        </label>

        <button type="button" onClick={handleSave} className="btn btn-primary">
          Salvar Alterações
        </button>
      </form>
    </Layout>
  );
};

export default EditRecipe;
