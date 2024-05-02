import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faCircleCheck,
  faLaptop,
  faMobile,
  faStar,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        {/* Hero */}
        <section
          style={{
            backgroundImage: 'url("/images/back_hero.avif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* not mobile */}
          <div className="container flex flex-col  box-1 hidden">
            <div id="hero_image"></div>
            <div
              id="hero_image_mobile"
              className="w-full h-[600px]"
              style={{
                backgroundImage: 'url("/images/vitorraio.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <div id="hero_content" className="flex flex-col gap-4">
              <Image
                className="w-1/2"
                src="/images/vitorlogo.avif"
                width={164}
                height={164}
                alt="Logo Método Vitor Morais"
              />
              <h1 className="bebas">
                Transforme seu corpo treinando no conforto da sua casa com
                poucos minutos do seu dia
              </h1>
              <p className="">
                Obtenha acesso ao meu método de treino e veja como é simples{" "}
                <strong>perder peso, ganhar força e definir o corpo</strong> em
                treinos que tomam menos de 30 minutos do seu dia.
              </p>
              <Link href="/">
                <p className="green-button">
                  Quero ter acesso ao Método Vitor Morais
                </p>
              </Link>
              <p className="">
                De 12x de R$ 39,90 por 12x de R$ 19,90 no plano anual
              </p>
              d
            </div>
          </div>
          {/* mobile */}
          <div id="mobile_content" className="md:hidden">
            <div
              id="hero_image_mobile"
              className="w-full h-[500px]"
              style={{
                backgroundImage: 'url("/images/vitorraio.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <div className=" flex flex-col container  box-1">
              <div id="hero_content" className="flex flex-col gap-4">
                <Image
                  className="w-1/2"
                  src="/images/vitorlogo.avif"
                  width={164}
                  height={164}
                  alt="Logo Método Vitor Morais"
                />
                <h1 className="bebas">
                  Transforme seu corpo treinando no conforto da sua casa com
                  poucos minutos do seu dia
                </h1>
                <p className="text-xl">
                  Obtenha acesso ao meu método de treino e veja como é simples{" "}
                  <strong>perder peso, ganhar força e definir o corpo</strong>{" "}
                  em treinos que tomam menos de 30 minutos do seu dia.
                </p>
                <Link href="/" className="">
                  <p className="green-button w-full text-center">Quero o Método Vitor Morais</p>
                </Link>
                <p className="">
                  De 12x de R$ 39,90 por 12x de R$ 19,90 no plano anual
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Fotos */}
        <section>
          <div className="container flex flex-col  box-1 space-y-4">
            <h2 className="bebas">
              Quem treinou comigo comprova os resultados
            </h2>
            <div className="flex flex-col space-y-4">
              <Image
                className="w-full rounded-2xl"
                src="/images/prova1.avif"
                width={541}
                height={573}
                alt="Prova 1"
              />
              <Image
                className="w-full rounded-2xl"
                src="/images/prova2.avif"
                width={541}
                height={573}
                alt="Prova 2"
              />
              <Image
                className="w-full rounded-2xl"
                src="/images/prova3.avif"
                width={541}
                height={574}
                alt="Prova 3"
              />
              <Image
                className="w-full rounded-2xl"
                src="/images/prova4.avif"
                width={541}
                height={574}
                alt="Prova 4"
              />
            </div>
            <Link href="/" className="">
              <p className="green-button w-full text-center">Quero o Método Vitor Morais</p>
            </Link>
          </div>
        </section>

        {/* O que é o metodo vitor morais */}
        <section>
          <div className="container flex flex-col  box-1 space-y-4">
            <h2 className="bebas w-3/4">O que é o Método Vitor Morais?</h2>
            <p className="">
              <strong>Sua iniciação para sua nova vida fitness!</strong>
            </p>
            <p>
              Com a metodologia exclusiva e dinâmica desenvolvida por mim com
              meus 7 anos de experiencia na área esportiva e que me fez alcançar
              o físico, saúde e habilidades que tenho hoje!
            </p>

            <Image
              className="w-full rounded-2xl"
              src="/images/exec_avan.avif"
              width={1091}
              height={1229}
              alt="Exercícios Avançados"
            />
            <Image
              className="w-full rounded-2xl"
              src="/images/exec_adap.avif"
              width={1092}
              height={1229}
              alt="Exercícios Adaptados"
            />

            <p>
              Durante <strong>quatro semanas</strong> você terá treinos
              exclusivos e únicos diariamente,
              <strong>
                seguindo meu protocolo para alcançar sua melhor versão!
              </strong>
            </p>
            <Link href="/" className="">
              <p className="green-button w-full text-center">Quero o Método Vitor Morais</p>
            </Link>
          </div>
        </section>

        {/* alem disso voce tera */}
        <section className="bg-[#FF3E00] text-white">
          <div className="container flex flex-col box-1 space-y-4">
            <h2 className="bebas w-3/4">Além disso, você terá acesso a:</h2>

            <div className="text-xl font-bold flex gap-4 items-center">
              <Image
                className="w-12"
                src="/images/whatsapp.svg"
                width={80}
                height={80}
                alt="Exercícios Adaptados"
              />
              <p>Comunidade Exclusiva no Whatsapp</p>
            </div>
            <div className="text-xl font-bold flex gap-4 items-center">
              <Image
                className="w-12"
                src="/images/lives.svg"
                width={80}
                height={80}
                alt="Exercícios Adaptados"
              />
              <p>Lives exclusivas com a comunidade</p>
            </div>
            <div className="text-xl font-bold flex gap-4 items-center">
              <Image
                className="w-12"
                src="/images/protocolos.svg"
                width={80}
                height={80}
                alt="Exercícios Adaptados"
              />
              <p>Acesso aos próximos protocolos de treinos</p>
            </div>
          </div>
        </section>

        {/* veja de onde quiser */}
        <section>
          <div className="container flex flex-col box-1 space-y-4">
            <h2 className="bebas">Veja de onde você quiser!</h2>

            <div className="flex flex-col space-y-4 text-xl font-bold">
              <div className="p-8 flex   gap-4 border-slate-700 border-[1px] items-center rounded-2xl">
                <FontAwesomeIcon icon={faTv} size="2x" className="w-[48px]" />
                <div>
                  Faça as aulas na sua{" "}
                  <span className="text-orange-600 inline">Smart TV</span>
                </div>
              </div>
              <div className="p-8 flex gap-4 border-slate-700 border-[1px] items-center rounded-2xl">
                <FontAwesomeIcon
                  icon={faLaptop}
                  size="2x"
                  className="w-[48px]"
                />
                <div>
                  Assista no{" "}
                  <span className="text-orange-600 inline">computador</span>
                </div>
              </div>
              <div className="p-8 flex gap-4 border-slate-700 border-[1px] items-center rounded-2xl">
                <FontAwesomeIcon
                  icon={faMobile}
                  size="2x"
                  className="w-[48px]"
                />
                <div>
                  Assista no{" "}
                  <span className="text-orange-600 inline">
                    tablet ou celular
                  </span>
                </div>
              </div>
            </div>

            <Link href="/" className="">
              <p className="green-button w-full text-center">Quero o Método Vitor Morais</p>
            </Link>
          </div>
        </section>

        {/* tabela */}
        <section className="hidden">
          <div className="container flex flex-col  box-1 ">
            <h2 className="bebas">
              Chegou a sua vez de entrar em forma e alcançar o corpo perfeito!
            </h2>
          </div>
        </section>

        {/* chamada promo */}
        <section className="bg-[#FF3E00] text-white">
          <div className="container flex flex-col  box-1 space-y-4">
            <Image
              className="w-full"
              src="/images/computers.avif"
              width={755}
              height={464}
              alt="Exercícios Adaptados"
            />{" "}
            <h2 className="bebas">Veja tudo que você vai receber agora!</h2>
            <div id="list-veja" className="font-bold text-lg space-y-2">
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mt-1 text-[#8FFF00]" />
                Método Vitor Morais
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mt-1 text-[#8FFF00]" />
                Comunidade Exclusiva
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mt-1 text-[#8FFF00]" />
                Lives Exclusivas
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mt-1 text-[#8FFF00]" />
                Bônus: Acesso gratuito aos próximos protocolos de treino
              </div>
            </div>
            <div className="bg-slate-900 p-8 space-y-8 text-center rounded-2xl">
              <h2 className="bebas">Promoção de Lançamento</h2>
              <div className="space-y-3">
                <p className="font-bold">De <span className="line-through">R$197,00</span> por 12x de</p>
                <p className="font-bold text-[#8FFF00] text-8xl bebas">
                  R$19,90
                </p>
                <p className="font-bold">ou R$147,00 à vista</p>
              </div>
              <Link href="/" className="inline-block w-full">
                <p className="green-button w-full text-center uppercase p-6">
                  Eu Quero!!!
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* prazer sou vitor */}
        <section>
          <div className="container flex flex-col  box-1 space-y-4 ">
            <div
              style={{
                backgroundImage: 'url("/images/vitor.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-[350px] rounded-2xl "></div>

            <h1 className="bebas w-3/4 ">
              Prazer, sou o <span className="text-[#8FFF00]">vitor morais</span>
            </h1>
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
        <section
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url("/images/pendurado_gray.avif")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="container flex flex-col  box-1 space-y-4">
            <h2 className="bebas">7 Dias sem risco!</h2>
            <div className="flex text-yellow-400">
              <FontAwesomeIcon icon={faStar} size="2x" />
              <FontAwesomeIcon icon={faStar} size="2x" />
              <FontAwesomeIcon icon={faStar} size="2x" />
              <FontAwesomeIcon icon={faStar} size="2x" />
              <FontAwesomeIcon icon={faStar} size="2x" />
            </div>
            <p>
              Experimente meu método sem risco nenhum, se por algum motivo você
              não gostar do conteúdo devolvemos seu investimento sem perguntas
              ou burocracias.
            </p>
          </div>
        </section>

        {/* last call */}
        <section>
          <div className="container flex flex-col  box-1 text-center space-y-4">
            <div className="p-8 space-y-8 text-center rounded-2xl  border-[#8fff00] border-[1px]">
              <h2 className="bebas">eSSA PROMOÇÃO NÃO VAI SE REPETIR!</h2>
              <div className="space-y-3">
                <p className="font-bold">De <span className="line-through">R$197,00</span> por 12x de</p>
                <p className="font-bold text-[#8FFF00] text-8xl bebas">
                  R$19,90
                </p>
                <p className="font-bold">ou R$147,00 à vista</p>
              </div>
              <Link href="/" className="inline-block w-full">
                <p className="green-button w-full text-center uppercase p-6">
                  Eu Quero!!!
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* faq */}
        <section>
          <div className="container flex flex-col  box-1 space-y-4 [&_h5]:text-[#8fff00] ">
            <h2 className="bebas">Perguntas frequentes</h2>
            <div className="pb-4 border-b-[1px] border-b-slate-700">
              <h5>Posso parcelar?</h5>
              <p>Sim. Poderá parcelar em até 5x.</p>
            </div>
            <div className="pb-4 border-b-[1px] border-b-slate-700">
              <h5>Existe garantia?</h5>
              <p>Sim. O curso tem garantia de 7 dias.</p>
            </div>
            <div className="pb-4 border-b-[1px] border-b-slate-700">
              <h5>Quanto tempo tenho de acesso a plataforma?</h5>
              <p>O curso terá acesso de um ano.</p>
            </div>
            <div className="pb-4 border-b-[1px] border-b-slate-700">
              <h5>Como acesso a plataforma?</h5>
              <p>O acesso chegará em seu e-mail.</p>
            </div>
            <div className="pb-4 border-b-[1px] border-b-slate-700">
              <h5>Como faço para entrar na comunidade?</h5>
              <p>
                Dentro do Método Vitor Morais você encontrará os links para
                entrar na comunidade.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
