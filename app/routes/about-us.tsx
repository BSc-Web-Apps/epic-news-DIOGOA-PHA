import { Link } from '@remix-run/react'

export default function AboutUsRoute() {
	return (
		<div className="min-h-screen bg-amber-300 py-16">
			<div className="container mx-auto max-w-3xl text-center">
				<h1 className="mb-6 text-4xl font-bold text-red-900">About Us</h1>
				<p className="mb-8 text-lg text-amber-950">
					Welcome to Jersey Local News! We are committed to bringing you the
					latest and most accurate news about our community, from sports and
					business to entertainment and more.
				</p>
				<p className="mb-8 text-lg text-amber-950">
					Our dedicated team of journalists and writers works around the clock
					to ensure you stay informed. Thank you for trusting us as your go-to
					source for local news.
				</p>
				<Link
					to="/contact-us"
					className="rounded-lg bg-red-900 px-6 py-3 text-white transition hover:bg-red-800"
				>
					Contact Us
				</Link>
			</div>
		</div>
	)
}
