import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from "./PropiedadPreview"
import * as listadoPropiedadesCSS from "../css/listadoPropiedades.module.css"

const ListadoPropiedades = () => {
  const data = usePropiedades()
  const [propiedades, setPropiedades] = useState([])

  useEffect(() => {
    setPropiedades(data)
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <div>
        <h2
          css={css`
            margin-top: 5rem;
          `}
        >
          Nuestras Propiedades
        </h2>
      </div>
      <div className={listadoPropiedadesCSS.propiedades}>
        {propiedades.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </div>
    </>
  )
}

export default ListadoPropiedades
