'use client'

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full">

      {/* BENEFÍCIOS - Mobile First */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 py-12 sm:py-16 bg-[#F7F3EE] text-center px-4">

        <div>
          <h4 className="font-bold text-base md:text-lg">Peças Artesanais</h4>
          <p className="text-sm md:text-base text-gray-700">Produzidas manualmente</p>
        </div>

        <div>
          <h4 className="font-bold text-base md:text-lg">Produtos Únicos</h4>
          <p className="text-sm md:text-base text-gray-700">Cada peça é exclusiva</p>
        </div>

        <div>
          <h4 className="font-bold text-base md:text-lg">Atendimento Direto</h4>
          <p className="text-sm md:text-base text-gray-700">Pelo WhatsApp</p>
        </div>

      </div>

      {/* FOOTER PRINCIPAL - Mobile First */}
      <div className="w-full bg-[#8B5E3C] text-white py-12 md:py-16">

        <div className="max-w-6xl mx-auto px-4 flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-10">

          {/* LOGO */}
          <div>
            <Image
              src="/logo-artesanaio.jpeg"
              alt="Artesanaio artesanato"
              width={150}
              height={80}
              className="w-32 h-auto"
            />
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Artesanato feito à mão com carinho e atenção aos detalhes.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-bold mb-4 text-base md:text-lg">Explorar</h4>

            <ul className="space-y-2 text-sm md:text-base">

              <li>
                <Link href="/presentes-artesanais" className="hover:opacity-80 transition">
                  Presentes artesanais
                </Link>
              </li>

              <li>
                <Link href="/acessorios-artesanais" className="hover:opacity-80 transition">
                  Acessórios artesanais
                </Link>
              </li>

              <li>
                <Link href="/macrame-artesanal" className="hover:opacity-80 transition">
                  Macramê artesanal
                </Link>
              </li>

              <li>
                <Link href="/sobre" className="hover:opacity-80 transition">
                  Sobre a Artesanaio
                </Link>
              </li>

            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="font-bold mb-4 text-base md:text-lg">Contato</h4>

            <p className="text-sm md:text-base">WhatsApp</p>

            <Link href="https://wa.me/5521986369426" className="font-semibold hover:opacity-80 transition">
              (21) 98636-9426
            </Link>

            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Atendimento online para todo o Brasil
            </p>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center py-4 md:py-6 text-xs md:text-sm bg-[#6E472C] text-white px-4">
        © {new Date().getFullYear()} Artesanaio — Artesanato feito à mão
      </div>

    </footer>
  )
}