import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";

interface Recipe {
  id: string;
  titulo: string;
  tipo: string;
  numeroPessoas: number;
  nivelDificuldade: string;
}

const Home = () => {
  const [receitas, setReceitas] = useState<Recipe[]>([]);
  const router = useRouter();

  // Carrega as receitas da MockAPI
  useEffect(() => {
    fetch("https://67446b56b4e2e04abea2237b.mockapi.io/api/t1/receitas")
      .then((response) => response.json())
      .then((data) => setReceitas(data));
  }, []);

  // Função para navegar até a página de detalhes da receita
  const handleViewDetails = (id: string) => {
    router.push(`/receita/${id}`);
  };

  return (
    <Layout>
      <h1>Receitas</h1>
      <button
        onClick={() => router.push("/receita/nova")}
        className="btn btn-primary"
      >
        Criar nova receita
      </button>
      <div className="recipe-list">
        {receitas.map((receita) => (
          <div key={receita.id} className="recipe-card">
            <h3
              onClick={() => handleViewDetails(receita.id)}
              style={{ cursor: "pointer", color: "#007bff" }}
            >
              {receita.titulo}
            </h3>
            <p>Tipo: {receita.tipo}</p>
            <p>Serve: {receita.numeroPessoas} pessoas</p>
            <p>Dificuldade: {receita.nivelDificuldade}</p>
            <button
              onClick={() => router.push(`/receita/editar/${receita.id}`)}
              className="btn btn-secondary"
            >
              Editar
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
