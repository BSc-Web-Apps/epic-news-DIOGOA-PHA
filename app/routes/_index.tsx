import { type MetaFunction } from '@remix-run/node'
import { json, useLoaderData, Link } from '@remix-run/react'
import { getArticleImgSrc } from '#app/utils/misc.tsx'
import siteLogo from '~/assets/jpg/site-logo.jpg'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'
import { prisma } from '~/utils/db.server.ts'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export async function loader() {
	const allArticles = await prisma.article.findMany({
		where: { isPublished: true },
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ allArticles })
}

const LeadArticleImage = ({ articleImageId }: { articleImageId?: string }) => {
	const imageSrc = articleImageId ? getArticleImgSrc(articleImageId) : siteLogo

	return (
		<img
			src={imageSrc}
			alt="Lead Article - Main"
			className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-60"
		/>
	)
}

export default function Index() {
	const { allArticles } = useLoaderData<typeof loader>()

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="flex items-center justify-between bg-yellow-500 p-4">
				<div className="container mx-auto flex items-center justify-between">
					<h3 className="text-bg-red-900 text-lg font-bold">
						Jersey Local News
					</h3>
					<button className="rounded bg-red-900 px-4 py-2 font-bold shadow">
						Home
					</button>
				</div>
			</header>

			{/* Main Content */}
			<div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-3">
				{/* Featured Article */}
				{allArticles.length > 0 && (
					<Link
						to={`/article/${allArticles[0].id}`}
						className="relative col-span-1 flex h-72 items-center justify-center rounded-lg bg-yellow-500 text-2xl font-bold text-white shadow-md lg:col-span-2 lg:h-full"
					>
						{allArticles[0].images[0]?.id && (
							<LeadArticleImage articleImageId={allArticles[0].images[0].id} />
						)}
						<span className="relative z-10 px-6 text-center">
							{allArticles[0].title}
						</span>
					</Link>
				)}

				{/* Smaller Articles Grid */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
					{allArticles.slice(0, 4).map(article => (
						<Link key={article.id} to={`/article/${article.id}`}>
							<ArticleCard
								articleId={article.id}
								title={article.title}
								category={article.category?.name}
							/>
						</Link>
					))}
				</div>
			</div>

			{/* Footer */}
			<footer className="mt-8 bg-yellow-500 p-4 text-center text-white">
				{/* Bottom Section */}
				<div className="py-12 text-center">
					<Link
						to={`/article/${allArticles[4]?.id}`}
						className="inline-block rounded bg-green-500 px-6 py-4 text-lg font-semibold text-white"
					>
						{allArticles[4]?.title || 'Bottom News Title'}
					</Link>
				</div>

				{/* Bottom Articles Grid */}
				<div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-12 md:grid-cols-4">
					{allArticles.slice(5, 9).map(article => (
						<Link key={article.id} to={`/article/${article.id}`}>
							<ArticleCard
								articleId={article.id}
								title={article.title}
								category={article.category?.name}
							/>
						</Link>
					))}
				</div>
			</footer>
		</div>
	)
}
