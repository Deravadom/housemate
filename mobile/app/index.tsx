import { Redirect } from 'expo-router';
import { useAuth } from '@/components/auth/AuthProvider';

const Index = () => {
  const { signedIn } = useAuth();

  if (signedIn) {
    return <Redirect href="/(app)/dashboard" />;
  } else {
    return <Redirect href="/auth/login" />;
  }
};

export default Index; 