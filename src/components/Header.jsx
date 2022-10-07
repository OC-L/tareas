import Button from './Button'

const Header = ({titulo, onAdd, mostrarForm}) => {

  const onClick = () => {
	console.log('click')
  }

  return (
    <header className='header'>
        <h1>{titulo}</h1>
        <Button texto ={mostrarForm ? "Ocultar" : "Agregar"} color={mostrarForm ? "gray" : "black"} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  titulo: 'Tareas'
}

export default Header