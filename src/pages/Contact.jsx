import React from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-[0.9]"
      >
        <source src="/fundo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <h1 className="text-[#2c2c2c] font-anton text-5xl sm:text-6xl text-center mb-12">
        Contato
      </h1>

      <div className="flex flex-col gap-6 text-[#2c2c2c] font-open-sans text-xl items-center">
        <div className="contato-info">
          <FaEnvelope size={24} color="#E2761B" />
          <span>l.carvaborges@gmail.com</span>
        </div>

        <div className="contato-info">
          <FaWhatsapp size={24} color="#25D366" />
          <span>+55 (12) 98206-2403</span>
        </div>

        <div className="contato-info">
          <FaLinkedin size={24} color="#0A66C2" />
          <a
            href="https://www.linkedin.com/in/larissabcarvalhodev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] underline"
          >
            Larissa Borges de Carvalho
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
