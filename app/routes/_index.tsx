import ParallaxBackground from '#app/components/organisms/Hero/ParallaxBackground.tsx'
import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import logo from '~/assets/svg/JerseyNewsLogo1.svg'
import { Button } from '~/components/atoms/Button.tsx'

/*import logo from '~/assets/png/epic-news-logo.png'*/
export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main className="grid h-full place-items-center">
			<main>
				<h1 className="text-mega text-yellow-300 lg:text-2xl">
					<div className="w-full">
						<ParallaxBackground
							image={logo}
							title="Epic News"
							logo={logo}
							altText="Welcome to Epic News, where the latest developments in tech are found."
						>
							<div className="mx-auto flex w-fit flex-1 flex-col justify-between gap-16 bg-secondary/40 px-28 py-16 backdrop-blur-sm">
								<p className="text-center text-4xl font-extrabold text-secondary-foreground">
									The latest tech news in one place
								</p>
								<div className="flex justify-center gap-8">
									<Button variant="default" size="wide">
										<Link to="/signup">Sign up</Link>
									</Button>
									<Button variant="secondary" size="wide">
										<Link to="/login">Login</Link>
									</Button>
								</div>
							</div>
						</ParallaxBackground>
					</div>{' '}
					Buenos Dias !
				</h1>
				<p className="text-base text-yellow-300 md:text-lg lg:text-2xl">
					Welcome to Epic News, where the latest developments in tech are found.
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
		</main>
	)
}
