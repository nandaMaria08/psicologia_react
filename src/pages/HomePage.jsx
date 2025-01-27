import React from "react";

function HomePage() {
  return (
    <div className="p-6">
     <section className="relative mb-8">
  <img 
    src="/src/img/image.png" 
    alt="Brain" 
    className="w-full h-[600px] object-cover"
  />
  <div className="absolute top-0 left-0 w-full h-full flex justify-start items-center bg-gradient-to-r from-black/60 to-transparent text-white p-6">
    <div className="max-w-[50%]">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à nossa plataforma,</h1>
      <p className="text-gray-200 mb-4">
        Um espaço criado para conectar médicos voluntários a pacientes que estão em busca de apoio psicológico. Sabemos que cuidar da saúde mental é essencial, e nem sempre é fácil encontrar a ajuda certa nos momentos mais desafiadores. Por isso, reunimos os melhores especialistas em um único lugar, oferecendo acesso a serviços de qualidade de forma totalmente gratuita.
      </p>
    </div>
  </div>
</section>





      <section className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="md:w-1/2">
          <h1 className="text-4xl text-blue-700 font-bold mb-4">O que fazemos?</h1>
          <p className="text-blue-700 mb-4">
          Nosso objetivo vai além de apenas conectar pessoas; queremos proporcionar uma experiência acolhedora, segura e eficiente para quem precisa de suporte emocional. Seja qual for sua situação, estamos aqui para ajudar você a encontrar o profissional ideal, alguém disposto a ouvir, entender e contribuir para o seu bem-estar.
          Acreditamos que a saúde mental é um direito de todos, e nossa missão é fazer com que mais pessoas possam ter acesso ao cuidado necessário, sem barreiras ou custos. Conte conosco para estar ao seu lado nessa jornada e ajudar você a superar qualquer dificuldade.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/src/img/img_2.jpeg" alt="What we do" className="w-4/4 max-w-sm mx-auto md:max-w-xs"/>
        </div>
     </section>


    </div>
  );
}

export default HomePage;