"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/sign-in");
    router.refresh();
  };

  return (
    <Button 
      onClick={handleLogout}
      variant="outline"
      size="sm"
    >
      Sign Out
    </Button>
  );
};

export default LogoutButton; 