import { ChevronLeftIcon } from "lucide-react";
import { getSession } from "@auth0/nextjs-auth0";
import UserProfile from "./components/user-profile";
import { z } from "zod";
import { ProfilePage } from "./user-profile-page";


export default async function Profile() {
  const session = await getSession();
  const user = session!.user;

  return (
      
    <ProfilePage
    user={user}
    
    
  />
  
      
  
  );
}