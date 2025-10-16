import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Main, Banner, Container } from "./styles";

import { useUser } from "../../hooks/UserContext";

export function Home() {
    console.log(useUser())
    return (
        <Main>
            <Banner>
                <h1>Bem-vindo(a)! <br />
                    <span>Esse cardápio está irrestível!</span>
                </h1>
            </Banner>
            <Container>
                <CategoriesCarousel />
                <OffersCarousel />
            </Container>
        </Main>
    );
}