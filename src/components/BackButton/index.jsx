import { useNavigate } from "react-router-dom";
import { Container, Button } from "./styles";

export function BackButton() {

    const navigate = useNavigate();

    return (
        <Container>
            <Button

                onClick={() => {
                    navigate(
                        {
                            pathname: '/',
                        }
                    )
                }}>Voltar</Button>
                
        </Container>
    )
}