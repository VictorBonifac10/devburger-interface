import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { useEffect, useState } from "react"
import { api } from '../../../services/api';
import { Container } from './styles'


export function Orders() {

    const [orders, setOrders] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => { //chamada a api
        async function loadOrders() {
            const { data } = await api.get('orders');

            setOrders(data);
        }

        loadOrders();

    }, []);

    function createData(order) { //dados que serao exibidos
        return {
            name: order.user.name,
            orderId: order._id,
            date: order.createdAt,
            status: order.status,
            products: order.products,
        };
    }

    useEffect(() => {
        const newRows = orders.map(order => createData(order));

        setRows(newRows);
    }, [orders]); // mapeando orders

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell className='titulo'>Pedido</TableCell>
                            <TableCell className='titulo'>Cliente</TableCell>
                            <TableCell className='titulo'>Data do Pedido</TableCell>
                            <TableCell className='titulo'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row
                                key={row.orderId}
                                row={row}
                                orders={orders}
                                setOrders={setOrders}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
