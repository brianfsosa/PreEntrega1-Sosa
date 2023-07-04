function CartWidget() {
    const productsInCart = [
        {productName: 'Armadura'},
        {productName: 'Armadura'},
        {productName: 'Armadura'},
        {productName: 'Armadura'},
    ]

  return (
    <div>
      <a href="">
        <i className="fa-solid fa-cart-shopping fa-lg"></i>
        <span className="absolute -mt-3 -ml-2 rounded-full bg-red-500 px-[0.9em] py-[0.50em] text-[0.7rem] font-bold leading-none text-white font-sans ">
          {productsInCart.length}
        </span>
      </a>
    </div>
  );
}

export default CartWidget;
