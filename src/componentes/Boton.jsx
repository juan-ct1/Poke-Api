import "../sass/Boton.scss"

 
const Boton = ({icon,handleClick}) => {
  return (
    <div className="btn-box">
    <button 
    className="btn"
    onClick={handleClick}
    >
      {icon}
    </button>
    <div className="btn-shadow"></div>
    </div>
  )
}

export {Boton}