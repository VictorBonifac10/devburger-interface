import Logo from '../../assets/logo-devburger.png'
import { navLinks } from "./navLinks"
import { Container, Footer, NavLinkContainer, NavLink } from './styles';
import { useUser } from '../../hooks/UserContext';
import { useResolvedPath } from 'react-router-dom';

export function SideNavAdmin() {

    const { logout } = useUser();
    const { pathname } = useResolvedPath(); //mostra onde estamos

    return (

        <Container>
            <img src={Logo} alt="Logo DevBurger" />
            <NavLinkContainer>
                {navLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        $isActive={pathname === link.path}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <i class="ri-logout-circle-line"></i>
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>

    );

}