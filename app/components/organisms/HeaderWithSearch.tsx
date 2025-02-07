import { Link, useMatches } from '@remix-run/react'
import NavLogo from '../molecules/NavLogo'
import { SearchBar } from '../molecules/SearchBar'
import LoginOrUserDropdown from './LoginOrUserDropdown'

interface HeaderWithSearchProps {
	isAdminUser: boolean
}

export default function HeaderWithSearch({
	isAdminUser,
}: HeaderWithSearchProps) {
	const matches = useMatches()
	const isOnSearchPage = matches.find(m => m.id === 'routes/users+/index')
	const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />

	return (
		<header className="bg-amber-300 py-6">
			<nav className="container flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
				<Link to="/">
					<NavLogo />
				</Link>
				<div className="flex flex-1 items-center justify-center gap-8"></div>
				{isAdminUser && (
					<Link
						to="/admin-review"
						className="rounded-lg bg-green-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
					>
						Admin Review
					</Link>
				)}
				<div className="flex flex-1 justify-center gap-8">
					<Link
						to="/news"
						className="rounded-md bg-red-900 text-sm font-semibold text-black transition hover:bg-red-800 hover:text-white"
					>
						News
					</Link>
					<Link
						prefetch="intent"
						to="/about-us"
						className="rounded-md bg-red-900 text-sm font-semibold text-black transition hover:bg-red-800 hover:text-white"
					>
						About Us
					</Link>
					<Link
						prefetch="intent"
						to="/contact-us"
						className="rounded-md bg-red-900 text-sm font-semibold text-black transition hover:bg-red-800 hover:text-white"
					>
						Contact Us
					</Link>
				</div>

				<div className="ml-auto hidden max-w-sm flex-1 sm:block">
					{searchBar}
				</div>
				<div className="flex items-center gap-10">
					<LoginOrUserDropdown />
				</div>
				<div className="block w-full sm:hidden">{searchBar}</div>
			</nav>
		</header>
	)
}
