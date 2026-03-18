import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function CategoriasPage() {
  const categorias = await prisma.category.findMany({
    orderBy: { name: 'asc' },
  })

  return (
    <main className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Todas as Categorias</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categorias.map((categoria) => (
          <Link
            key={categoria.id}
            href={`/loja/categoria/${categoria.slug}`}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{categoria.name}</h2>
            <p className="text-gray-600">Ver produtos nesta categoria</p>
          </Link>
        ))}
      </div>
    </main>
  )
}