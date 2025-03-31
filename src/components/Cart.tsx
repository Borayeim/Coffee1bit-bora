import React, { useState } from "react";
import { X, ShoppingCart, Plus, Minus } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../contexts/CartContext";

export function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    total,
    isCartOpen,
    toggleCart,
  } = useCart();
  const [showQR, setShowQR] = useState(false);

  const handleCheckout = () => {
    setShowQR(true);
  };

  if (!isCartOpen) {
    return (
      <motion.button
        onClick={toggleCart}
        className="fixed bottom-4 right-4 bg-[#c8a27a] text-white p-4 rounded-full shadow-lg hover:bg-[#a88057] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ShoppingCart className="w-6 h-6" />
        <AnimatePresence>
          {items.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >
              {items.length}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-xl z-50 flex flex-col"
    >
      <div className="p-4 border-b flex justify-between items-center bg-[#2c1810] text-white">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <motion.button
          onClick={() => {
            toggleCart();
            setShowQR(false);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:text-[#c8a27a] transition-colors"
        >
          <X className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <AnimatePresence mode="wait">
          {showQR ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center h-full space-y-6"
            >
              <h3 className="text-xl font-semibold text-center">Scan to Pay</h3>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <QRCodeSVG
                  value="https://pay.ababank.com/Nqhx2iRNgdzCMrFb7"
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </motion.div>
              <p className="text-gray-600 text-center">
                Scan this QR code with your mobile payment app to complete the
                purchase
              </p>
              <motion.button
                onClick={() => setShowQR(false)}
                className="text-[#c8a27a] hover:text-[#a88057] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Cart
              </motion.button>
            </motion.div>
          ) : items.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 mt-8"
            >
              Your cart is empty
            </motion.p>
          ) : (
            <motion.div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-[#c8a27a] font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <motion.button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1 hover:text-[#c8a27a] transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <motion.span
                        key={item.quantity}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="w-8 text-center"
                      >
                        {item.quantity}
                      </motion.span>
                      <motion.button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1 hover:text-[#c8a27a] transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => removeFromCart(item.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-t p-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center mb-4"
        >
          <span className="font-semibold">Total:</span>
          <motion.span
            key={total}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-xl font-bold"
          >
            ${total.toFixed(2)}
          </motion.span>
        </motion.div>
        <motion.button
          className="w-full bg-[#c8a27a] text-white py-3 rounded-lg hover:bg-[#a88057] transition-colors disabled:opacity-50"
          disabled={items.length === 0}
          onClick={handleCheckout}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Proceed to Checkout
        </motion.button>
      </div>
    </motion.div>
  );
}
