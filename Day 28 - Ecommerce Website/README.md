# Gadget Arena E-commerce Website

## Overview

Gadget Arena is a modern e-commerce website specializing in electronics and gadgets. Built with HTML, CSS, and JavaScript, it offers a seamless shopping experience for tech enthusiasts.

## Preview: https://gadget-arena-site.netlify.app/

## Features

- Dynamic product listing grouped by categories (Laptops, Gaming Devices, Mobiles)
- Interactive shopping cart functionality
- Like/favorite product option
- Quantity adjustment for products
- Checkout process with order summary
- Responsive design for various screen sizes

## Project Structure

```
gadget-arena/
│
├── index.html
├── style.css
├── shopping.js
├── script.js
├── checkout.html
├── checkout.css
├── checkout.js
├── favicon.png
├── products/
│   └── [product images]
├── assets/
│   └── [hero slider images]
└── README.md
```

## Technologies Used

- HTML
- CSS
- JavaScript

## Key Components

- `index.html`: Main page with product listings and shopping cart
- `checkout.html`: Checkout form and order summary
- `shopping.js`: Handles product display, cart functionality, and local storage
- `checkout.js`: Manages the checkout process and order confirmation
- `style.css`: Styles for the entire website

## JavaScript Functionality

- Dynamic product rendering from a predefined array
- Shopping cart management (add, remove, update quantities)
- Local storage utilization for cart persistence
- Checkout process simulation

## Customization

To add or modify products, edit the `products` array in `shopping.js`. Each product object should include:

```javascript
{
    image: 'path/to/image.png',
    name: 'Product Name',
    price: 10000,
    rating: 4.5,
    category: 'Category Name'
}
```

## Contact

Feel free to reach out with any questions or feedback:

- **GitHub**: [megh-bari](https://github.com/megh-bari)
- **Twitter**: [@megh_bari](https://x.com/megh_bari)
- **Email**: [meghbari01@gmail.com](mailto:meghbari01@gmail.com).

## Author

This repo is maintained by @ Megh bari.

## Happy Coding 🎈
