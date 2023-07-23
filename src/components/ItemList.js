import Item from "./Item"

function ItemList({products}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">
        {products.map((p) => <Item key={p.codigo} {...p}/>)}
    </div>
  )
}

export default ItemList