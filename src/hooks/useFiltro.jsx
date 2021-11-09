import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Formulario = styled.form`
  width: 100%;
  display: flex;
  border: solid 1px #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`

const Selector = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: "Lato", sans-serif;
  outline: none;
`

const useFiltro = () => {
  const [categoria, setCategoria] = useState("")
  const { categoriasResults } = useStaticQuery(graphql`
    query {
      categoriasResults: allStrapiCategorias {
        nodes {
          id
          Categoria
        }
      }
    }
  `)
  const categorias = categoriasResults.nodes
  const FiltroUI = () => (
    <Formulario>
      <Selector onChange={e => setCategoria(e.target.value)} value={categoria}>
        <option value=""> -- Filtrar -- </option>
        {categorias.map(opcion => (
          <option key={opcion.id} value={opcion.Categoria}>
            {opcion.Categoria}
          </option>
        ))}
      </Selector>
    </Formulario>
  )

  return {
    categoria,
    FiltroUI,
  }
}

export default useFiltro
