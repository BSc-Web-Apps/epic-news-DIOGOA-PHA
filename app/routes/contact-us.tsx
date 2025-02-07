export default function ContactUsRoute() {
	return (
		<div className="min-h-screen bg-amber-300 py-16">
			<div className="container mx-auto max-w-3xl text-center">
				<h1 className="mb-6 text-4xl font-bold text-red-900">Contact Us</h1>
				<p className="mb-8 text-lg text-amber-950">
					We'd love to hear from you! Whether you have news tips, feedback, or
					inquiries, feel free to reach out to us.
				</p>
				<div className="rounded-lg bg-white p-6 shadow-lg">
					<form className="space-y-4">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full rounded-md border p-3"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full rounded-md border p-3"
						/>
						<textarea
							placeholder="Your Message"
							className="h-32 w-full rounded-md border p-3"
						></textarea>
						<button
							type="submit"
							className="rounded-lg bg-red-900 px-6 py-3 text-white transition hover:bg-red-800"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
