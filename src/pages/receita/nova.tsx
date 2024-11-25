import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

// Definindo os tipos para ingredientes e receita
interface Ingredient {
  ingrediente: string;
  quantidade: string;
}

interface Receita {
  titulo: string;
  tipo: string;
  numeroPessoas: number;
  nivelDificuldade: string;
  ingredientes: Ingredient[];
  etapas: string[];
}

const NewRecipe = () => {
  const router = useRouter();

  // Inicializando o estado da receita com valores padrão
  const [receita, setReceita] = useState<Receita>({
    titulo: "",
    tipo: "",
    numeroPessoas: 0,
    nivelDificuldade: "",
    ingredientes: [{ ingrediente: "", quantidade: "" }],
    etapas: [""],
  });

  // Função para manipular a alteração de campos
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReceita({
      ...receita,
      [name]: value,
    });
  };

  // Função para manipular a alteração dos ingredientes
  const handleIngredientChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedIngredients = [...receita.ingredientes];

    // Garantindo que 'name' seja 'ingrediente' ou 'quantidade'
    if (name === "ingrediente" || name === "quantidade") {
      updatedIngredients[index][name] = value;
      setReceita({
        ...receita,
        ingredientes: updatedIngredients,
      });
    }
  };

  // Função para adicionar novo ingrediente
  const addIngredient = () => {
    setReceita({
      ...receita,
      ingredientes: [
        ...receita.ingredientes,
        { ingrediente: "", quantidade: "" },
      ],
    });
  };

  // Função para remover um ingrediente
  const removeIngredient = (index: number) => {
    const updatedIngredients = [...receita.ingredientes];
    updatedIngredients.splice(index, 1);
    setReceita({
      ...receita,
      ingredientes: updatedIngredients,
    });
  };

  // Função para manipular a alteração das etapas
  const handleStepChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSteps = [...receita.etapas];
    updatedSteps[index] = e.target.value;
    setReceita({
      ...receita,
      etapas: updatedSteps,
    });
  };

  // Função para adicionar nova etapa
  const addStep = () => {
    setReceita({
      ...receita,
      etapas: [...receita.etapas, ""],
    });
  };

  // Função para remover uma etapa
  const removeStep = (index: number) => {
    const updatedSteps = [...receita.etapas];
    updatedSteps.splice(index, 1);
    setReceita({
      ...receita,
      etapas: updatedSteps,
    });
  };

  // Função para enviar a receita para a MockAPI
  const handleSave = () => {
    fetch("https://67446b56b4e2e04abea2237b.mockapi.io/api/t1/receitas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receita),
    })
      .then(() => router.push("/"))
      .catch((error) => console.error("Erro ao salvar a receita:", error));
  };

  return (
    <Layout>
      <h1>Criar Nova Receita</h1>
      <form>
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={receita.titulo}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Tipo:
          <input
            type="text"
            name="tipo"
            value={receita.tipo}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Número de Pessoas:
          <input
            type="number"
            name="numeroPessoas"
            value={receita.numeroPessoas}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Nível de Dificuldade:
          <input
            type="text"
            name="nivelDificuldade"
            value={receita.nivelDificuldade}
            onChange={handleInputChange}
          />
        </label>

        <h3>Ingredientes:</h3>
        {receita.ingredientes.map((ingredient, index) => (
          <div key={index} className="ingredient-form">
            <input
              type="text"
              name="ingrediente"
              placeholder="Ingrediente"
              value={ingredient.ingrediente}
              onChange={(e) => handleIngredientChange(index, e)}
            />
            <input
              type="text"
              name="quantidade"
              placeholder="Quantidade"
              value={ingredient.quantidade}
              onChange={(e) => handleIngredientChange(index, e)}
            />
            <button
              type="button"
              onClick={() => removeIngredient(index)}
              className="btn btn-danger"
            >
              Remover Ingrediente
            </button>
          </div>
        ))}
        <button type="button" onClick={addIngredient} className="btn btn-primary">
          Adicionar Ingrediente
        </button>

        <h3>Etapas de Preparo:</h3>
        {receita.etapas.map((step, index) => (
          <div key={index} className="step-form">
            <input
              type="text"
              value={step}
              onChange={(e) => handleStepChange(index, e)}
              placeholder={`Etapa ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeStep(index)}
              className="btn btn-danger"
            >
              Remover Etapa
            </button>
          </div>
        ))}
        <button type="button" onClick={addStep} className="btn btn-primary">
          Adicionar Etapa
        </button>

        <br />
        <button type="button" onClick={handleSave} className="btn btn-success">
          Salvar Receita
        </button>
      </form>
    </Layout>
  );
};

export default NewRecipe;
