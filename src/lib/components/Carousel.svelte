<script lang="ts">
	import { formatDate } from '@utils/index';
	import type { Poll } from '../types';
	import Date from './SVGs/Date.svelte';

	export let data: Poll[];
	export let uniqueKey: string;
	export let path: string = 'polls';
	function randomize(index: number) {
		return Math.floor(Math.random() * (index + 25));
	}
	function truncate(text: string, length: number = 100) {
		if (text.length > length) {
			return text.substring(0, length) + '...';
		} else {
			return text;
		}
	}
</script>

<section class="mb-20">
	<div class="carousel w-full overflow-hidden">
		{#if data.length > 0}
			{#each data as poll, index}
				<div
					id={`${uniqueKey}${index}`}
					class="scroll-mt-16 carousel-item card relative image-full w-full"
				>
					<figure>
						<img
							src={`https://source.unsplash.com/random/800×200.0${
								randomize(index) * randomize(data.length)
							}/?wallpaper`}
							class="header-image minmax-height w-full"
							width="800px"
							height="200px"
							alt="Random things, lol"
						/>
					</figure>
					<div
						class=" bg-card card-body mx-auto w-full sm:w-[min(80vw,42rem)] max-w-2xl minmax-height"
					>
						<h2 class="card-title text-shadow text-white mb-2 text-balance text-3xl">
							{poll.title}
						</h2>
						<p class="text-slate-300 text-xl text-shadow">{truncate(poll.pollDescription)}</p>
						<p class="text-shadow badge badge-outline">
							<Date classes="inline" color="#cbd5e1" />
							{formatDate(poll.startDate)} to {formatDate(poll.endDate)}
						</p>
						<div class="card-actions md:justify-end justify-start">
							<a href="/{path}?id={poll._id}" role="button" class="btn btn-primary">See Details</a>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
	<div
		class="mx-auto flex md:justify-center justify-normal w-full max-w-screen-md py-2 join overflow-x-auto"
	>
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each data as _, index}
			<a
				href={`#${uniqueKey}${index}`}
				class="join-item btn btn-sm border-gray-400 hover:border-gray-200">{index + 1}</a
			>
		{/each}
	</div>
</section>

<style>
	.header-image {
		width: 100%;
		aspect-ratio: 8/2;
		object-fit: cover;
		object-position: center;
		border-radius: 15px;
	}
	.minmax-height {
		min-height: 200px;
		max-height: 270px;
	}
</style>
