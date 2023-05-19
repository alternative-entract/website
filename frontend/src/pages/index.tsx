import {useUser} from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, isLoading } = useUser()

  return (<>Home</>)
}
