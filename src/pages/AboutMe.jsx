import React from "react";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen w-full overflow-y-auto flex flex-col items-center text-white px-4 py-12">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10 brightness-[0.9]"
      >
        <source src="/fundo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* FOTO: relativo no mobile, absolute no desktop */}
      <img
        src="/foto.png"
        alt="Foto"
        className="
          w-[60vw] sm:w-[30vw]
          relative sm:absolute
          left-auto sm:left-1/4
          transform-none sm:transform -translate-x-1/2
          z-10
          mb-6 sm:mb-0
          sm:top-auto top-8
        "
      />

      {/* TÍTULO: relativo no mobile, absolute no desktop */}
      <h1
        className="
          text-5xl sm:text-7xl font-anton text-[#2c2c2c] z-10
          relative sm:absolute
          top-auto sm:top-20
          left-auto sm:left-[60%]
          transform-none sm:transform -translate-x-1/2
          text-center sm:text-left
          px-4 sm:px-0
          w-full sm:w-auto
        "
      >
        Sobre mim
      </h1>

      {/* TEXTO: relativo no mobile, absolute no desktop */}
      <p
        className="
          text-[#2c2c2c] text-base sm:text-lg font-open-sans z-10 leading-relaxed
          relative sm:absolute
          top-auto sm:top-[30%]
          w-full sm:w-[50vw]
          left-auto sm:left-[75%]
          transform-none sm:transform -translate-x-[60%]
          px-4 sm:px-0
          whitespace-normal
          mt-6 sm:mt-0
        "
      >
        Ex-protética que trocou o lecron pelas linhas de código.{" "}
        <br className="block sm:hidden" />
        Apaixonada por tecnologia, criatividade e interfaces que fazem sentido.
        <br className="block sm:hidden" />
        Depois de anos trabalhando com prótese dentária e liderando
        laboratórios, decidi ouvir meu lado mais tech e entrei de cabeça no
        mundo da programação.
        <br className="block sm:hidden" />
        Hoje, estudo{" "}
        <span className="text-[#ff6f00]">
          Análise e Desenvolvimento de Sistemas
        </span>{" "}
        com foco em <span className="text-[#ff6f00]">front-end</span>.
        <br className="block sm:hidden" />
        Gosto de transformar ideias em experiências visuais intuitivas,
        responsivas e bem pensadas.
        <br className="block sm:hidden" />
        Amo desafios que misturam código, design e usabilidade.
        <br className="block sm:hidden" />
        Estou em transição de carreira, mas já com muita bagagem, sede de
        aprender e vontade de criar coisas incríveis.
      </p>
    </div>
  );
};

export default AboutMe;
