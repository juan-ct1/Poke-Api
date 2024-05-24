import '../sass/Card.scss';

const Card = ({name, img}) => {
  return(
    <div className="card"> 
    <div className="card_circle"></div>
      <p className="card_name">{name}</p>
      <img className="card_img" src={img} alt="Pokemon Img" />
    </div>
  )
    
}

export {Card}