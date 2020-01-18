export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartITem = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingCartITem) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    })
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};