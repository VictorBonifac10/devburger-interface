import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Container, ProductImage, EditButton, Icon } from "./styles";
import { formatPrice } from '../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

export function Products() {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');

            setProducts(data);
        }

        loadProducts();

    }, []);

    function isOffer(offer) {
        if (offer) {
            return <i className="ri-checkbox-circle-line"></i>
        } else {
            return <i className="ri-close-circle-line"></i>
        }
    }

    function EditProduct(product) {
        navigate('/admin/editar-produto', { state: { product } });
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="center">Valor</TableCell>
                            <TableCell align="center">Oferta</TableCell>
                            <TableCell align="center">Imagem</TableCell>
                            <TableCell align="center">Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="center">{formatPrice(product.price)}</TableCell>
                                <TableCell align="center">
                                    <Icon>
                                        {isOffer(product.offer)}
                                    </Icon>
                                </TableCell>
                                <TableCell align="center"><ProductImage src={product.url} alt="produto" /></TableCell>
                                <TableCell align="center">
                                    <EditButton onClick={() => EditProduct(product)}>
                                        <i class="ri-edit-2-fill"></i>
                                    </EditButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
} 