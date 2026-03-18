'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="w-full bg-[#8B5E3C] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
          <Image
  src="/logo-artesanaio-1.jpeg"
  alt="Artesanaio"
  width={200}
  height={80}
  className="h-[60px] w-auto object-contain"
/>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-6 text-white font-medium">
          <Link href="/" className="hover:opacity-80 transition">
            Início
          </Link>
          <Link href="/loja" className="hover:opacity-80 transition">
            Loja
          </Link>
          <Link href="/presentes-artesanais" className="hover:opacity-80 transition">
            Presentes Artesanais
          </Link>
          <Link href="/acessorios-artesanais" className="hover:opacity-80 transition">
            Acessórios
          </Link>
          <Link href="/sobre" className="hover:opacity-80 transition">
            Sobre
          </Link>
          <Link href="/contato" className="hover:opacity-80 transition">
            Contato
          </Link>
        </nav>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <nav className="md:hidden bg-[#6E472C] px-4 py-4 flex flex-col gap-3">
          <Link
            href="/"
            className="text-white font-medium hover:opacity-80 transition py-2"
            onClick={closeMenu}
          >
            Início
          </Link>
          <Link
            href="/presentes-artesanais"
            className="text-white font-medium hover:opacity-80 transition py-2"
            onClick={closeMenu}
          >
            Presentes Artesanais
          </Link>
          <Link
            href="/acessorios-artesanais"
            className="text-white font-medium hover:opacity-80 transition py-2"
            onClick={closeMenu}
          >
            Acessórios
          </Link>
          <Link
            href="/sobre"
            className="text-white font-medium hover:opacity-80 transition py-2"
            onClick={closeMenu}
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className="text-white font-medium hover:opacity-80 transition py-2"
            onClick={closeMenu}
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  )
}