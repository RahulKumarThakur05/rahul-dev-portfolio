import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { config } from "@/config";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={config.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Connect on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
    </motion.a>
  );
};

export default WhatsAppButton;
