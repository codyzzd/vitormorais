import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        {/* Hero */}
        <section
        /*style={{
            backgroundImage: 'url("/images/back_hero.avif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}*/
        >
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20">
            <p>logo</p>
            <h1 className="bebas">
              transforme seu corpo treinando no conforto da sua casa com poucos
              minutos do seu dia
            </h1>
            <p>
              Obtenha acesso ao meu método de treino e veja como é simples
              <strong>perder peso, ganhar força e definir o corpo</strong> em
              treinos que tomam menos de 30 minutos do seu dia.
            </p>
            <p>Quero ter acesso ao Método Vitor Morais</p>
            <p>De 12x de R$ 39,90 por 12x de R$ 19,90 no plano anual</p>
          </div>
        </section>

        {/* 4 Fotos */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20 text-center">
            <h2 className="bebas">
              Quem treinou comigo comprova os resultados
            </h2>
            <Link href="/">
              <p className="green-button">
                Quero ter acesso ao Método Vitor Morais
              </p>
            </Link>
          </div>
        </section>

        {/* O que é o metodo vitor morais */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20 text-center">
            <h2 className="bebas">O que é o Método Vitor Morais?</h2>
            <p>
              <strong>Sua iniciação para sua nova vida fitness!</strong>
            </p>
            <p>
              Com a metodologia exclusiva e dinâmica desenvolvida por mim com
              meus 7 anos de experiencia na área esportiva e que me fez alcançar
              o físico, saúde e habilidades que tenho hoje!
            </p>
            <p>
              Durante <strong>quatro semanas</strong> você terá treinos
              exclusivos e únicos diariamente,
              <strong>
                seguindo meu protocolo para alcançar sua melhor versão!
              </strong>
            </p>
            <Link href="/">
              <p className="green-button">
                Quero ter acesso ao Método Vitor Morais
              </p>
            </Link>
          </div>
        </section>

        {/* alem disso voce tera */}
        <section className="bg-[#F28504] text-white">
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20 text-center">
            <h2 className="bebas">Além disso, você terá acesso a:</h2>
          </div>
        </section>

        {/* veja de onde quiser */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20 text-center">
            <h2 className="bebas">Veja de onde você quiser!</h2>

            <Link href="/">
              <p className="green-button">
                Quero ter acesso ao Método Vitor Morais
              </p>
            </Link>
          </div>
        </section>

        {/* tabela */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20 text-center">
            <h2 className="bebas">
              Chegou a sua vez de entrar em forma e alcançar o corpo perfeito!
            </h2>
          </div>
        </section>

        {/* chamada promo */}
        <section className="bg-[#F28504] text-white">
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20 ">
            <h2 className="bebas">Veja tudo que você vai receber agora!</h2>
          </div>
        </section>

        {/* prazer sou vitor */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20 ">
            <h2 className="bebas">Prazer, sou o vitor morais </h2>
            <p>
              Campeão Sul-americano de Calistenia e Street Workout e quinto
              colocado mundial no esporte.
            </p>
            <p>
              Há 7 anos atrás me vi entediado e frustrado com os treinos
              tradicionais e percebi que sou uma pessoa inquieta para fazer algo
              monótono.
            </p>
            <p>
              Por isso, iniciei na calistenia e desenvolvi a minha metodologia
              de treinamento para alcançar meus objetivos.
            </p>
            <p>
              Foi atráves de anos de prática e persistência que me tornei
              Multicampeão da categoria, com resultados notáveis: 5o colocado no
              campeonato mundial que participei na Letônia campeão sul-americano
              e referência internacional no esporte.
            </p>
          </div>
        </section>

        {/* 7 dias sem risco strip */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20 ">
            <h2 className="bebas">7 Dias sem risco!</h2>
            <p>
              Experimente meu método sem risco nenhum, se por algum motivo você
              não gostar do conteúdo devolvemos seu investimento sem perguntas
              ou burocracias.
            </p>
          </div>
        </section>

        {/* last call */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20 text-center">
            <h2 className="bebas">Essa promoção não vai se repetir!</h2>
            <Link href="/">
              <p className="green-button uppercase">Eu quero!</p>
            </Link>
          </div>
        </section>

        {/* faq */}
        <section>
          <div className="container flex flex-col mx-auto px-6 py-8 md:px-8 md:py-16   xl:px-48 xl:py-20 ">
            <h2 className="bebas text-center">Perguntas frequentes</h2>
          </div>
        </section>
      </div>
    </>
  );
}
