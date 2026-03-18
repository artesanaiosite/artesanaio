import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Criar categorias
  const categoriaMigram = await prisma.category.upsert({
    where: { slug: 'migram' },
    update: {},
    create: {
      name: 'Miçangas',
      slug: 'migram',
    },
  })

  const categoriaMacrame = await prisma.category.upsert({
    where: { slug: 'macrame' },
    update: {},
    create: {
      name: 'Macramê',
      slug: 'macrame',
    },
  })

  const categoriaColares = await prisma.category.upsert({
    where: { slug: 'colares' },
    update: {},
    create: {
      name: 'Colares',
      slug: 'colares',
    },
  })

  const categoriaPulseiras = await prisma.category.upsert({
    where: { slug: 'pulseiras' },
    update: {},
    create: {
      name: 'Pulseiras',
      slug: 'pulseiras',
    },
  })

  // Criar produtos
  const produto1 = await prisma.product.upsert({
    where: { slug: 'pulseira-migram-colorida' },
    update: {},
    create: {
      name: 'Pulseira de Miçangas Colorida',
      slug: 'pulseira-migram-colorida',
      price: 25.00,
      imageUrl: '/logo-artesanaio.jpeg',
      description: 'Pulseira artesanal feita com miçangas coloridas, perfeita para o dia a dia.',
      handmade: true,
      materials: 'Miçangas de vidro, fio nylon',
      stock: 10,
      colors: {
        create: [
          { name: 'Vermelho', hex: '#FF0000' },
          { name: 'Azul', hex: '#0000FF' },
        ],
      },
      sizes: {
        create: [
          { name: 'Único' },
        ],
      },
      categories: {
        connect: [{ id: categoriaMigram.id }, { id: categoriaPulseiras.id }],
      },
    },
  })

  const produto2 = await prisma.product.upsert({
    where: { slug: 'macrame-planta' },
    update: {},
    create: {
      name: 'Macramê Planta Suspensa',
      slug: 'macrame-planta',
      price: 80.00,
      imageUrl: '/logo-artesanaio.jpeg',
      description: 'Decoração artesanal em macramê para plantas, feita à mão com cordas naturais.',
      handmade: true,
      materials: 'Cordas de algodão, argolas de madeira',
      stock: 5,
      colors: {
        create: [
          { name: 'Natural', hex: '#D2B48C' },
        ],
      },
      sizes: {
        create: [
          { name: 'Médio' },
        ],
      },
      categories: {
        connect: [{ id: categoriaMacrame.id }],
      },
    },
  })

  const produto3 = await prisma.product.upsert({
    where: { slug: 'colar-artesanal-prata' },
    update: {},
    create: {
      name: 'Colar Artesanal Prata',
      slug: 'colar-artesanal-prata',
      price: 45.00,
      imageUrl: '/logo-artesanaio.jpeg',
      description: 'Colar delicado feito à mão com contas de prata e miçangas.',
      handmade: true,
      materials: 'Contas de prata, miçangas, corrente fina',
      stock: 8,
      colors: {
        create: [
          { name: 'Prata', hex: '#C0C0C0' },
        ],
      },
      sizes: {
        create: [
          { name: 'Ajustável' },
        ],
      },
      categories: {
        connect: [{ id: categoriaColares.id }],
      },
    },
  })

  console.log('Seed executado com sucesso!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })