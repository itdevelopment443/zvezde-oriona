import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'

export const enableNodemailer = () => {
  return nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_USER,
    defaultFromName: process.env.SITE_NAME,
    transport: nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }),
  })
}
