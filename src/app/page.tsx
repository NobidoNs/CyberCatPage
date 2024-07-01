import Image from 'next/image'
import personImg from 'C:/work/git/CyberCatPage/public/Person.jpg'
// emerald
// lime
// green
// teal
export default function Home() {
	return (
		<main className='flex justify-between pt-32'>
			<div className='px-32 h-96'>
				<div className='h-full grid grid-cols-3 border-solid border-2 border-sky-500 shadow-lg shadow-sky-400 rounded-2xl'>
					<div
						className='relative p-3 border-solid border-2 border-teal-500 rounded-xl shadow-lg shadow-teal-400'
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						<Image src={personImg} alt='' className='w-full h-full' />
					</div>
					<div className='font-mono text-xl pt-6 p-8 col-span-2'>
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							className='dark:invert'
							width={500}
							height={240}
							priority
						/>
						<p className='py-2 mt-2 text-2xl text-slate-700 dark:text-slate-400'>
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
			</div>
		</main>
	)
}
