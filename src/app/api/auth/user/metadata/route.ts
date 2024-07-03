import { handleUserMetadataFetch, handleUserMetadataUpdate } from "@/components/auth0/routers/user-metadata";
  
export const GET = handleUserMetadataFetch();

export const PUT = handleUserMetadataUpdate();
  