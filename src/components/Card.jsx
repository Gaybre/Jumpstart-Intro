import React from 'react'

import Icon from './Icon'
import Button from './Button'
import CardMenu from './CardMenu';

const Card = ({title, body}) => {
  //if there is not props, will be added example data

  return (
    <div className="card">

      {/* card menu section */}
      <div className="card__menu">
        <Icon
          type="options"
          setColor="343D4880"
        />
        <div className="card__menu-menu">
          <CardMenu />
        </div>
      </div>

      {/* card header section */}
      <div className="card__header">
        <Icon
          setColor="DA0703"
          size="25"
        />
      </div>

      {/* card body section */}
      <div className="card__body">
        <h1>{title || 'Corporate Bylaws'}</h1>
        <p>
        {
          body || 'An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors.'
        }
        </p>
      </div>

      {/* card footer section */}
      <div className="card__footer">
        <Button
          name="View document"
          typeStyle="outline"
        />
        <div className="card__footer-visual" />
      </div>

    </div>
  )
}

export default Card