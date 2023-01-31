import { useState } from 'react'
import '../../utils/styles/Collapse.css'

function Collapse({ props, title }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  const displayProps = () => {
    if (typeof props === 'object') {
      return (
        <ul>
          {props.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )
    } else {
      return <p>{props}</p>
    }
  }

  return (
    <div className="collapse">
      <div className="collapse_top" onClick={() => handleClick()}>
        <h3 className="collapse_title">{title}</h3>
        <button className="collapse_button" type="button">
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </button>
      </div>
      {isOpen && (
        <div
          className={
            isOpen ? 'collapse_content  collapse_active' : 'collapse_content'
          }
        >
          {displayProps()}
        </div>
      )}
    </div>
  )
}

export default Collapse
