import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from "./PropiedadPreview"
import * as listadoPropiedadesCSS from "../css/listadoPropiedades.module.css"
import useFiltro from "../hooks/useFiltro"

const ListadoPropiedades = () => {
  const data = usePropiedades()
  const [propiedades] = useState(data)
  const [filtrado, setFiltrado] = useState([])
  const { categoria, FiltroUI } = useFiltro()

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        propiedad => propiedad.categorias === categoria
      )
      setFiltrado(filtro)
    } else {
      setFiltrado(propiedades)
    }

    //eslint-disable-next-line
  }, [categoria])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>
      <FiltroUI />
      <ul className={listadoPropiedadesCSS.propiedades}>
        {filtrado.map(propiedadFiltrada => (
          <PropiedadPreview
            key={propiedadFiltrada.id}
            propiedad={propiedadFiltrada}
          />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
