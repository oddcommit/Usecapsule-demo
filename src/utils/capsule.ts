import { Environment, CapsuleWeb } from "@usecapsule/react-sdk";

const CAPSULE_API_KEY = process.env.REACT_APP_CAPSULE_API_KEY;

if (!CAPSULE_API_KEY) {
  throw new Error("CAPSULE_API_KEY is not set");
}

export const capsuleClient = new CapsuleWeb(Environment.BETA, CAPSULE_API_KEY);
