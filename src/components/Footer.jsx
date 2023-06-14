
const Footer = () => {
	return (
		<footer className="bg-neutral-950 text-gray-400 flex justify-center h-max border-t-2 border-neutral-500 mt-20 py-20">
			<div className="flex flex-col gap-5 items-center">
				
				<ul className="hidden md:flex flex-col md:flex-row gap-2 md:gap-10 font-light">
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
					<p className="font-thin">Made With Vite, Vercel, and Tailwind</p>
					<h1 className="font-bold">Jue Viole Grace</h1>
				</div>
			</div>
		</footer>
	);
};

export default Footer;