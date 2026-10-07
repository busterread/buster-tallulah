/* ===== SHOP PRODUCTS =====
   Edit this file to add, remove, or update items — nothing else needs to
   change. Each product needs:
     name         - product name shown on the card
     price        - number, in GBP (rendered as "£NN")
     image        - path to the product photo (root-relative, e.g. "/assets/shop-tee.jpg")
     description  - one short line shown under the name
     etsyUrl      - the Etsy listing URL; checkout happens entirely on Etsy,
                    with Gelato handling printing and shipping. This site
                    never collects payment or cart data.

   These are placeholders: swap the image and etsyUrl for each product below
   once the real Etsy listings and product photos are ready. */
const PRODUCTS = [
  {
    name: 'The Little Lady Matchbox Tee',
    price: 28,
    image: '/assets/shop-placeholder.svg',
    description: 'Soft cotton tee printed with the Little Lady cover art.',
    etsyUrl: '#', // TODO: replace with the real Etsy listing URL for this product
  },
  {
    name: 'The Little Lady Runaway Tee',
    price: 16,
    image: '/assets/shop-placeholder.svg',
    description: 'Canvas tote bag with the Buster & Tallulah wordmark.',
    etsyUrl: '#', // TODO: replace with the real Etsy listing URL for this product
  },
  {
    name: 'The Buster & Tallulah Tote',
    price: 14,
    image: '/assets/shop-placeholder.svg',
    description: "Ceramic mug featuring the duo's gold wordmark.",
    etsyUrl: '#', // TODO: replace with the real Etsy listing URL for this product
  },
];
