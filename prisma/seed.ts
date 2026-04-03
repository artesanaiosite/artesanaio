import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🧹 Limpando banco de dados...')

  // 🔴 Dependentes de Order
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()

  // 🔴 Dependentes de Product
  await prisma.productColor.deleteMany()
  await prisma.size.deleteMany()

  // 🔴 Principal
  await prisma.product.deleteMany()

  // 🔴 Relação many-to-many (importante!)
  await prisma.category.deleteMany()

  console.log('✅ Banco limpo com sucesso!')

  console.log('📦 Criando categorias...')

  const categorias = {
    micangas: await prisma.category.create({
      data: { name: 'Miçangas', slug: 'micangas' },
    }),
    macrame: await prisma.category.create({
      data: { name: 'Macramê', slug: 'macrame' },
    }),
    acessorios: await prisma.category.create({
      data: { name: 'Acessórios', slug: 'acessorios' },
    }),
    presentes: await prisma.category.create({
      data: { name: 'Presentes', slug: 'presentes' },
    }),
  }

  console.log('🛍️ Criando produtos...')

  const produtos = [
    {
      name: 'Chaveiro Bordado Ponto Cruz',
      slug: 'chaveiro-bordado-ponto-cruz',
      imageUrl: '/assets/tipos-de-artesanato/Chaveiro-ponto-cruz-bordado.jpg',
      price: 29.9,
      description: 'Chaveiro artesanal bordado em ponto cruz, delicado e exclusivo.',
      categories: [categorias.presentes.id],
    },
    {
      name: 'Colar Ajustável com Miçangas',
      slug: 'colar-ajustavel-micangas',
      imageUrl: '/assets/tipos-de-artesanato/Colar-ajustável-madeira-miçanga.jpg',
      price: 39.9,
      description: 'Colar artesanal ajustável com miçangas e detalhes em madeira.',
      categories: [categorias.acessorios.id, categorias.micangas.id],
    },
    {
      name: 'Cordão para Celular Artesanal',
      slug: 'cordao-celular-artesanal',
      imageUrl:
        '/assets/tipos-de-artesanato/Cordinha-de-celular-phone-strap-guarda-celular-salva-celular-pulseira-de-celular-de-miçanga.jpg',
      price: 34.9,
      description: 'Cordão de celular artesanal feito com miçangas, moderno e funcional.',
      categories: [categorias.acessorios.id],
    },
    {
      name: 'Pulseira Borboleta Colorida',
      slug: 'pulseira-borboleta-micanga',
      imageUrl: '/assets/tipos-de-artesanato/Pulseira-de-borboleta-miçanga-colorida.jpg',
      price: 24.9,
      description: 'Pulseira artesanal com miçangas coloridas e detalhe de borboleta.',
      categories: [categorias.micangas.id, categorias.acessorios.id],
    },
    {
      name: 'Pulseira Estrela Colorida',
      slug: 'pulseira-estrela-micanga',
      imageUrl: '/assets/tipos-de-artesanato/Pulseira-de-estrela-miçanga-colorida.jpg',
      price: 24.9,
      description: 'Pulseira com detalhe de estrela feita à mão com miçangas.',
      categories: [categorias.micangas.id],
    },
    {
      name: 'Pulseira Flor Artesanal',
      slug: 'pulseira-flor-micanga',
      imageUrl: '/assets/tipos-de-artesanato/Pulseira-de-flor-miçanga-colorida.jpg',
      price: 24.9,
      description: 'Pulseira delicada com flores feitas em miçangas.',
      categories: [categorias.micangas.id],
    },
    {
      name: 'Kit Pulseiras Macramê Personalizadas',
      slug: 'kit-pulseiras-macrame',
      imageUrl:
        '/assets/tipos-de-artesanato/Kit-pulseira-letra-inicial-do-nome-preto-e-branco-simples-unissex-ajustavel-regulavel-2.jpg',
      price: 49.9,
      description: 'Kit de pulseiras em macramê com letras personalizadas.',
      categories: [categorias.macrame.id, categorias.acessorios.id],
    },
    {
      name: 'Toalha Personalizada Bordada',
      slug: 'toalha-personalizada-bordada',
      imageUrl:
        '/assets/tipos-de-artesanato/Toalha-personalizada-bordado-ponto-cruz-nome.jpg',
      price: 59.9,
      description: 'Toalha artesanal bordada com nome personalizado.',
      categories: [categorias.presentes.id],
    },
  ]

  for (const produto of produtos) {
    await prisma.product.create({
      data: {
        name: produto.name,
        slug: produto.slug,
        price: produto.price,
        imageUrl: produto.imageUrl,
        description: produto.description,
        handmade: true,
        materials: 'Produzido artesanalmente',
        stock: 10,
        colors: {
          create: [{ name: 'Padrão', hex: '#000000' }],
        },
        sizes: {
          create: [{ name: 'Único' }],
        },
        categories: {
          connect: produto.categories.map((id) => ({ id })),
        },
      },
    })
  }

  console.log('✅ Seed finalizado com sucesso!')
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