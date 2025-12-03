🙌 Digi Cartell
Trusted digital marketplace for affordable, high-quality products and innovative services designed to make everyday life easier.

👤 About the Business
Digi Cartell is a startup business focused on providing second-hand digicams and cameras that are reliable, affordable, and carefully quality-checked. This business aim to empower individuals to explore photography and content creation without breaking the bank. The products undergo a screening process to ensure that customers receive only the best second-hand digital devices.

This aims to provide accessible, high-quality digicams and cameras that enable creativity and storytelling through images. With this, it is believed that everyone deserves the opportunity to capture memories and create digital art—without financial barriers.

============================== PROJECT STRUCTURE ==================================
src/
│
├── components/
│   └── Footer.jsx
│   └── Header.jsx
│   └── Product.jsx
│   └── Rating.jsx
│
├── screens/
│   ├── CanonScreen.jsx
│   ├── FujifilmScreen.jsx
│   ├── HomeScreen.jsx
│   ├── KodakScreen.jsx
│   ├── NikonScreen.jsx
│   ├── ProductScreen.jsx
│   ├── SamsungScreen.jsx
│   └── SonyScreen.jsx
│
├── App.js
├── bootstrap.min.css
├── index.css
├── index.js
├── logo.svg
└── products.js

============================= ROUTES =============================
1️⃣ HomeScreen ('/')
Path: /
Purpose: Main landing page of your app.
Content:
Hero section (welcome message)
About Us / What We Do
Mission & Vision
Featured products (product cards)

2️⃣ ProductScreen ('/product/:id')
Path: /product/:id
Purpose: Displays details of a specific product.
Content:
Product image
Product name, description, price
Rating and number of reviews
Designed to dynamically render any product using the id parameter from the URL

3️⃣ SamsungScreen ('/samsung')
Path: /samsung
Purpose: Page dedicated to Samsung products.
Content:
Filtered list of products from your products.js where brand === 'Samsung'
Product cards displayed in a grid layout

4️⃣ FujifilmScreen ('/fujifilm')
Path: /fujifilm
Purpose: Page for Fujifilm products.
Content:
Filtered products of Fujifilm brand
Displayed with cards, images, and prices

5️⃣ SonyScreen ('/sony')
Path: /sony
Purpose: Page for Sony products.
Content:
Similar layout as other brand pages
Only products with brand === 'Sony'

6️⃣ CanonScreen ('/canon')
Path: /canon
Purpose: Page for Canon products.
Content:
Grid layout with product cards
Filtered from products.js

7️⃣ KodakScreen ('/kodak')
Path: /kodak
Purpose: Page for Kodak products.
Content:
Similar layout
Shows only Kodak brand products

8️⃣ NikonScreen ('/nikon')
Path: /nikon
Purpose: Page for Nikon products.
Content:
Grid of Nikon products
Details and images same as other brand pages

=========================== Link =====================================

Digi Cartell Facebook link: https://www.facebook.com/share/16c8HkPcX9/
