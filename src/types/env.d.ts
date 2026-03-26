declare namespace NodeJS {
  interface ProcessEnv {
    // PAYLOAD
    PAYLOAD_SECRET: string

    // WEBSITE DETAILS
    SITE_NAME: string
    SITE_URL: string

    // DATABASE
    DATABASE_URI: string
    DB_USER: string
    DB_PASSWORD: string
    DB_NAME: string

    // SMTP
    SMTP_HOST: string
    SMTP_USER: string
    SMTP_PASS: string
    SMTP_PORT: string

    // VIMEO
    VIMEO_CLIENT_ID: string
    VIMEO_CLIENT_SECRET: string
    VIMEO_TOKEN: string

    // VPS
    VPS_AIPA_ADMIN: string
    VPS_ZVEZDE_ORIONA_ADMIN: string
  }
}
