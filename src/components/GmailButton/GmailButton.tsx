"use client";

import { FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/Hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";

const GmailButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenGmail = () => {
    const recipient = "riosalan264@gmail.com";
    const subject = encodeURIComponent("Oportunidad de colaboración");

    if (isMobile) {
      window.location.href = `mailto:${recipient}?subject=${subject}`;
    } else {
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}`;
      window.open(mailtoLink, "_blank");
    }
  };

  return (
    <>
      <motion.button
        onClick={handleOpenModal}
        whileTap={{ scale: 0.9 }}
        className="fixed cursor-pointer z-50 left-4 bottom-16 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-all flex items-center justify-center"
        style={{
          opacity: isModalOpen ? 0 : 1,
          pointerEvents: isModalOpen ? "none" : "auto",
        }}
      >
        <FaEnvelope size={24} />
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed left-4 bottom-16 z-50 p-4 bg-white rounded-lg shadow-lg"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              width: "250px",
              height: "180px",
            }}
          >
            <motion.button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              whileHover={{ scale: 1.2 }}
            >
              ✖
            </motion.button>
            <h2 className="text-[15px] mt-5 font-semibold">
              {t.contactModal.title}{" "}
            </h2>
            <p className="text-[13px] text-gray-600 mt-2">
              {t.contactModal.description}{" "}
            </p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleOpenGmail}
                className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-all text-sm"
              >
                <SiGmail size={20} className="mr-2 mb-0.5" />{" "}
                {t.contactModal.openGmail}{" "}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GmailButton;
