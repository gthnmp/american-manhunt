
const Footer = () => {
	return (
		<footer className="bg-neutral-950 text-gray-400 flex justify-center h-60 border-t-2 border-neutral-500 mt-20 pt-20">
			<div className="flex flex-col gap-5 items-center">
				
				<ul className="flex gap-10 font-light">
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
					<p className="font-thin">Made With Vite, React, and Love</p>
					<h1 className="font-bold">Jue Viole Grace</h1>
				</div>
			</div>
		</footer>
	);
};

export default Footer;