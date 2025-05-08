import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Bakso Polos",
    description: "Bakso yang dibuat dengan daging sapi yang higenis dan kenyal teksturnya.",
    price: 10000,
    image: "https://akcdn.detik.net.id/community/media/visual/2019/08/12/dca21bf3-923c-486f-bc2e-a3dcd759b1df_43.jpeg?w=700&q=90",
    category: "makanan",
    popular: true,
    ingredients: ["Daging Sapi", "Daging Ayam", "Tepung Tapioka", "Penyedap Rasa", "Garam"]
  },
  {
    id: 2,
    name: "Bakso Aci",
    description: "Kuahnya gurih, isi berbagai macam (Keju, Tulang Rangu, Ayam) dan kenyal. Disajikan dengan kuah yang kaya rasa.",
    price: 10000,
    image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/08/03043442/ternyata-mudah-ini-resep-bakso-aci-gurih-nan-lezat.jpg.webp",
    category: "makanan",
    popular: true,
    ingredients: ["Aci", "Ayam Suwir", "Keju", "Tulang Rangu", "Cabai", "Penyedap Rasa"]
  },
  {
    id: 3,
    name: "Fresh Garden Salad",
    description: "Crisp mixed greens with seasonal vegetables, avocado, and homemade vinaigrette dressing.",
    price: 8.49,
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "salads",
    ingredients: ["Mixed Greens", "Cherry Tomatoes", "Cucumber", "Avocado", "Red Onion", "Balsamic Vinaigrette"]
  },
  {
    id: 4,
    name: "Spicy Chicken Wings",
    description: "Crispy chicken wings tossed in our signature spicy sauce, served with blue cheese dip.",
    price: 11.99,
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "appetizers",
    popular: true,
    ingredients: ["Chicken Wings", "Spicy Sauce", "Garlic", "Blue Cheese Dip", "Celery Sticks"]
  },
  {
    id: 5,
    name: "Vegetable Stir Fry",
    description: "Fresh seasonal vegetables stir-fried in a savory sauce with your choice of rice or noodles.",
    price: 10.99,
    image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "mains",
    ingredients: ["Broccoli", "Bell Peppers", "Carrots", "Snow Peas", "Soy Sauce", "Jasmine Rice"]
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
    price: 6.99,
    image: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "desserts",
    popular: true,
    ingredients: ["Dark Chocolate", "Flour", "Eggs", "Butter", "Sugar", "Vanilla Ice Cream"]
  },
  {
    id: 7,
    name: "Creamy Pasta Alfredo",
    description: "Fettuccine pasta in a rich and creamy Alfredo sauce with Parmesan cheese and fresh herbs.",
    price: 13.99,
    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "pasta",
    ingredients: ["Fettuccine", "Heavy Cream", "Parmesan Cheese", "Butter", "Garlic", "Fresh Parsley"]
  },
  {
    id: 8,
    name: "Fresh Fruit Smoothie",
    description: "Blend of seasonal fruits with yogurt and honey for a refreshing healthy treat.",
    price: 5.49,
    image: "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "drinks",
    ingredients: ["Strawberries", "Banana", "Mango", "Greek Yogurt", "Honey", "Ice"]
  }
];

export const categories = [
  "semua",
  "makanan",
  "hidangan pembuka",
  "hidangan penutup"
];