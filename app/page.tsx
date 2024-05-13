"use client";
// fontawesome icons
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

// nextjs
import Image from "next/image";
import Link from "next/link";
config.autoAddCss = false;

// // gsap stuff
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { TextPlugin } from "gsap/TextPlugin";
// gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin,SplitText);

//link cta
const linkpay = "https://pay.hotmart.com/E90271273F?sck=HOTMART_PRODUCT_PAGE&off=5gopse1s&hotfeature=32&_gl=1*g619rj*_ga*MTU5Njk1MzE3MS4xNjk5OTE1NTY0*_ga_GQH2V1F11Q*MTcxNTYwOTAxMC40OS4xLjE3MTU2MDkyNzguNjAuMC4w&bid=1715609282379";

export default function Home() {
  // GSAP animations
  // useGSAP(() => {
  //   gsap.from(".t80", {
  //     opacity: 0,
  //     y: -80,
  //     delay: 1,
  //     // autoAlpha:1,
  //     // stagger:0.1,
  //   });
  // }, []);

  // var split = new SplitText(".text80", {type: "lines", position: "absolute"});
  // gsap.from(split.lines, {duration: 1, x: 200, autoAlpha: 0, ease: "power3", stagger: 0.05});

  // ScrollTrigger.batch(".t80", {
  //   interval: 1,
  //   onEnter: batch => gsap.to(batch,{autoAlpha:1,stagger:0.1})
  // });

  return (
    <>
      <div className="text-white bg-black">
        {/* Hero */}
        <section
          style={{
            backgroundImage: 'url("/images/back_hero.avif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* not mobile */}
          <div className="hidden px-0 overflow-hidden box-1 xl:flex xl:gap-4 ">
            <div
              id="hero_content"
              className="flex flex-col gap-4 w-[600px] min-w-[400px] ml-48">
              <Image
                className="w-1/2 mb-8 t80"
                src="/images/vitorlogo.avif"
                width={164}
                height={164}
                alt="Logo Método Vitor Morais"
              />
              <h1 className="bebas h2bebas">
                Transforme seu corpo treinando no conforto da sua casa com
                poucos minutos do seu dia
              </h1>
              <p className="">
                Obtenha acesso ao meu método de treino e veja como é simples{" "}
                <strong>perder peso, ganhar força e definir o corpo</strong> em
                treinos que tomam menos de 30 minutos do seu dia.
              </p>
              <Link href={linkpay} className="mt-8">
                <p className="green-button">
                  Quero ter acesso ao Método Vitor Morais
                </p>
              </Link>
              <p className="">
              De 12x de R$39,90 por 12x de R$19,66 no plano anual
              </p>
            </div>
            <Image
              className="h-[700px] translate-x-50 -translate-y-10 object-contain"
              src="/images/vitorraio.avif"
              width={1314}
              height={1042}
              alt="Logo Método Vitor Morais"
            />
            {/* <Image
              className="h-[700px] translate-x-50 -translate-y-10 object-contain"
              src="/images/vitorraio.avif"
              width={1314}
              height={1042}
              alt="Logo Método Vitor Morais"
            /> */}
          </div>
          {/* mobile */}
          <div id="mobile_content" className="xl:hidden">
            <div className="container flex flex-col box-1 md:px-24 md:hidden">
              <Image
                className="w-1/2 -mb-24 t80"
                src="/images/vitorlogo.avif"
                width={164}
                height={164}
                alt="Logo Método Vitor Morais"
              />
            </div>
            <div
              id="hero_image_mobile"
              className="w-full h-[500px]"
              style={{
                backgroundImage: 'url("/images/vitorraio.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <div className="container flex flex-col box-1 md:px-24">
              <div id="hero_content" className="flex flex-col gap-4">
                <Image
                  className="hidden w-1/2 md:flex t80"
                  src="/images/vitorlogo.avif"
                  width={164}
                  height={164}
                  alt="Logo Método Vitor Morais"
                />
                <h1 className="bebas h1bebas text80">
                  Transforme seu corpo treinando no conforto da sua casa com
                  poucos minutos do seu dia
                </h1>
                <p className="text-xl">
                  Obtenha acesso ao meu método de treino e veja como é simples{" "}
                  <strong>perder peso, ganhar força e definir o corpo</strong>{" "}
                  com treinos que tomam menos de 30 minutos do seu dia.
                </p>
                <Link href={linkpay}>
                  <p className="w-full text-center green-button">
                    Quero o Método Vitor Morais
                  </p>
                </Link>
                <p className="">
                De 12x de R$39,90 por 12x de R$19,66 no plano anual
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Fotos */}
        <section>
          <div className="container flex flex-col space-y-4 box-1 md:items-center">
            <h2 className="text-center bebas h2bebas">
              Quem treinou comigo comprova os resultados
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:w-full xl:w-3/4">
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
            <Link href={linkpay} className="">
              <p className="w-full text-center green-button md:w-fit">
                Quero o Método Vitor Morais
              </p>
            </Link>
          </div>
        </section>

        {/* O que é o metodo vitor morais */}
        <section>
          <div className="container flex flex-col space-y-4 box-1 md:items-center md:text-center">
            <h2 className="w-3/4 bebas h2bebas md:w-full md:text-6xl">
              O que é o Método Vitor Morais?
            </h2>
            <p className="text-xl">
              <strong>Sua iniciação para sua nova vida fitness!</strong>
            </p>
            <p className="text-xl">
              Com a metodologia exclusiva e dinâmica desenvolvida por mim com
              meus 7 anos de experiencia na área esportiva e que me fez alcançar
              o físico, saúde e habilidades que tenho hoje!
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
            </div>

            <p>
              Durante <strong>quatro semanas</strong> você terá treinos
              exclusivos e únicos diariamente,
              <strong>
                seguindo meu protocolo para alcançar sua melhor versão!
              </strong>
            </p>
            <Link href={linkpay} className="">
              <p className="w-full text-center green-button md:w-fit">
                Quero o Método Vitor Morais
              </p>
            </Link>
          </div>
        </section>

        {/* alem disso voce tera */}
        <section className="bg-[#FF3E00] text-white">
          <div className="container flex flex-col space-y-4 box-1 md:space-y-8">
            <h2 className="w-3/4 bebas md:w-full h2bebas md:text-6xl md:text-center">
              Além disso, você terá acesso a:
            </h2>

            <div className="flex flex-col space-y-4 md:flex-row md:gap-4 md:space-y-0 md:items-center">
              <div className="flex items-center gap-4 text-xl font-bold md:flex-col md:text-center md:h-full md:w-full">
                <Image
                  className="w-12 md:h-12"
                  src="/images/whatsapp.svg"
                  width={80}
                  height={80}
                  alt="Exercícios Adaptados"
                />
                <p>Comunidade Exclusiva no Whatsapp</p>
              </div>
              <div className="flex items-center gap-4 text-xl font-bold md:flex-col md:text-center md:h-full md:w-full">
                <Image
                  className="w-12 md:h-12"
                  src="/images/lives.svg"
                  width={80}
                  height={80}
                  alt="Exercícios Adaptados"
                />
                <p>Lives exclusivas com a comunidade</p>
              </div>
              <div className="flex items-center gap-4 text-xl font-bold md:flex-col md:text-center md:h-full md:w-full">
                <Image
                  className="w-12 md:h-12"
                  src="/images/protocolos.svg"
                  width={80}
                  height={80}
                  alt="Exercícios Adaptados"
                />
                <p>Acesso aos próximos protocolos de treinos</p>
              </div>
            </div>
          </div>
        </section>

        {/* veja de onde quiser */}
        <section>
          <div className="container flex flex-col space-y-4 box-1 md:items-center">
            <h2 className="bebas h2bebas md:text-6xl md:text-center ">
              Veja de onde você quiser!
            </h2>

            <div className="flex flex-col space-y-4 text-xl font-bold md:flex-row md:gap-4 md:space-y-0">
              <div className="p-8 flex   gap-4 border-slate-700 border-[1px] items-center rounded-2xl md:flex-col md:text-center md:h-full">
                <FontAwesomeIcon icon={faTv} size="2x" className="w-[48px]" />
                <div>
                  Faça as aulas na sua{" "}
                  <span className="inline text-orange-600">Smart TV</span>
                </div>
              </div>
              <div className="p-8 flex gap-4 border-slate-700 border-[1px] items-center rounded-2xl md:flex-col md:text-center md:h-full">
                <FontAwesomeIcon
                  icon={faLaptop}
                  size="2x"
                  className="w-[48px]"
                />
                <div>
                  Assista no{" "}
                  <span className="inline text-orange-600">computador</span>
                </div>
              </div>
              <div className="p-8 flex gap-4 border-slate-700 border-[1px] items-center rounded-2xl md:flex-col md:text-center md:h-full">
                <FontAwesomeIcon
                  icon={faMobile}
                  size="2x"
                  className="w-[48px]"
                />
                <div>
                  Assista no{" "}
                  <span className="inline text-orange-600">
                    tablet ou celular
                  </span>
                </div>
              </div>
            </div>

            <Link href={linkpay} className="">
              <p className="w-full text-center green-button md:w-fit">
                Quero o Método Vitor Morais
              </p>
            </Link>
          </div>
        </section>

        {/* tabela */}
        <section className="hidden">
          <div className="container flex flex-col box-1 ">
            <h2 className="bebas">
              Chegou a sua vez de entrar em forma e alcançar o corpo perfeito!
            </h2>
          </div>
        </section>

        {/* chamada promo */}
        <section className="bg-[#FF3E00] text-white">
          <div className="container flex flex-col space-y-4 box-1 md:flex-row md:items-center">
            <div className="space-y-4">
              <Image
                className="w-full"
                src="/images/computers.avif"
                width={755}
                height={464}
                alt="Exercícios Adaptados"
              />{" "}
              <h2 className="bebas h2bebas">
                Veja tudo que você vai receber agora!
              </h2>
              <div id="list-veja" className="space-y-2 text-lg font-bold">
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="mt-1 text-[#8FFF00]"
                  />
                  Método Vitor Morais
                </div>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="mt-1 text-[#8FFF00]"
                  />
                  Comunidade Exclusiva
                </div>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="mt-1 text-[#8FFF00]"
                  />
                  Lives Exclusivas
                </div>
                <div className="gap-2 hidden">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="mt-1 text-[#8FFF00]"
                  />
                  Bônus: Acesso gratuito aos próximos protocolos de treino
                </div>
              </div>
            </div>
            <div className="p-8 space-y-8 text-center bg-slate-900 rounded-2xl h-fit">
              <h2 className="text-6xl bebas md:h2bebas ">
               Acesse Agora!
              </h2>
              <div className="space-y-3">
                <p className="font-bold">
                  De <span className="line-through">R$397,00</span> por 12x de
                </p>
                <p className="font-bold text-[#8FFF00] text-8xl bebas">
                R$19,66
                </p>
                <p className="font-bold">ou R$197,00 à vista</p>
              </div>
              <Link href={linkpay} className="inline-block w-full">
                <p className="w-full p-6 text-center uppercase green-button">
                  Eu Quero!!!
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* prazer sou vitor */}
        <section>
          <div className="container flex flex-col space-y-4 box-1 md:flex-row md:gap-8">
            <div
              style={{
                backgroundImage: 'url("/images/vitor.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-80 rounded-2xl md:w-1/2 md:h-[560px] xl:h-[500px]"></div>
            <div className="space-y-4 md:w-1/2">
              <h1 className=" bebas h1bebas xl:w-full md:text-6xl xl:text-7xl">
                Prazer, sou o<br />
                <span className="text-[#8FFF00]">vitor morais</span>
              </h1>
              <p>
                Campeão Sul-americano de Calistenia e Street Workout e quinto
                colocado mundial no esporte.
              </p>
              <p>
                Há 7 anos atrás me vi entediado e frustrado com os treinos
                tradicionais e percebi que sou uma pessoa inquieta para fazer
                algo monótono.
              </p>
              <p>
                Por isso, iniciei na calistenia e desenvolvi a minha metodologia
                de treinamento para alcançar meus objetivos.
              </p>
              <p>
                Foi atráves de anos de prática e persistência que me tornei
                Multicampeão da categoria, com resultados notáveis: 5º colocado
                no campeonato mundial que participei na Letônia campeão
                sul-americano e referência internacional no esporte.
              </p>
            </div>
          </div>
        </section>

        {/* 7 dias sem risco strip */}
        <section
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url("/images/pendurado_gray.avif")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}>
          <div className="container flex flex-col space-y-4 box-1">
            <h2 className="bebas h2bebas md:text-6xl">7 Dias sem risco!</h2>
            <div className="flex text-yellow-400">
              <FontAwesomeIcon icon={faStar} size="2x" />
              <FontAwesomeIcon icon={faStar} size="2x" />
              <FontAwesomeIcon icon={faStar} size="2x" />
              <FontAwesomeIcon icon={faStar} size="2x" />
              <FontAwesomeIcon icon={faStar} size="2x" />
            </div>
            <p className="md:w-1/2">
              Experimente meu método sem risco nenhum, se por algum motivo você
              não gostar do conteúdo devolvemos seu investimento sem perguntas
              ou burocracias.
            </p>
          </div>
        </section>

        {/* last call */}
        <section>
          <div className="container flex flex-col items-center space-y-4 text-center box-1">
            <div className="p-8 space-y-8 text-center rounded-2xl  border-[#8fff00] border-[1px] md:w-[500px]">
              <h2 className="bebas h2bebas md:text-6xl">
                Essa promoção não vai se repetir!
              </h2>
              <div className="space-y-3">
                <p className="font-bold">
                  De <span className="line-through">R$397,00</span> por 12x de
                </p>
                <p className="font-bold text-[#8FFF00] text-8xl bebas">
                  R$19,66
                </p>
                <p className="font-bold">ou R$197,00 à vista</p>
              </div>
              <Link href={linkpay} className="inline-block w-full">
                <p className="w-full p-6 text-center uppercase green-button">
                  Eu Quero!!!
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* faq */}
        <section>
          <div className="container flex flex-col  box-1 space-y-4 [&_h5]:text-[#8fff00] md:flex-row md:space-y-0 md:space-x-8">
            <h2 className="bebas h2bebas md:text-6xl md:w-1/2 xl:text-7xl">
              Perguntas <br />
              frequentes
            </h2>
            <div className="space-y-4 md:w-1/2">
              <div className="pb-4 border-b-[1px] border-b-slate-700">
                <h5>Posso parcelar?</h5>
                <p>Sim. Poderá parcelar em até 12x.</p>
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
              <div className="pb-4 ">
                <h5>Como faço para entrar na comunidade?</h5>
                <p>
                  Dentro do Método Vitor Morais você encontrará os links para
                  entrar na comunidade.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
