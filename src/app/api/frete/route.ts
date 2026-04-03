// src/app/api/frete/route.ts
import { NextResponse } from 'next/server'

interface MelhorEnvioResponse {
  id: number
  name: string
  price: number
  delivery_time: number
  error?: string
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    console.log('📦 REQUEST FRETE:', body)

    const { cepDestino, quantidade } = body

    if (!cepDestino || cepDestino.length !== 8) {
      console.warn('⚠️ CEP inválido:', cepDestino)
      return NextResponse.json({ error: 'CEP inválido' }, { status: 400 })
    }

    const response = await fetch(
      'https://www.melhorenvio.com.br/api/v2/me/shipment/calculate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.MELHOR_ENVIO_TOKEN}`,
        },
        body: JSON.stringify({
          from: { postal_code: '25935506' },
          to: { postal_code: cepDestino },
          products: [
            {
              id: '1',
              quantity: quantidade,
              weight: 0.2,
              width: 20,
              height: 5,
              length: 20,
              insurance_value: 100,
            },
          ],
        }),
      }
    )

    const data = await response.json()

    console.log('🚚 RESPOSTA MELHOR ENVIO:', {
      status: response.status,
      data,
    })

    if (!response.ok) {
      console.error('❌ ERRO MELHOR ENVIO COMPLETO:', {
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        body: data,
      })

      return NextResponse.json(
        {
          error: 'Erro ao calcular frete',
          details: data,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(data)
  } catch (err: any) {
    console.error('💥 ERRO INTERNO COMPLETO:', {
      message: err.message,
      stack: err.stack,
    })

    return NextResponse.json(
      { error: 'Erro interno', details: err.message },
      { status: 500 }
    )
  }
}