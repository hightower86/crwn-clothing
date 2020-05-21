const addItemToCart = (addedItem, itemsCart) => {
  console.log('addedItem', addedItem);
  console.log('itemsCart', itemsCart);

  const existedItem = itemsCart.find((item) => item.id === addedItem.id);

  if (existedItem) {
    return itemsCart.map((item) =>
      item.id === addedItem.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }

  return [...itemsCart, { ...addedItem, quantity: 1 }];
};

export default addItemToCart;
