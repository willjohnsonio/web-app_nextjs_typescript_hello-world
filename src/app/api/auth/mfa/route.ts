import { handleMFAFactorEnrollment, handleMFAFactorsList } from "@/components/auth0/routers/mfa";

export const GET = handleMFAFactorsList();

export const POST = handleMFAFactorEnrollment();
