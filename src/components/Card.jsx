import './Card.css'

const Card = ({ usuario }) => {


  const { nombre, libro } = usuario;
  return (
    <div className='card'>
      <h2>Bienvenido {nombre}</h2>
      <h2>{libro} es un muy buen libro</h2>
    </div>
  );
};

export default Card;
