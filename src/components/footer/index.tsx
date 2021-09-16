import { Facebook, Instagram } from "../icons"
import Link from "next/link"

export default function Footer() {
	return (
		<>
			<footer>
				<div className={`bg-black w-full py-3  text-white`}>
					<div className=' container flex justify-between items-center '>
						<div className={`flex space-x-2 `}>
							<Link href='http://dropbox.com'>
								<a className={`m-0 hover:text-yellow-600`}>PRESSKIT</a>
							</Link>

							<Link href='http://dropbox.com'>
								<a className={`m-0 hover:text-yellow-600`}>CONTATO</a>
							</Link>
						</div>
						<div className={`flex space-x-2 `}>
							<Link href='http://www.instagram.com'>
								<a>
									<Instagram />
								</a>
							</Link>
							<Link href='http://www.facebook.com'>
								<a>
									<Facebook />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
