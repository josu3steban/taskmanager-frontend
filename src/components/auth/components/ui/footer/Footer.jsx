import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <nav className="flex flex-row">
        <Link
            to='/auth/register'
        >
            ¿No tienes cuenta? ¡Registrate!
        </Link>

        <Link
            to='/auth/register'
        >
            ¿No tienes cuenta? ¡Registrate!
        </Link>
    </nav>
  )
}
