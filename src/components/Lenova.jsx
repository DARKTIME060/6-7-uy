import React, { useState } from 'react'
import lenova from '../images/lenova.webp'

function Lenova() {
  const [active, setActive] = useState(false)
  return (
    <div className='lenova container'>
      <div className={`lenova__box  ${active === true ? 'active' : ''}`} onClick={() => setActive(true)}>
        <img src={lenova} alt="" className="lenova__box-image" />
        <p className="lenova__box-text">Ноутбуки ленова по низком цене !</p>
      </div>
      <div className={`lenova__box  ${active === true ? 'active' : ''}`} onClick={() => setActive(true)}>
        <img src={lenova} alt="" className="lenova__box-image" />
        <p className="lenova__box-text">Ноутбуки ленова по низком цене !</p>
      </div>
      <div className={`lenova__box  ${active === true ? 'active' : ''}`} onClick={() => setActive(true)}>
        <img src={lenova} alt="" className="lenova__box-image" />
        <p className="lenova__box-text">Ноутбуки ленова по низком цене !</p>
      </div>
      <div className={`lenova__click  ${active === true ? 'active' : ''}`}>
        <button className="lenova__click-close" onClick={() => setActive(false)}>X</button>
        <img src={lenova} alt="" className="lenova__click-img" />
        <div className="lenova__click-info" >
          <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Наш над буквенных океана своих запятой рот образ строчка переписывается маленький. Языкового подзаголовок о большой на берегу запятой текстами, семь моей то раз коварных по всей власти. Коварный, что? Это меня деревни большого подзаголовок послушавшись, пустился бросил великий, предложения не своих безорфографичный!</p>
        </div>
      </div>

    </div>


  )
}

export default Lenova