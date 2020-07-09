import { Service } from "@paysuite/mpesa";
import dotenv from "dontenv";

dotenv.config();

const API_KEY = process.env("API_KEY");
const PUBLIC_KEY = process.env("PUBLIC_KEY");
const USER_AGENT = process.env("USER_AGENT");
const ORIGIN = process.env("ORIGIN");
const HOST = process.env("HOST");
const SERVICE_PROVIDER_CODE = process.env("SERVICE_PROVIDER_CODE");
const SECURITY_CREDENTIAL = process.env("SECURITY_CREDENTIAL");
const INITIATOR_IDENTIFIER = process.env("INITIATOR_IDENTIFIER");

const client = new Client({
  apiKey: API_KEY,
  publicKey: PUBLIC_KEY,
  userAgent: USER_AGENT,
  origin: ORIGIN,
  host: HOST,
  serviceProviderCode: SERVICE_PROVIDER_CODE,
  initiatorIdentifier: INITIATOR_IDENTIFIER,
  securityCredential: SECURITY_CREDENTIAL,
  verifySSL: false,
  debugging: true,
  environment: SANDBOX,
});

// Replace subject with tranaction, reference ou conversation returned from a successful transaction
client
  .query({ subject: "1234567890", reference: "123456789" })
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log(e);
  });
