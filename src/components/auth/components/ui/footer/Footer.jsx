import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <nav className="flex flex-row">
        <Link
            to='register'
        >
            ¿No tienes cuenta? ¡Registrate!
        </Link>

        <Link
            to='register'
        >
            ¿No tienes cuenta? ¡Registrate!
        </Link>
    </nav>
  )
}
