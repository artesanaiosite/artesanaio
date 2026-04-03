'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogoutButton } from '@/components/admin/LogoutButton'

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const isLoginPage = pathname === '/admin/login'

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold">Admin • Artesanaio</h1>

          {!isLoginPage && (
            <nav className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <Link href="/">Loja</Link>
              <Link href="/admin">Dashboard</Link>
              <Link href="/admin/pedidos">Pedidos</Link>
              <Link href="/admin/etiquetas">Etiquetas</Link>

              <LogoutButton />
            </nav>
          )}
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  )
}