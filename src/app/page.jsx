import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import {
  FaUserPlus,
  FaIdCard,
  FaTools,
  FaProjectDiagram,
  FaShareAlt,
  FaRocket
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <section className="flex flex-col md:flex-row w-full px-6 md:px-10 items-center gap-8 md:gap-12 py-10 md:py-20">
        <div className="flex flex-col w-full md:w-[60%] space-y-6 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl leading-tight md:leading-snug">
            Seja bem-vindo(a) ao Tech.folio
          </h1>
          <p className="text-base md:text-lg leading-relaxed md:leading-normal">
            Tech.folio é uma plataforma desenvolvida por estudantes da{" "}
            <b>Universidade Virtual do Estado de São Paulo (UNIVESP)</b>,
            projetada para ajudar futuros profissionais de tecnologia a criarem
            portfólios digitais de forma fácil e intuitiva. Com a{" "}
            <b>Tech.folio</b>, você pode apresentar seus projetos, experiências
            e habilidades de maneira atraente, facilitando a conexão com
            empregadores e destacando-se no mercado de trabalho.
          </p>
        </div>
        <div className="w-full md:w-[40%] flex justify-center md:justify-end">
          <Image
            src="/Networking.svg"
            alt="Ilustração de duas pessoas sorrindo e fazendo um aperto de mãos em um ambiente de negócios, com um currículo visível ao fundo."
            width={500}
            height={300}
            className="w-4/5 md:w-full h-auto"
            priority
          />
        </div>
      </section>

      <section className="w-full px-6 md:px-10 py-8 md:py-12 bg-transparent">
        <h2 className="font-bold text-2xl md:text-4xl mb-6 text-center">
          Como Funciona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="flex flex-col items-center text-center bg-[rgba(109,40,217,0.6)] rounded-lg p-4">
            <CardHeader className="flex flex-col items-center">
              <FaUserPlus className="text-white text-4xl mb-3" />
              <CardTitle className="text-lg font-semibold">
                Criar Conta
              </CardTitle>
              <CardDescription className="text-sm">
                Cadastre-se facilmente para começar a montar seu portfólio.
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>

          <Card className="flex flex-col items-center text-center bg-[rgba(109,40,217,0.6)] rounded-lg p-4">
            <CardHeader className="flex flex-col items-center">
              <FaIdCard className="text-white text-4xl mb-3" />
              <CardTitle className="text-lg font-semibold">
                Preencher Dados Pessoais
              </CardTitle>
              <CardDescription className="text-sm">
                Complete seu perfil com informações pessoais e de contato.
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>

          <Card className="flex flex-col items-center text-center bg-[rgba(109,40,217,0.6)] rounded-lg p-4">
            <CardHeader className="flex flex-col items-center">
              <FaTools className="text-white text-4xl mb-3" />
              <CardTitle className="text-lg font-semibold">
                Adicionar Habilidades
              </CardTitle>
              <CardDescription className="text-sm">
                Liste suas habilidades pessoais e técnicas para destacar seu
                perfil.
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>

          <Card className="flex flex-col items-center text-center bg-[rgba(109,40,217,0.6)] rounded-lg p-4">
            <CardHeader className="flex flex-col items-center">
              <FaProjectDiagram className="text-white text-4xl mb-3" />
              <CardTitle className="text-lg font-semibold">
                Adicionar Projetos
              </CardTitle>
              <CardDescription className="text-sm">
                Apresente os projetos que desenvolveu, destacando seu portfólio
                e experiências práticas.
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>

          <Card className="flex flex-col items-center text-center bg-[rgba(109,40,217,0.6)] rounded-lg p-4">
            <CardHeader className="flex flex-col items-center">
              <FaShareAlt className="text-white text-4xl mb-3" />
              <CardTitle className="text-lg font-semibold">
                Compartilhar
              </CardTitle>
              <CardDescription className="text-sm">
                Compartilhe seu portfólio com recrutadores ou colegas e aumente
                sua rede de contatos.
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>

          <Card className="flex flex-col items-center text-center bg-[rgba(109,40,217,0.6)] rounded-lg p-4">
            <CardHeader className="flex flex-col items-center">
              <FaRocket className="text-white text-4xl mb-3" />
              <CardTitle className="text-lg font-semibold">
                Alcançar o Sucesso
              </CardTitle>
              <CardDescription className="text-sm">
                Com seu portfólio bem estruturado, esteja pronto para alcançar
                novas oportunidades e se destacar no mercado.
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full px-6 md:px-10 items-center gap-8 md:gap-12 py-10 md:py-20">
        <div className="flex flex-col w-full md:w-[60%] space-y-6 text-center md:text-left">
          <h2 className="font-bold text-2xl md:text-4xl mb-4">
            Colabore Conosco!
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            O Tech.folio é um projeto open-source, e você é convidado(a) a
            contribuir com novas ideias, melhorias e funcionalidades. Nossa
            missão é criar uma plataforma cada vez mais inclusiva e acessível
            para ajudar futuros profissionais a mostrarem seu potencial.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://github.com/Gonzagadavid/portfohub"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 text-white bg-[#6D28D9] hover:bg-[#5A21B1] rounded-md font-semibold text-lg inline-block max-w-fit"
              aria-label="Contribua no GitHub"
            >
              Contribua no GitHub
            </a>
          </div>
        </div>
        <div className="w-full md:w-[40%] flex justify-center md:justify-end">
          <Image
            src="/Code.svg"
            alt="Ilustração de um rapaz sentado no chão, usando um notebook, com uma imagem de um monitor ao fundo."
            width={500}
            height={300}
            className="w-4/5 md:w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
