import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = (props) => {

    const navigate = useNavigate(); //permite navegar programáticamente entre rutas de la  aplicación 

    const onLogout = () => {
        navigate(`/login`, {
            replace: true,    //permite realizar una navegación reemplazando la entrada actual del historial de navegación, en lugar de agregar una nueva entrada. (Evita que pueda regresar a la pag anterior)

        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) =>  `nav-item nav-link  ${isActive ? `active` : ""} ` } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) =>  `nav-item nav-link  ${isActive ? `active` : ""} ` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-link nav-item text-primary'>
                        Fernando
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}