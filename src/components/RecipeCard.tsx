import { useRouter } from "next/router";

interface Recipe {
  id: string;
  titulo: string;
  tipo: string;
  numeroPessoas: number;
  nivelDificuldade: string;
}

const RecipeCard = ({ receita }: { receita: Recipe }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/receita/${receita.id}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer", marginBottom: "20px" }}>
      <h3>{receita.titulo}</h3>
      <p>{receita.tipo}</p>
      <p>{`Serve: ${receita.numeroPessoas} pessoas`}</p>
      <p>{`Dificuldade: ${receita.nivelDificuldade}`}</p>
    </div>
  );
};

export default RecipeCard;
