import { useCart } from "../../hooks/CartContext"
import { formatPrice } from "../../utils/formatPrice";
import { Table } from "../index"
import { ButtonGroup, EmptyCart, ProductImage, ProductTotalPrice, TrashIcon } from "./styles";

export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Items</Table.Th>
                    <Table.Th>Valor</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map(product => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImage src={product.url} />
                            </Table.Td>
                            <Table.Td>
                                {product.name}
                            </Table.Td>
                            <Table.Td>
                                {product.currencyValue}
                            </Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={() => decreaseProduct(product.id)}>-</button>
                                    {product.quantity}
                                    <button onClick={() => increaseProduct(product.id)}>+</button>
                                </ButtonGroup>
                            </Table.Td>
                            <Table.Td>
                                <ProductTotalPrice>
                                    {formatPrice(product.quantity * product.price)}
                                </ProductTotalPrice>
                            </Table.Td>
                            <Table.Td>
                                <TrashIcon onClick={() => deleteProduct(product.id)}>
                                    <i class="ri-delete-bin-6-fill"></i>
                                </TrashIcon>
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : (<EmptyCart>Carrinho Vazio</EmptyCart>)}
            </Table.Body>
        </Table.Root>
    )
}