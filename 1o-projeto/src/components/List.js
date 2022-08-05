import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Renault" lancamento={2020} />
                <Item marca="Volkswagen" lancamento={1995} />
                <Item marca="Fiat" lancamento={2012} />
            </ul>
        </>
    )
}

export default List