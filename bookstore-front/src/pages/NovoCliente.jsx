import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addCliente } from "../api/clientes";
import toast from "react-hot-toast";

function NovoCliente() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function salvarCliente(data) {
    addCliente(data)
      .then((resposta) => {
        toast.success(resposta.message);
        navigate("/clientes");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  return (
    <main className="mt-4 container">
      <h1>Novo cliente</h1>
      <br />
      <form onSubmit={handleSubmit(salvarCliente)}>
        <div className="mt-3">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="form-control mt-2"
            {...register("nome", { required: true, maxLength: 200 })}
          />
          {errors.nome && (
            <small className="text-danger">O nome é inválido!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="cpf">CPF</label>
          <input
            type="cpf"
            id="cpf"
            className="form-control mt-2"
            {...register("cpf", { required: true, maxLength: 200 })}
          />
          {errors.cpf && (
            <small className="text-danger">O cpf é inválido!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control mt-2"
            {...register("email", { required: true, maxLength: 200 })}
          />
          {errors.email && (
            <small className="text-danger">O email é inválido!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            className="form-control mt-2"
            {...register("telefone", { required: true, maxLength: 200 })}
          />
          {errors.telefone && (
            <small className="text-danger">O telefone é inválido!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            type="date"
            id="dataNascimento"
            className="form-control mt-2"
            {...register("dataNascimento", { required: true, maxLength: 200 })}
          />
          {errors.dataNascimento && (
            <small className="text-danger">
              A Data de Nascimento é inválida!
            </small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="uf">UF</label>
          <input
            type="text"
            id="uf"
            className="form-control mt-2"
            {...register("endereco.uf", { required: true, maxLength: 2 })}
          />
          {errors.endereco?.uf && (
            <small className="text-danger">A UF é inválida!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            className="form-control mt-2"
            {...register("endereco.cidade", { required: true, maxLength: 200 })}
          />
          {errors.endereco?.cidade && (
            <small className="text-danger">A cidade é inválida!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            className="form-control mt-2"
            {...register("endereco.cep", { required: true, maxLength: 8 })}
          />
          {errors.endereco?.cep && (
            <small className="text-danger">O CEP é inválido!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            id="bairro"
            className="form-control mt-2"
            {...register("endereco.bairro", { required: true })}
          />
          {errors.endereco?.bairro && (
            <small className="text-danger">A rua é inválida!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="rua">Rua</label>
          <input
            type="text"
            id="rua"
            className="form-control mt-2"
            {...register("endereco.rua", { required: true })}
          />
          {errors.endereco?.rua && (
            <small className="text-danger">A rua é inválida!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="numero">Número</label>
          <input
            type="text"
            id="numero"
            className="form-control mt-2"
            {...register("endereco.numero", { required: true })}
          />
          {errors.endereco?.numero && (
            <small className="text-danger">O número é inválido!</small>
          )}
        </div>
        <Button variant="dark" className="mt-3" type="submit">
          Cadastrar
        </Button>
      </form>
    </main>
  );
}

export default NovoCliente;
