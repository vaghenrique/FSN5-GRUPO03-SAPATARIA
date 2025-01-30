import React from 'react'

const Modal = ({}) => {
  return (
    <div className='modal-window' id='modal-window'>
        <div className='modal'>
            <button className='close-button' id='close-button'>X</button>
            <h1>Mais detalhes do produto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat illo laboriosam iusto reiciendis alias eum unde officiis vero consequuntur dicta, adipisci perspiciatis? Cumque alias, odit quia nostrum deleniti minus?</p>
        </div>
    </div>
  )
}

export default Modal