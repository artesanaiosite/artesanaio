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
      price: 45.0,
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

  const products = [produto1, produto2, produto3]
  const statuses = ['PENDENTE', 'PAGO', 'ENVIADO', 'CANCELADO']

  for (let i = 0; i < 30; i += 1) {
    const date = new Date()
    date.setDate(date.getDate() - i)

    const orderCount = Math.floor(Math.random() * 3) + 1
    const selectedItems = []
    let total = 0

    for (let j = 0; j < orderCount; j += 1) {
      const produto = products[Math.floor(Math.random() * products.length)]
      const quantity = Math.floor(Math.random() * 3) + 1
      const itemTotal = produto.price * quantity
      total += itemTotal
      selectedItems.push({
        productId: produto.id,
        name: produto.name,
        quantity,
        price: produto.price,
        size: 'Único',
        color: 'Natural',
      })
    }

    await prisma.order.create({
      data: {
        fullName: `Cliente Teste ${i + 1}`,
        email: `cliente${i + 1}@example.com`,
        cpf: '00000000000',
        phone: '11999999999',
        address: {
          street: 'Rua Exemplo',
          number: `${i + 1}`,
          city: 'São Paulo',
          state: 'SP',
          zip: '01234-567',
        },
        frete: 15,
        total: Number(total.toFixed(2)),
        statusPagamento: statuses[i % statuses.length],
        createdAt: date,
        items: {
          create: selectedItems,
        },
      },
    })
  }

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