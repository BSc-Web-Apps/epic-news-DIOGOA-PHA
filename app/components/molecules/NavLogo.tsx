import logo from '~/assets/jpg/site-logo.jpg'

export default function NavLogo() {
	return (
		<div className="flex h-60 w-60 flex-col items-center justify-center">
			<img src={logo} alt="JerseyNewsLogo1" className="rounded" />
		</div>
	)
}
