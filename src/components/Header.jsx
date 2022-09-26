import Button from './Button'

const Header = ({titulo}) => {

  const onClick = () => {
	console.log('click')
  }

  return (
    <header className='header'>
        <h1>{titulo}</h1>
        <Button texto = 'Agregar' color = 'black' onClick={onClick}/>
    </header>
  )
}

export default Header