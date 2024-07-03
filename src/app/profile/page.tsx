import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ProfilePage } from "./components/profile";

export default withPageAuthRequired(async function Profile() {
  const session = await getSession();
  const user = session!.user;

  return (
    <div className="pt-10">
      <ProfilePage user={user} />
    </div>
  );
}, { returnTo: '/profile' })