import { Link } from '@remix-run/react'

type NavbarLinkProps = {
	url: string
	children: React.ReactNode
}

const NavbarLink = ({ children, url }: NavbarLinkProps) => {
	return (
		<Link
			to={url}
			className="text-bg-red-900 mt-1 block rounded px-2 py-1 font-semibold hover:bg-red-900 hover:bg-opacity-10 hover:text-secondary md:ml-2 md:mt-0"
		>
			{children}
		</Link>
	)
}

export default NavbarLink
