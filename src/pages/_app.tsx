import "tailwindcss/tailwind.css"
import "../styles/globals.css"

import Header from "../components/header"
import Footer from "../components/footer"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<div className='content'>
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	)
}

export default MyApp
