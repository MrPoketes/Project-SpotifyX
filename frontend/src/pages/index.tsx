import React, { useEffect } from 'react';
import Head from 'next/head';
import { signin, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';

export default function Authentication() {
	const [session, loading] = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session) router.push('/home');
	}, [session]);

	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<div
					className="flex justify-center justify-items-center text-white"
					style={{ marginTop: '2%' }}
				>
					<button
						className="w-1/2 h-10 text-lg focus:outline-none bg-emerald-600 hover:bg-emerald-500 transition-colors ease-in-out rounded"
						onClick={signin}
					>
						Sign in to continue
					</button>
				</div>
			</main>
		</div>
	);
}
