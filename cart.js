const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  if (!Array.isArray(cartItems)) {
    throw new Error("cartItems must be an array.");
  }

  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { 
    const item = cartItems[i];
    

    if (!item || typeof item.price !== 'number') {
      throw new Error(`Invalid item at index ${i}: price must be a number.`);
    }

    total += item.price;
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (typeof total !== 'number' || typeof discountRate !== 'number') {
    throw new Error('Both total and discountRate must be numbers.');
  }
  if (discountRate < 0 || discountRate > 1) {
    throw new Error('discountRate must be between 0 and 1.');
  }
  if (total < 0) {
    throw new Error('Total cannot be negative.');
  }

  return total - total * discountRate;
}

function generateReceipt(cartItems, total) {
  if (!Array.isArray(cartItems)) {
    throw new Error("cartItems must be an array.");
  }

  if (typeof total !== "number" || isNaN(total)) {
    throw new Error("Total must be a valid number.");
  }
  
  let receipt = "Items:\n";
  cartItems.forEach((item, index) => {
    if (!item || typeof item.name !== "string" || typeof item.price !== "number") {
      throw new Error(`Invalid item at index ${index}. Each item must have a name (string) and price (number).`);
    }
    receipt += `${item.name}: $${item.price.toFixed(2)}\n`;
  });
  
  receipt += `Total: ${total.toFixed(2)}`;
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
