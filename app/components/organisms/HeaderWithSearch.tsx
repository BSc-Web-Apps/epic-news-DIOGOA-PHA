import { useMatches } from '@remix-run/react'
import { SearchBar } from '../molecules/SearchBar'
import LoginOrUserDropdown from './LoginOrUserDropdown'
import logo from '~/assets/svg/JerseyNewsLogo1.svg'
export default function HeaderWithSearch() {
	const matches = useMatches()
	const isOnSearchPage = matches.find(m => m.id === 'routes/users+/index')
	const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />

	return (
		<header className="dark:bg-dark-primary/10 bg-primary/10 py-6">
			<nav className="container flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
				<div className="flex h-60 w-60 flex-col items-center justify-center  ">
					<img src={logo} alt="JerseyNewsLogo1" className="rounded-full" />
					<span className="text-xl text-foreground">Epic News</span>
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
