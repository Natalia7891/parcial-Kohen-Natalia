import { useState } from 'react';
import Card from './Card';
import './Form.css'


const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    libro: '',
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.nombre.trimStart().length >= 3 && usuario.libro.length >= 6) {
      setMostrar(true);
      setError(false);
    }else{
      setError(true)
    }
  };

  return (
    <div className='contenedor'>
      {mostrar ? (
        <Card usuario={usuario} />
      ) : (
        <form className="formulario" onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            value={usuario.nombre}
            onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
          />
          <label>Mi libro favorito es:</label>
          <input
            type="text"
            value={usuario.libro}
            onChange={(e) => setUsuario({ ...usuario, libro: e.target.value })}
          />
          <button>Enviar</button>
        </form>
      )}
      {error ? (
        <p className="error">
          Por favor chequea que la información sea correcta
        </p>
      ):null }
    </div>
  );
};

export default Form;
