function Card(props) {

  const { name, plato } = props.plato;

    return (
      <div>
        <h2>{`Hola ${name}`}</h2>
        <p>{`Tu plato favorito es ${plato}`}</p>
      </div>
    );
}
  
export default Card;