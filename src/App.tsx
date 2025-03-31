import React from "react";
import {
  Coffee,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  ShoppingCart,
} from "lucide-react";
import { CartProvider, useCart } from "./contexts/CartContext";
import { Cart } from "./components/Cart";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#f8f3e9]">
        {/* Hero Section */}
        <div
          className="h-screen bg-cover bg-center relative"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-6 h-full flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white max-w-2xl"
              >
                <h1 className="text-6xl font-bold mb-9">Coffee 1bit</h1>
                <p className="text-xl mb-8">
                  Experience the perfect blend of tradition and innovation in
                  every cup.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#c8a27a] text-white px-8 py-3 rounded-full hover:bg-[#a88057] transition duration-300"
                >
                  Order Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, staggerChildren: 0.2 }}
              className="grid md:grid-cols-3 gap-12"
            >
              {[
                {
                  icon: (
                    <Coffee className="w-12 h-12 mx-auto mb-4 text-[#c8a27a]" />
                  ),

                  title: "Premium Beans",
                  description:
                    "Sourced from the finest coffee regions worldwide.",
                },
                {
                  icon: (
                    <Clock className="w-12 h-12 mx-auto mb-4 text-[#c8a27a]" />
                  ),
                  title: "Fresh Roasted",
                  description: "Roasted daily for the perfect cup every time.",
                },
                {
                  icon: (
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-[#c8a27a]" />
                  ),
                  title: "Local Love",
                  description: "Supporting our community since 2010.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Menu Preview */}
        <div className="py-20 bg-[#f8f3e9]">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12"
            >
              Our Signature Drinks
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: "1",
                  name: "Classic Espresso",
                  price: 3.5,
                  image:
                    "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80",
                },
                {
                  id: "2",
                  name: "Caramel Macchiato",
                  price: 4.5,
                  image:
                    "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80",
                },
                {
                  id: "3",
                  name: "Cold Brew",
                  price: 4.0,
                  image:
                    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80",
                },
                {
                  id: "4",
                  name: "Latte",
                  price: 5.0,
                  image:
                    "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
                },
                {
                  id: "5",
                  name: "ត្រាវទឹកដោះគោ",
                  price: 4.0,
                  image:
                    "https://www.krema.asia/wp-content/uploads/2023/11/Iced-taro-Latte.webp",
                },
                {
                  id: "6",
                  name: "កាហ្វេ ក្រឡុក",
                  price: 5.5,
                  image:
                    "https://www.krema.asia/wp-content/uploads/2024/06/Coffee-Frappe-1000x1000.png",
                },
              ].map((drink) => (
                <DrinkCard key={drink.id} {...drink} />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6">Visit Us</h2>
                <div className="space-y-4">
                  <motion.p
                    whileHover={{ x: 10 }}
                    className="flex items-center"
                  >
                    <MapPin className="w-5 h-5 mr-2 text-[#c8a27a]" />
                    123 Coffee Street, Brewtown, BT 12345
                  </motion.p>
                  <motion.p
                    whileHover={{ x: 10 }}
                    className="flex items-center"
                  >
                    <Phone className="w-5 h-5 mr-2 text-[#c8a27a]" />
                    (+855) 096-464-644-504
                  </motion.p>
                  <motion.p
                    whileHover={{ x: 10 }}
                    className="flex items-center"
                  >
                    <Clock className="w-5 h-5 mr-2 text-[#c8a27a]" />
                    Mon-Fri: 7am-8pm | Sat-Sun: 8am-9pm
                  </motion.p>
                </div>
                <div className="flex space-x-4 mt-6">
                  {[Instagram, Facebook, Twitter].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-[#c8a27a] hover:text-[#a88057]"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80"
                  alt="Coffee Shop Interior"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#2c1810] text-white py-8">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center"
            >
              <p>© 2024 Coffee 1bit. All rights reserved.</p>
              <div className="mt-4 md:mt-0">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-[#c8a27a] mx-3"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-[#c8a27a] mx-3"
                >
                  Terms of Service
                </motion.a>
              </div>
            </motion.div>
          </div>
        </footer>

        <Cart />
      </div>
    </CartProvider>
  );
}

function DrinkCard({ id, name, price, image }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-[#c8a27a] font-bold">${price.toFixed(2)}</p>
          <motion.button
            onClick={() => addToCart({ id, name, price, image })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#c8a27a] text-white px-4 py-2 rounded-full hover:bg-[#a88057] transition duration-300 flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
