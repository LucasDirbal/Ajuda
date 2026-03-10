import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/**
 * Consciência Estrutural - Landing Principal
 * Design: Minimalismo Estruturalista Contemporâneo
 * Tipografia: Playfair Display (headlines) + Inter (corpo) + Roboto Mono (números)
 * Cores: Preto Abissal, Dourado Solar, Branco Técnico, Azul Índigo, Cinza Estrutural
 */

export default function Home() {
  const [visibleElements, setVisibleElements] = useState<string[]>([]);

  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
                setVisibleElements((prev) => {
                  if (!prev.includes(id)) {
                    return [...prev, id];
                  }
                  return prev;
                });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-scroll-reveal]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663322280604/Eo93CdffiTipJaA5f2Xxds/hero-consciousness-XaVt4PKRZVMA6GYoy7cUzc.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div
            className={`mb-12 transition-all duration-700 ${
              visibleElements.includes("logo")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="logo"
            data-scroll-reveal
          >
            <div className="text-6xl font-bold text-[#D4AF37] font-serif mb-2">
              369
            </div>
            <div className="text-sm tracking-widest text-[#D4AF37] uppercase">
              Consciência Estrutural
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-700 ${
              visibleElements.includes("headline")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="headline"
            data-scroll-reveal
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Consciência não é sorte.
            <br />
            <span className="text-[#D4AF37]">É estrutura.</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-[#F5F5F5]/80 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
              visibleElements.includes("subheadline")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="subheadline"
            data-scroll-reveal
          >
            Evolução estruturada. Sistema comprovado. Transformação garantida.
            Descubra como o Sistema 369 pode reorganizar sua vida e consciência.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visibleElements.includes("cta-hero")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="cta-hero"
            data-scroll-reveal
          >
            <Button
              className="cta-button text-lg h-auto py-4 px-10 font-bold hover:scale-105 transition-transform"
              onClick={() => {
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Descubra os Produtos
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-[#D4AF37] text-sm">↓</div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Products Section */}
      <section
        id="products"
        className="py-24 md:py-32 px-4 bg-[#0B0B0F]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div
            className={`text-center mb-20 transition-all duration-700 ${
              visibleElements.includes("products-title")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="products-title"
            data-scroll-reveal
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Escolha Seu Caminho
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto" />
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product 1: Community */}
            <div
              className={`transition-all duration-700 ${
                visibleElements.includes("product-1")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              id="product-1"
              data-scroll-reveal
            >
              <div className="bg-[#0F1C2E] border-l-4 border-[#D4AF37] p-8 h-full flex flex-col">
                {/* Product Image */}
                <div className="mb-6 h-48 overflow-hidden rounded">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663322280604/Eo93CdffiTipJaA5f2Xxds/product-community-TUKsJ6SpUK5BTaBgpWrumy.webp"
                    alt="Comunidade Consciência Estrutural"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3
                  className="text-2xl font-bold mb-4 text-[#D4AF37]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Comunidade Consciência Estrutural
                </h3>

                <p className="text-[#F5F5F5]/80 mb-6 flex-grow">
                  Junte-se a uma comunidade de evolução estruturada. Acesso a
                  rituals diários, checklists mensais, relatórios semanais e
                  áudios de recondicionamento neural.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-3">✓</span>
                    <span>Ritual diário 07:00</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-3">✓</span>
                    <span>Checklist 369 mensal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-3">✓</span>
                    <span>Relatório semanal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-3">✓</span>
                    <span>Desafios mensais progressivos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-3">✓</span>
                    <span>Áudios de recondicionamento neural</span>
                  </li>
                </ul>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#D4AF37] font-mono">
                    R$29,90
                  </div>
                  <div className="text-sm text-[#F5F5F5]/60">/mês</div>
                </div>

                <Button className="cta-button w-full">
                  Quero fazer parte da evolução
                </Button>
              </div>
            </div>

            {/* Product 2: Test */}
            <div
              className={`transition-all duration-700 delay-100 ${
                visibleElements.includes("product-2")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              id="product-2"
              data-scroll-reveal
            >
              <div className="bg-[#0F1C2E] border-l-4 border-[#D4AF37] p-8 h-full flex flex-col">
                {/* Product Image */}
                <div className="mb-6 h-48 overflow-hidden rounded">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663322280604/Eo93CdffiTipJaA5f2Xxds/product-test-VeJG8A2dxUN7S4c9zj7K4D.webp"
                    alt="Índice de Expansão 369"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3
                  className="text-2xl font-bold mb-4 text-[#D4AF37]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Índice de Expansão 369
                </h3>

                <p className="text-[#F5F5F5]/80 mb-6 flex-grow">
                  Descubra seu nível atual de consciência estrutural. Teste
                  diagnóstico com 40 perguntas que revelam sua estrutura pessoal
                  e indicam o caminho para evolução.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-3">✓</span>
                    <span>40 perguntas estruturadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-3">✓</span>
                    <span>Diagnóstico detalhado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-3">✓</span>
                    <span>Relatório personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-3">✓</span>
                    <span>Acesso imediato após pagamento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-3">✓</span>
                    <span>Garantia de 7 dias</span>
                  </li>
                </ul>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#D4AF37] font-mono">
                    R$50,00
                  </div>
                  <div className="text-sm text-[#F5F5F5]/60">pagamento único</div>
                </div>

                <Button className="cta-button w-full">
                  Fazer meu teste agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* System Explanation Section */}
      <section className="py-24 md:py-32 px-4 bg-[#0B0B0F]">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              visibleElements.includes("system-title")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="system-title"
            data-scroll-reveal
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              O Sistema 369
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto" />
          </div>

          <div
            className={`transition-all duration-700 ${
              visibleElements.includes("system-content")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="system-content"
            data-scroll-reveal
          >
            <p className="text-lg text-[#F5F5F5]/80 mb-8 leading-relaxed">
              O Sistema 369 é uma metodologia estruturada de desenvolvimento
              pessoal baseada em três pilares fundamentais:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#D4AF37] font-mono mb-4">
                  3
                </div>
                <h4 className="text-xl font-bold mb-2">Estrutura Mental</h4>
                <p className="text-[#F5F5F5]/70">
                  Reorganize seus padrões de pensamento para criar uma base
                  sólida.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-[#D4AF37] font-mono mb-4">
                  6
                </div>
                <h4 className="text-xl font-bold mb-2">Ação Consistente</h4>
                <p className="text-[#F5F5F5]/70">
                  Implemente hábitos que transformam sua realidade dia após dia.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-[#D4AF37] font-mono mb-4">
                  9
                </div>
                <h4 className="text-xl font-bold mb-2">Expansão Contínua</h4>
                <p className="text-[#F5F5F5]/70">
                  Evolua constantemente através de desafios progressivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-4 bg-[#0B0B0F]">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              visibleElements.includes("faq-title")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="faq-title"
            data-scroll-reveal
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Perguntas Frequentes
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto" />
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Como funciona a garantia de 7 dias?",
                a: "Se você não estiver satisfeito com o teste, devolvemos 100% do seu investimento nos primeiros 7 dias.",
              },
              {
                q: "Posso cancelar a comunidade quando quiser?",
                a: "Sim, você pode cancelar sua assinatura a qualquer momento sem penalidades ou taxas adicionais.",
              },
              {
                q: "Quanto tempo leva para ver resultados?",
                a: "Muitos membros relatam mudanças significativas em 30 dias. Resultados variam de acordo com o engajamento.",
              },
              {
                q: "O teste é realmente diagnóstico?",
                a: "Sim, desenvolvemos o teste com especialistas em desenvolvimento pessoal. Você recebe um relatório detalhado.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ${
                  visibleElements.includes(`faq-${idx}`)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                id={`faq-${idx}`}
                data-scroll-reveal
              >
                <div className="bg-[#0F1C2E] border-l-4 border-[#D4AF37] p-6">
                  <h4 className="text-lg font-bold text-[#D4AF37] mb-3">
                    {item.q}
                  </h4>
                  <p className="text-[#F5F5F5]/80">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 px-4 bg-[#0B0B0F]">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              visibleElements.includes("final-cta")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="final-cta"
            data-scroll-reveal
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pronto para Evoluir?
            </h2>
            <p className="text-lg text-[#F5F5F5]/80 mb-12 max-w-2xl mx-auto">
              Sua transformação começa agora. Escolha entre a comunidade para
              evolução contínua ou o teste para descobrir seu ponto de partida.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button className="cta-button">Comunidade - R$29,90/mês</Button>
              <Button className="cta-button">Teste - R$50,00</Button>
            </div>

            {/* Guarantee Badge */}
            <div className="mt-12 pt-12 border-t border-[#1F1F24]">
              <p className="text-sm text-[#D4AF37] font-bold">
                ✓ Garantia de 7 dias | Sem riscos | Cancelamento a qualquer momento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1C2E] border-t border-[#1F1F24] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-[#F5F5F5]/60 text-sm">
          <p>© 2026 Consciência Estrutural. Todos os direitos reservados.</p>
          <p className="mt-4">
            Desenvolvido com estrutura e propósito para sua evolução.
          </p>
        </div>
      </footer>
    </div>
  );
}
