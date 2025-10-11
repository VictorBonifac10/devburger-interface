import Logo from '../../assets/logo-devburger.png'
import { Banner, Container, Content, Title } from './styels'

export function Cart(){
    return(
        <Container>
            <Banner>
                <img src={Logo} alt="logo-devburger" />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                {/*<CarteItems />
                <CartResume />*/}
            </Content>
        </Container>
    )
}