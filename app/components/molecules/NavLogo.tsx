import logo from '~/assets/svg/JerseyNewsLogo1.svg'
export default function NavLogo() {
	return (
		<div className="flex h-60 w-60 flex-col items-center justify-center  ">
			<img src={logo} alt="JerseyNewsLogo1" className="rounded-full" />
			<span className="text-xl text-foreground">Epic News</span>
		</div>
	)
}
