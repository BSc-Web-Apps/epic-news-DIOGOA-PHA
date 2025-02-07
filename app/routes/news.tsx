import { NavLink, Outlet } from '@remix-run/react'

export default function NewsPage() {
	return (
		<main className="flex flex-col py-24">
			<div className="container">
				<h1 className="text-h1">News</h1>
				<div className="flex space-x-4 py-4">
					<NavLink
						to="technology"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-emerald-600 underline underline-offset-8' : 'text-emerald-600 '}`
						}
					>
						Technology
					</NavLink>

					<NavLink
						to="sport"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-emerald-600 underline underline-offset-8' : 'text-emerald-600'}`
						}
					>
						Sport
					</NavLink>

					<NavLink
						to="entertainment"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-emerald-600 underline underline-offset-8' : 'text-emerald-600'}`
						}
					>
						Entertainment
					</NavLink>
				</div>
			</div>

			<Outlet />
		</main>
	)
}
