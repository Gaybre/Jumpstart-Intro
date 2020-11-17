import React from 'react'

const Button = ({name, typeStyle, onClick}) => {

  // defined the style type of button to set a className
  const chosedType = typeStyle ? `btn--${typeStyle}` : 'btn--normal'

  return (
    <button
      className={chosedType}
      onClick={onClick}
    >
      {name || 'Aceptar'}
    </button>
  )
}

export default Button