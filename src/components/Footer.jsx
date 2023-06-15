/* eslint-disable react/jsx-no-target-blank */
export default function Footer(){
	return (
		<footer className="bg-neutral-950 text-gray-400 flex justify-center h-max border-t-2 border-neutral-500 py-10 gotham">
			<div className="flex flex-col gap-5 items-center">
				
				<ul className="hidden text-sm md:flex flex-col md:flex-row gap-2 md:gap-10 font-light">
					<li>
					<a href="">Github</a>
					</li>
					<li>
					<a href="">Linkedin</a>
					</li>
					<li>
					<a href="">Twitter</a>
					</li>
					<li>
					<a href="">Youtube</a>
					</li>
					<li>
					<a href="">Instagram</a>
					</li>
				</ul>

				<div className="flex flex-col items-center gap-4">
					<p className="font-light text-sm">Made With Vite, Tailwind, and Vercel</p>
					<a href="https://gathan.vercel.app/" target="_blank" className="font-semibold">Gathan Mahesa / Jue Viole Grace</a>
				</div>
			</div>
		</footer>
	);
}