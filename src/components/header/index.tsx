import Link from "next/link"
import Image from "next/image"

export default function Header() {
	return (
		<>
			<header>
				<div className={`bg-black w-full py-5 items-center`}>
					<div className=' container flex justify-between items-center '>
						<Link href='/'>
							<a className={`flex items-center`}>
								<Image src='/img/logo.png' width={351} height={29} />
							</a>
						</Link>

						<div className={`flex space-x-4 text-white `}>
							<Link href='http://www.instagram.com'>
								<a className={`hover:text-yellow-600`}>AGENDA</a>
							</Link>
							<Link href='http://www.facebook.com'>
								<a className={`hover:text-yellow-600`}>FOTOS</a>
							</Link>
							<Link href='http://www.facebook.com'>
								<a className={`hover:text-yellow-600`}>OUÇA</a>
							</Link>
							<Link href='http://www.facebook.com'>
								<a className={`hover:text-yellow-600`}>CARREIRA</a>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
