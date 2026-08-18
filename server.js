const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Demo product data
const products = {
  bestSellers: [
    {
      id: 1,
      name: 'Royal Velvet Sofa Cover - 3 Seater',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
      price: 1299,
      oldPrice: 2499,
      discount: 48,
      rating: 4.5,
      reviews: 234,
      badge: 'Best Seller',
      category: 'Sofa Covers'
    },
    {
      id: 2,
      name: 'Persian 7D Home Carpet - Large',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=400&fit=crop',
      price: 2499,
      oldPrice: 4999,
      discount: 50,
      rating: 4.8,
      reviews: 189,
      badge: 'Top Rated',
      category: '7D Home Carpets'
    },
    {
      id: 3,
      name: 'Embroidered Table Runner - Floral',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&h=400&fit=crop',
      price: 699,
      oldPrice: 1299,
      discount: 46,
      rating: 4.3,
      reviews: 156,
      badge: 'New',
      category: 'Table Runners'
    },
    {
      id: 4,
      name: 'Premium Cushion Cover Set - Pack of 5',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop',
      price: 899,
      oldPrice: 1799,
      discount: 50,
      rating: 4.6,
      reviews: 312,
      badge: 'Best Seller',
      category: 'Cushion Covers'
    },
    {
      id: 5,
      name: 'Jacquard Table Cover - 6 Seater',
      image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=400&h=400&fit=crop',
      price: 999,
      oldPrice: 1999,
      discount: 50,
      rating: 4.4,
      reviews: 98,
      badge: 'Popular',
      category: 'Table Covers'
    },
    {
      id: 6,
      name: 'Luxury Shag Carpet - Living Room',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop',
      price: 3499,
      oldPrice: 6999,
      discount: 50,
      rating: 4.7,
      reviews: 145,
      badge: 'Premium',
      category: 'Carpets'
    }
  ],
  sofaCovers: [
    {
      id: 7,
      name: 'Stretchable Sofa Cover - Universal Fit',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop',
      price: 1099,
      oldPrice: 2199,
      discount: 50,
      rating: 4.4,
      reviews: 201,
      badge: 'Best Seller',
      category: 'Sofa Covers'
    },
    {
      id: 8,
      name: 'L-Shape Sofa Cover - Premium Fabric',
      image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=400&h=400&fit=crop',
      price: 1899,
      oldPrice: 3799,
      discount: 50,
      rating: 4.6,
      reviews: 167,
      badge: 'Trending',
      category: 'Sofa Covers'
    },
    {
      id: 9,
      name: 'Velvet Sofa Slipcover - 2 Seater',
      image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&h=400&fit=crop',
      price: 999,
      oldPrice: 1899,
      discount: 47,
      rating: 4.3,
      reviews: 134,
      badge: 'New',
      category: 'Sofa Covers'
    },
    {
      id: 10,
      name: 'Quilted Sofa Protector - Anti-Slip',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop',
      price: 1499,
      oldPrice: 2999,
      discount: 50,
      rating: 4.5,
      reviews: 189,
      badge: 'Popular',
      category: 'Sofa Covers'
    }
  ],
  newArrivals: [
    {
      id: 11,
      name: 'Geometric Print Carpet - Modern Design',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=400&fit=crop',
      price: 1999,
      oldPrice: 3999,
      discount: 50,
      rating: 4.5,
      reviews: 45,
      badge: 'New Arrival',
      category: 'Carpets'
    },
    {
      id: 12,
      name: 'Silk Blend Table Runner - Elegant',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&h=400&fit=crop',
      price: 899,
      oldPrice: 1599,
      discount: 44,
      rating: 4.7,
      reviews: 32,
      badge: 'New Arrival',
      category: 'Table Runners'
    },
    {
      id: 13,
      name: 'Bohemian Cushion Cover Set - Pack of 4',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop',
      price: 799,
      oldPrice: 1499,
      discount: 47,
      rating: 4.4,
      reviews: 28,
      badge: 'New Arrival',
      category: 'Cushion Covers'
    },
    {
      id: 14,
      name: '7D Floral Carpet - Living Room',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop',
      price: 2999,
      oldPrice: 5999,
      discount: 50,
      rating: 4.8,
      reviews: 56,
      badge: 'New Arrival',
      category: '7D Home Carpets'
    },
    {
      id: 15,
      name: 'Waterproof Sofa Mat - Premium',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
      price: 699,
      oldPrice: 1399,
      discount: 50,
      rating: 4.3,
      reviews: 67,
      badge: 'New Arrival',
      category: 'Sofa Mats'
    },
    {
      id: 16,
      name: 'Damask Table Cover - 8 Seater',
      image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=400&h=400&fit=crop',
      price: 1299,
      oldPrice: 2599,
      discount: 50,
      rating: 4.6,
      reviews: 41,
      badge: 'New Arrival',
      category: 'Table Covers'
    }
  ],
  tableCollection: [
    {
      id: 17,
      name: 'Lace Table Cover - Rectangular',
      image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=400&h=400&fit=crop',
      price: 899,
      oldPrice: 1799,
      discount: 50,
      rating: 4.4,
      reviews: 123,
      badge: 'Popular',
      category: 'Table Covers'
    },
    {
      id: 18,
      name: 'Velvet Table Runner - Premium',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&h=400&fit=crop',
      price: 599,
      oldPrice: 1199,
      discount: 50,
      rating: 4.5,
      reviews: 89,
      badge: 'Best Seller',
      category: 'Table Runners'
    },
    {
      id: 19,
      name: 'Cotton Table Cover - Round',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&h=400&fit=crop',
      price: 749,
      oldPrice: 1499,
      discount: 50,
      rating: 4.3,
      reviews: 76,
      badge: 'New',
      category: 'Table Covers'
    },
    {
      id: 20,
      name: 'Embroidered Dining Set - 6 Pcs',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      price: 1599,
      oldPrice: 3199,
      discount: 50,
      rating: 4.7,
      reviews: 54,
      badge: 'Premium',
      category: 'Table Covers'
    }
  ],
  categories: [
    {
      name: 'Sofa Covers',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
      link: '#'
    },
    {
      name: 'Table Covers',
      image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=400&h=400&fit=crop',
      link: '#'
    },
    {
      name: 'Table Runners',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&h=400&fit=crop',
      link: '#'
    },
    {
      name: 'Carpets',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=400&fit=crop',
      link: '#'
    },
    {
      name: '7D Home Carpets',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop',
      link: '#'
    },
    {
      name: 'Sofa Mats',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop',
      link: '#'
    },
    {
      name: 'Cushion Covers',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop',
      link: '#'
    },
    {
      name: 'Home Furnishing',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&h=400&fit=crop',
      link: '#'
    }
  ],
  reviews: [
    {
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Absolutely love the sofa cover I ordered! The fabric quality is premium and it fits perfectly. My living room looks completely transformed. Will definitely order more products.',
      product: 'Royal Velvet Sofa Cover',
      avatar: 'PS'
    },
    {
      name: 'Rahul Verma',
      location: 'Delhi, NCR',
      rating: 5,
      text: 'The 7D carpet is stunning! The texture and design are exactly as shown in the pictures. It has added so much warmth and character to our bedroom. Highly recommended!',
      product: '7D Floral Carpet',
      avatar: 'RV'
    },
    {
      name: 'Anita Desai',
      location: 'Bangalore, Karnataka',
      rating: 4,
      text: 'Beautiful table runner with elegant embroidery. The packaging was great and delivery was on time. The quality exceeded my expectations for this price range.',
      product: 'Silk Blend Table Runner',
      avatar: 'AD'
    },
    {
      name: 'Vikram Singh',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      text: 'Ordered cushion covers set and they look amazing! The colors are vibrant and the fabric is soft yet durable. Perfect for our newly decorated living room.',
      product: 'Bohemian Cushion Cover Set',
      avatar: 'VS'
    },
    {
      name: 'Meera Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'I have been searching for the perfect carpet for months and finally found it here. The quality is exceptional and the design is just gorgeous. Thank you Purple Leaf Creations!',
      product: 'Geometric Print Carpet',
      avatar: 'MP'
    }
  ]
};

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Purple Leaf Creations | Premium Home Furnishing',
    description: 'Discover premium sofa covers, carpets, table covers, cushion covers and home furnishing essentials at Purple Leaf Creations. Elegant designs for every home.',
    url: 'https://www.purpleleafcreations.com',
    products: products
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Purple Leaf Creations server running on http://localhost:${PORT}`);
});