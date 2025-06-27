import React from "react";

const AboutMe = () => {
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
        src="/foto.png"
        alt="Foto"
        className="w-[60vw] sm:w-[30vw] absolute left-1/4 transform -translate-x-1/2 z-10"
      />

      <h1 className="absolute top-10 sm:top-20 left-[50%] sm:left-[60%] transform -translate-x-1/2 text-5xl sm:text-7xl font-anton text-[#2c2c2c] z-10">
        Sobre mim
      </h1>

      <p className="absolute top-[60%] sm:top-[30%] w-[90%] sm:w-[50vw] left-[60%] sm:left-[75%] transform -translate-x-1/2 sm:-translate-x-[60%] text-left text-[#2c2c2c] text-base sm:text-lg font-open-sans z-10 leading-relaxed">
        Ex-protética que trocou o lecron pelas linhas de código. <br />
        Apaixonada por tecnologia, criatividade e interefaces que fazem sentido.{" "}
        <br />
        Depois de anos trabalhando com prótese dentária e liderando <br />
        laboratórios, decidi ouvir meu lado mais tech e entrei de cabeça no{" "}
        <br />
        mundo da programação. Hoje, estudo{" "}
        <span className="text-[#ff6f00]">
          Análise e Desenvolvimento de Sistemas
        </span>{" "}
        <br />
        com foco em <span className="text-[#ff6f00]">front-end</span>. <br />
        Gosto de transformar ideias em experiências visuais intuitivas, <br />
        responsivas e bem pensadas. Amo desafios que misturam código, <br />
        design e usabilidade. <br />
        Estou em transição de carreira, mas já com muita bagagem, sede de <br />
        aprender e vontade de criar coisas incríveis.
      </p>
    </div>
  );
};

export default AboutMe;
