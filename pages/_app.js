import '../styles/globals.css'
import {useInitializeFirebase} from 'firebase-hook-v9';

function MyApp({ Component, pageProps }) {
  const initializeFirebase = useInitializeFirebase(
    { 
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    }
  );
  return initializeFirebase?  <Component {...pageProps} /> : null;
}

export default MyApp
