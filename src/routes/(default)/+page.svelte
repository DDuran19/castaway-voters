<script lang="ts">
	import heroBackground from '$lib/assets/heroBackground.webp';
</script>

<div class="hero min-h-screen" style="background-image: url({heroBackground});">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-lg">
			<h1 class="mb-5 text-9xl font-bold text-balance">Cast Away</h1>
			<h2 class="mb-5">Empower Your Voice</h2>
			<p class="mb-5">
				Join us in shaping the future! Our cutting-edge voting platform is designed to make your
				opinions count.
			</p>
			<a href="/login" class="btn btn-neutral">Get Started</a>
			<a
				href="/#publicPolls"
				class="btn btn-neutral"
				title="Publicly available polls, login to vote">See public polls</a
			>
		</div>
	</div>
</div>
<iframe
	id="publicPolls"
	src="/public/results"
	frameborder="0"
	class="w-full h-screen"
	title="Publicly available polls, login to vote"
/>
