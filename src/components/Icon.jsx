import React from 'react'

const Icon = ({type, setColor, size, setMargin, onClick}) => {

  const isType = type ? type : 'bylaws'
  const isColor = setColor ? setColor : '0F2137'
  const isSize = size ? size : '20'
  const isMargin = setMargin ? setMargin : ''

  return (
    <i
      className={`icon-${isType}`}
      style={{color: `#${isColor}`, fontSize: `${isSize}px`, margin: `${isMargin}`}}
      onClick={onClick}
    />
  )
}

export default Icon
