import clashLogo from '../../assets/navbar/logo.png';
import { Link, NavLink } from 'react-router-dom';
import '../navbar/navbar.css'
import '../../assets/styles/global-styles.css'
import { Button } from '../button/Button';
import classNames from 'classnames';


interface IProps {
    className?: string;
    [rest: string]: any;
}

export const Navbar = ({ className, ...rest }: IProps) => {
    return (
        <nav className={classNames('navbar navbar-expand-sm navbar-dark nav-background row', className)} {...rest}>
            <div className={classNames('col-md-2 col-3', className)}>
                <Link
                    to="/"
                >
                    <img src={clashLogo} className={classNames('img-fluid w-50', className)} alt="Responsive" />
                </Link>
            </div>
            <div className={classNames('navbar-collapse row col-6 col-md-8', className)}>
                <div className={classNames('nav-item', className)}>
                    <NavLink
                        to="/"
                        className={classNames('navbar-txt col-3', className)}
                    >
                        Inicio
                    </NavLink>
                </div>
                <div className={classNames('nav-item', className)}>
                    <NavLink
                        to="/clans"
                        className={classNames('navbar-txt col-3', className)}
                    >
                        Clans
                    </NavLink>
                </div>
            </div>
            <div className={classNames('navbar-collapse col-md-2 col-3 collapse w-100 order-3 dual-collapse2 d-flex justify-content-end', className)}>
                <ul className={classNames('navbar-nav ml-auto', className)}>
                    <span className={classNames('nav-item nav-link text-muted', className)}>
                        Daniela
                    </span>
                </ul>
            </div>
        </nav>
    )
}
