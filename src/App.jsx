import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [name, setName] = useState('')
  const [plato, setPlato] = useState('')
  const [error, setError] = useState('')
  const [platoFav, setPlatoFav] = useState({})
  const [submitted, setSubmitted] = useState(false)


  const handleSubmit = (e) =>{

    e.preventDefault()

    if (!name || !plato) {
      setError('Porfavor rellena todos los campos')
      return
    }

    if (name.length < 3){
      setError(`La longitud minima del campo name es de 3`)
      return
    }

    if (plato.length < 6){
      setError(`La longitud minima del campo plato es de 6`)
      return
    }

    name.trimStart();

    const platoFavorito = {
      name: name,
      plato: plato
    }

    setPlatoFav(platoFavorito)
    setSubmitted(true)
  }

  return (
    <div>
      <h1>Elige tu plato favorito</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='imgUrl'>Plato favorito</label>
          <input
            type='text'
            name='plato'
            value={plato}
            onChange={(e) => setPlato(e.target.value)}
          />
        </div>
        <button type='submit'>Adicionar Plato</button>
      </form>
      {error && <p>{error}</p>}

      {submitted && <Card props={platoFav} />}

    </div>
  )
}

export default App
