import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { toTitleCase } from '~/utils/stringUtils.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	const categoryTitle = toTitleCase(category)
	return json({ categoryTitle })
}
export default function NewsCategoryPage() {
	const { categoryTitle } = useLoaderData<typeof loader>()

	return (
		<div className="container py-16">
			<h2 className="text-h2">{categoryTitle}</h2>
		</div>
	)
}
export default function NewsCategoryPage() {
	return (
		<div className="container py-16">
			<h2 className="text-h2">Generic news category page</h2>
		</div>
	)
}
