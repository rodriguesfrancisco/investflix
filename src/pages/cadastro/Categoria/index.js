import React from 'react';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>
        <button>
          Cadastrar
        </button>
      </form>
    </PageDefault>
  )
}

export default CadastroCategoria;