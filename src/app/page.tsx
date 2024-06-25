import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex justify-between pt-48 w-full'>
			<div className='grid grid-cols-2 px-32 h-56 shadow-lg shadow-cyan-500/50'>
				<div className=''>
					<Image
						src='/Person.jpg'
						alt='Vercel Logo'
						width={400}
						height={300}
						priority
					/>
				</div>
				<div className='font-mono text-lg pl-24 pt-6'>
					<Image
						src='/vercel.svg'
						alt='Vercel Logo'
						className='dark:invert'
						width={500}
						height={240}
						priority
					/>
					<p className='py-12 mt-2 text-lg text-slate-700 dark:text-slate-400'>
						Text
					</p>
					<div>
						<a href='/' className='pr-12'>
							ArtStation
						</a>
						<a href='/'>Link</a>
					</div>
				</div>
			</div>
		</main>
	)
}
