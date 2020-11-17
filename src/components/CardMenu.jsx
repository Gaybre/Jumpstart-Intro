import React from 'react'
import Icon from './Icon'

const CardMenu = () => {
  return (
    <div className="card-menu">
      <ul className="card-menu-options">
        <li>
          <Icon
            type="download"
            size="12"
          />
          <p>
            Download
          </p>
        </li>
        <li>
          <Icon
            type="print"
            size="18"
          />
          <p>
            Print
          </p>
        </li>
        <li>
          <Icon
            type="delete"
            size="15"
          />
          <p>
            Delete
          </p>
        </li>
      </ul>
    </div>
  )
}

export default CardMenu