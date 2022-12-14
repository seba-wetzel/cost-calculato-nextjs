import Head from 'next/head'

export default function Login() {
    const [user, signInWithPopup] = useSignInWithPopup();
    return (
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {user && <pre>{JSON.stringify(user)}</pre>}
        <main className={styles.main}>
            <button onClick={()=>signInWithPopup()}>Sign in with google</button>
        </main>
        </div>
    )
    }
