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
import { Container, FilterOption, Filter } from './styles'
import { orderStatusOptions } from './OrderStatus';


export function Orders() {

    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [rows, setRows] = useState([]);
    const [activeStatus, setActiveStatus] = useState(0);

    useEffect(() => { //chamada a api
        async function loadOrders() {
            const { data } = await api.get('orders');

            setOrders(data); //recebe os dados da api
            setFilteredOrders(data); //recebe os dados da api
        }

        loadOrders(); //chama a função 

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
        const newRows = filteredOrders.map(order => createData(order));

        setRows(newRows);
    }, [filteredOrders]); // mapeando orders

    function handleStatus(status) {
        if (status.id === 0) {
            setFilteredOrders(orders);
        } else {
            const newOrders = orders.filter(order => order.status === status.value);

            setFilteredOrders(newOrders);
        }

        setActiveStatus(status.id);
    }

    useEffect(() => {
        if (activeStatus === 0) {
            setFilteredOrders(orders)
        } else {
            const statusIndex = orderStatusOptions.findIndex(
                (item) => item.id === activeStatus,
            );

            const newFilteredOrders = orders.filter(
                (order) => order.status === orderStatusOptions[statusIndex].value
            );

            setFilteredOrders(newFilteredOrders)
        }

    }, [orders]); // mapeando orders

    return (
        <>
            <Filter>
                {orderStatusOptions.map((status) => (
                    <FilterOption
                        key={status.id}
                        onClick={() => handleStatus(status)}
                        $isActiveStatus={activeStatus === status.id}>
                        {status.label}
                    </FilterOption>
                ))}
            </Filter>

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

        </>
    );
}
