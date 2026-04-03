import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full bg-[#F7F3EE] text-[#3E2A1F]">

      <section className="w-full py-16 md:py-32 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/logo-artesanaio.jpeg"
            alt="Artesanaio artesanato feito à mão"
            width={180}
            height={180}
            className="w-32 md:w-48 h-auto mx-auto mb-6"
          />

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Artesanato feito à mão
          </h1>

          <p className="w-full max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed px-0">
            Pulseiras de miçanga, macramê artesanal e acessórios únicos feitos à mão.
            Presentes criativos e delicados para momentos especiais.
          </p>

          <a
            href="https://wa.me/5521986369426"
            className="inline-block w-full sm:w-auto px-6 py-3 bg-[#2F8F5B] text-white font-semibold rounded-xl hover:bg-[#26764B] transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* CATEGORIAS - Mobile First */}
      <section className="w-full py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Nossos tipos de artesanato
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

            <Link href="/pulseiras-de-micanga" className="group">
              <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition h-full">
                  <Image
                  src="/assets/tipos-de-artesanato/Pulseira-de-borboleta-miçanga-colorida.jpg"
                  alt="Pulseira de miçanga de borboleta colorida.jpg"
                  width={500}
                  height={500}
                  className="w-full h-40 object-cover rounded mb-4"
                />  
                <p className="text-base md:text-lg font-semibold group-hover:text-[#2F8F5B] transition">
                  Pulseiras de miçanga
                </p>
              </div>
            </Link>

            <Link href="/macrame-artesanal" className="group">
              <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition h-full">
                  <Image
                  src="/assets/tipos-de-artesanato/Toalha-personalizada-bordado-ponto-cruz-nome.jpg"
                  alt="Toalha personalizada bordado ponto cruz nome"
                  width={500}
                  height={500}
                  className="w-full h-40 object-cover rounded mb-4"
                />  
                <p className="text-base md:text-lg font-semibold group-hover:text-[#2F8F5B] transition">
                  Toalhas Bordadas
                </p>
              </div>
            </Link>

            <Link href="/colares-artesanais" className="group">
              <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition h-full">
                  <Image
                  src="/assets/tipos-de-artesanato/Colar-ajustável-madeira-miçanga.jpg"
                  alt="Colar ajustável madeira miçanga.jpg"
                  width={500}
                  height={500}
                  className="w-full h-40 object-cover rounded mb-4"
                />  
                <p className="text-base md:text-lg font-semibold group-hover:text-[#2F8F5B] transition">
                  Colares artesanais
                </p>
              </div>
            </Link>

            <Link href="/chaveiros-artesanais" className="group">
              <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition h-full">
                <Image
                  src="/assets/tipos-de-artesanato/Chaveiro-ponto-cruz-bordado.jpg"
                  alt="Chaveiros artesanais ponto cruz bordado"
                  width={500}
                  height={500}
                  className="w-full h-40 object-cover rounded mb-4"
                />  
                <p className="text-base md:text-lg font-semibold group-hover:text-[#2F8F5B] transition">
                  Chaveiros artesanais
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* SOBRE ARTESANATO - Mobile First */}
      <section className="w-full bg-[#E6D8C7] py-12 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Peças únicas feitas à mão
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            Cada peça da Artesanaio é criada manualmente com atenção aos detalhes.
            Trabalhamos com miçangas, macramê e técnicas artesanais para criar
            acessórios delicados, presentes criativos e peças decorativas únicas.
          </p>
        </div>
      </section>

      {/* CTA - Mobile First */}
      <section className="w-full py-12 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Quer uma peça personalizada?
          </h2>

          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Entre em contato e faça seu pedido direto pelo WhatsApp.
          </p>

          <a
            href="https://wa.me/5521986369426"
            className="inline-block w-full sm:w-auto px-6 py-3 bg-[#2F8F5B] text-white font-semibold rounded-xl hover:bg-[#26764B] transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* LINKS SEO */}
      <section className="w-full py-8 md:py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap text-xs md:text-sm">
          <Link href="/presentes-artesanais" className="hover:opacity-80 transition">
                  <Image
                  src="/assets/tipos-de-artesanato/Pulseira-de-estrela-miçanga-colorida.jpg"
                  alt="Pulseira de miçanga de estrela colorida.jpg"
                  width={500}
                  height={500}
                  className="w-full h-40 object-cover rounded mb-4"
                />  
            Presentes artesanais
          </Link>
          <Link href="/acessorios-artesanais" className="hover:opacity-80 transition">
                  <Image
                  src="/assets/tipos-de-artesanato/Cordinha-de-celular-phone-strap-guarda-celular-salva-celular-pulseira-de-celular-de-miçanga.jpg"
                  alt="Cordinha de celular phone strap guarda celular salva celular pulseira de celular de miçanga.jpg"
                  width={500}
                  height={500}
                  className="w-full h-40 object-cover rounded mb-4"
                />  
            Acessórios artesanais
          </Link>
          <Link href="/macrame-artesanal" className="hover:opacity-80 transition">
                  <Image
                  src="/assets/tipos-de-artesanato/Pulseira-de-flor-miçanga-colorida.jpg"
                  alt="Pulseira de miçanga de flor colorida.jpg"
                  width={500}
                  height={500}
                  className="w-full h-40 object-cover rounded mb-4"
                />  
            Estilo artesanal
          </Link>
        </div>
      </section>

    </div>
  );
}