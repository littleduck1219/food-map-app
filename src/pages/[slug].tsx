import { useRouter } from "next/router";

export default function Page() {
	const router = useRouter();

	return (
		<div>
			<h1>Router</h1>
			<div>
				<button type='button' onClick={() => router.push({ pathname: "/[slug]", query: { slug: "push" } })}>
					Push
				</button>
			</div>
			<div>
				<button type='button' onClick={() => router.replace({ pathname: "/[slug]", query: { slug: "push" } })}>
					Replace
				</button>
			</div>
			<div>
				<button type='button' onClick={() => router.reload()}>
					Reload
				</button>
			</div>
		</div>
	);
}
