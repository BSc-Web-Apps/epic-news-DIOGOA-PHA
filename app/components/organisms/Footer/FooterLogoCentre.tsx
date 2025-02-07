import { Link, NavLink } from '@remix-run/react'
import SocialMediaButtons from '#app/components/molecules/SocialMediaButtons'
import logo from '~/assets/jpg/site-logo.jpg'
import { type FooterProps } from './FooterBasic'

const FooterLogoCentre = ({
	companyName = 'Jersey Local News',
	altText = 'Our company logo',
}: FooterProps) => {
	return (
		<footer className="dark:bg-dark-secondary bg-amber-300 lg:py-16">
			<div className="container">
				<div className="dark:border-dark-muted-foreground/75 flex flex-col items-center justify-around border-b border-muted-foreground/75 lg:flex-row lg:pb-8">
					<div className="flex flex-col items-start gap-6 py-8 font-bold text-amber-950 dark:text-amber-950 lg:flex-row">
						<Link
							to="/news"
							className="flex flex-col items-start gap-6 py-8 font-bold text-amber-950 dark:text-amber-950 lg:flex-row"
						>
							News
						</Link>
						<Link
							prefetch="intent"
							to="/about-us"
							className="flex flex-col items-start gap-6 py-8 font-bold text-amber-950 dark:text-amber-950 lg:flex-row"
						>
							About Us
						</Link>
						<Link
							prefetch="intent"
							to="/contact-us"
							className="flex flex-col items-start gap-6 py-8 font-bold text-amber-950 dark:text-amber-950 lg:flex-row"
						>
							Contact Us
						</Link>
					</div>

					<Link to="/" className="flex w-36 items-center justify-center">
						<img src={logo} alt={altText} />
					</Link>

					<div className="flex flex-col items-start gap-6 py-8 font-bold text-amber-950 dark:text-amber-950 lg:flex-row">
						<div>
							<NavLink to="/news/sport">Sports</NavLink>
						</div>
						<div>
							<NavLink to="/news/technology">Technology</NavLink>
						</div>
						<div>
							<NavLink to="/news/entertainment">Entertainment</NavLink>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center py-8">
					<div className="block">
						<div className="mb-8 flex justify-center">
							<SocialMediaButtons />
						</div>
						<div className="text-center text-amber-950/75 dark:text-amber-950/75">
							{companyName} | {new Date().getFullYear()}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterLogoCentre
