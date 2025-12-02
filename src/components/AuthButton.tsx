import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function AuthButton() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      toast.error("Failed to sign in with Google");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out successfully");
    } catch (error) {
      toast.error("Failed to sign out");
    }
  };

  if (loading) {
    return (
      <div className="h-10 w-24 bg-muted/50 rounded-md animate-pulse" />
    );
  }

  if (user) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
          <User className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground/80 max-w-[120px] truncate">
            {user.user_metadata?.full_name || user.email?.split("@")[0]}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSignOut}
          className="text-muted-foreground hover:text-foreground hover:bg-destructive/20"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Button
        onClick={handleSignIn}
        variant="outline"
        className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10"
      >
        <LogIn className="w-4 h-4" />
        Sign in with Google
      </Button>
    </motion.div>
  );
}
