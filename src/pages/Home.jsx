import React from "react";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-white px-4">
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

      <img
        src="/letreiro.png"
        alt="Letreiro"
        className="w-[80vw] sm:w-[50vw] absolute top-20 left-1/2 transform -translate-x-1/2 z-10"
      />

      <img
        src="/nome.png"
        alt="Nome"
        className="w-[40vw] sm:w-[20vw] absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10"
      />

      <div className="fixed bottom-10 left-0 right-0 flex flex-wrap justify-center gap-4 px-4 z-10">
        <button
          className="btn"
          onClick={() => (window.location.href = "/Projects")}
        >
          Ver Projetos
        </button>

        <button
          className="btn"
          onClick={() => (window.location.href = "/AboutMe")}
        >
          Sobre Mim
        </button>

        <button
          className="btn"
          onClick={() => (window.location.href = "/Contact")}
        >
          Contato
        </button>
      </div>
    </div>
  );
};

export default Home;
