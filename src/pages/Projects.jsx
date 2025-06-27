import React from "react";

const Projects = () => {
  const projetos = [
    {
      titulo: "Portfólio",
      descricao: "Site pessoal feito em React e Tailwind.",
      imagem: "/portfolio.png",
      link: "/",
    },
    {
      titulo: "Nosso Aniversário",
      descricao:
        "Um site criado como presente, feito para planejar momentos inesquecíveis.",
      imagem: "/nossoAniversario.gif",
      link: "https://nosso-aniversario-brown.vercel.app/",
    },
    {
      titulo: "Aplicativo de Viagem",
      descricao: "Roteiros, gastos e infos da viagem na palma da mão.",
      imagem: "/construcao.png",
      link: "#",
    },
    {
      titulo: "MoodBoard",
      descricao: "Inspirações visuais reunidas para guiar as emoções.",
      imagem: "/construcao.png",
      link: "#",
    },
    {
      titulo: "Projeto Fúria",
      descricao: "Site não-oficial dedicado à comunidade da FURIA.",
      imagem: "/construcao.png",
      link: "#",
    },
  ];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="bg-[#d5d3ce] rounded-xl p-4 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.4)] text-left"
          >
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="w-full border-2 border-black rounded-md mb-2"
            />
            <h3 className="font-anton text-xl sm:text-2xl text-[#2c2c2c] mb-1">
              {projeto.titulo}
            </h3>
            <p className="font-open-sans text-sm sm:text-base text-[#2c2c2c]">
              {projeto.descricao}
            </p>
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline inline-block mt-2"
            >
              Ver projeto →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
