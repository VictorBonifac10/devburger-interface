import { Container, Banner, CategoryMenu, ProductsContainer } from "./styles"

export function Menu() {
    return (
        <Container>
            <Banner>
                <h1>O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTA AQUI
                    <span>Esse cardápio está irrestível!</span>
                </h1>
            </Banner>
            <CategoryMenu></CategoryMenu>

            <ProductsContainer></ProductsContainer>
        </Container>

    );
}