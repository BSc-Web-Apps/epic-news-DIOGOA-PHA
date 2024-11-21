import { type LinksFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Document from '~/components/shared-layout/Document'
import ThemeSwitch from '~/components/shared-layout/ThemeSwitch'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'
import { type loader } from './__root.server'
import FooterLogoCentre from './components/organisms/Footer/FooterLogoCentre.tsx'
import HeaderWithSearch from './components/organisms/HeaderWithSearch'
import useTheme from './hooks/useTheme.tsx'
import HeroCallToAction from './components/organisms/Hero/HeroCallToAction.tsx'
import HeroImage from '~/assets/jpg/sample-hero.jpg'
import { Button } from './components/atoms/Button.tsx'

export const links: LinksFunction = () => {
	return rootLinkElements
}
export { headers, meta } from './__root.client.tsx'
export { action, loader } from './__root.server.tsx'

export default function App() {
	const data = useLoaderData<typeof loader>()
	const nonce = useNonce()
	const theme = useTheme()

	return (
		<Document nonce={nonce} theme={theme}>
			<div className="flex h-screen flex-col justify-between ">
				<HeaderWithSearch />
				<div className="flex-1">
					<main className="container grid h-full place-items-center ">
						<h1 className="text-mega text-yellow-300 lg:text-2xl">
							<div className="w-full py-16">
								<HeroCallToAction image={HeroImage} imageRight={true}>
									<div className="flex flex-col gap-8 px-8">
										<h2 className="text-h2">Welcome to Epic News</h2>
										<p className="text-lg">
											Keep up to date with the latest tech news.
										</p>
										<Button>Sign up</Button>
									</div>
								</HeroCallToAction>
							</div>{' '}
							Buenos Dias !
						</h1>
						<p className="text-base text-yellow-300 md:text-lg lg:text-2xl">
							Welcome to Epic News, where the latest developments in tech are
							found.
						</p>
						<div className="flex gap-8">
							<div className="w-full py-16"></div>
							<button className=" bg-red-500 px-8 py-4 hover:bg-yellow-500 ">
								{' '}
								Learn more{' '}
							</button>
							<button className=" bg-red-500 px-8 py-4 hover:bg-yellow-500 ">
								{' '}
								Learn more{' '}
							</button>
							<button className=" bg-red-500 px-8 py-4 hover:bg-yellow-500 ">
								{' '}
								Learn more{' '}
							</button>
						</div>
					</main>
				</div>
				<div className="container flex justify-between pb-5">
					<ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
				</div>
				<FooterLogoCentre companyName="Epic News " />
			</div>
		</Document>
	)
}
