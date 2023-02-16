import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/lib/paypal'
import paypal from '@paypal/checkout-server-sdk'

const prisma = new PrismaClient()
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const PaypalClient = client()
  //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
  const request = new paypal.orders.OrdersCreateRequest()
  request.headers['prefer'] = 'return=representation'
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      { 
        amount: {
          currency_code: 'USD',
          value: '12.00',
        },
      },
    ],
  })
  const response = await PaypalClient.execute(request)
  if (response.statusCode !== 201) {
    console.log('Error creating order', response)
    res.status(500)
  }

  //Once order is created store the data using Prisma
  // await prisma.paypalpayment.create({
  //   data: {
  //     orderID: response.result.id,
  //     status: 'PENDING',
  //     course_name: 'Test Course',
  //     course_price: 100,
  //   }, 
  // })
  res.json({ orderID: response.result.id })
}