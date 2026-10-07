/* ===== SHOP PRODUCTS =====
   Edit this file to add, remove, or update items — nothing else needs to
   change. Each product needs:
     name         - product name shown on the card
     price        - number, in GBP (rendered as "£NN")
     image        - path to a single product photo (root-relative, e.g.
                    "/assets/shop-tee.jpg") — use this OR images, not both
     images       - array of photo paths shown as a one-at-a-time, scrollable
                    gallery (with dots) instead of a single static photo
     description  - one short line shown under the name
     etsyUrl      - the Etsy listing URL; checkout happens entirely on Etsy,
                    with Gelato handling printing and shipping. This site
                    never collects payment or cart data.

   These are placeholders: swap the image(s) and etsyUrl for each product
   below once the real Etsy listings and product photos are ready. */
const PRODUCTS = [
  {
    name: 'The Little Lady Matchbox Tee',
    price: 25,
    images: [
      '/assets/little-lady-matchbox-tee-front.jpg', // placeholder photo — not the final product shot
      '/assets/little-lady-matchbox-tee-back.jpg', // placeholder photo — not the final product shot
    ],
    description: 'Soft cotton tee printed with the Little Lady matchbook artwork.',
    etsyUrl: '#', // TODO: replace with the real Etsy listing URL for this product
  },
  {
    name: 'The Little Lady Runaway Tee',
    price: 25,
    images: [
      '/assets/little-lady-runaway-tee-front.jpg', // placeholder photo — not the final product shot
      '/assets/little-lady-runaway-tee-back.jpg', // placeholder photo — not the final product shot
    ],
    description: 'Soft cotton tee printed with the Little Lady runaway artwork.',
    etsyUrl: '#', // TODO: replace with the real Etsy listing URL for this product
  },
  {
    name: 'The Little Lady Vinyl Tote',
    price: 15,
    images: [
      '/assets/buster-tallulah-tote-front.jpg', // placeholder photo — not the final product shot
      '/assets/buster-tallulah-tote-back.jpg', // placeholder photo — not the final product shot
    ],
    description: 'Canvas tote bag with the Buster & Tallulah wordmark.',
    etsyUrl: '#', // TODO: replace with the real Etsy listing URL for this product
  },
];
