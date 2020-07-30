import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(evento) {
    const { value } = evento.target;
    const key = evento.target.getAttribute('name');
    setValue(key, value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://xicoflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([...resposta]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategorias([...categorias, values]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0
        && <div>Carregando...</div>}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`} style={{ color: categoria.cor }}>
            {categoria.nome}
            {' '}
            /
            {categoria.descricao}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
