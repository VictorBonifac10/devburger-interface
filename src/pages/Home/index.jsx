import { CardProduct } from "../../components/CardProduct";
import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Footer } from "../../components/Footer";
import { OffersCarousel } from "../../components/OffersCarousel";
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
            <Footer />
        </Main>
    );
}