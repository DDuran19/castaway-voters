import { openCreatePollModal, openVotePollModal } from '$lib/stores';
import type { DefaultResponse, DiscordUser, Modals } from '@/types/index';
import type { Cookies } from '@sveltejs/kit';

/**
 * Generates a response using the provided DefaultResponse object.
 *
 * This does nothing but ensure that the response is in the correct format.
 * @param {DefaultResponse} response - The response object to generate.
 * @return {DefaultResponse} The generated response.
 */
export function responseGenerator(response: DefaultResponse): DefaultResponse {
	return response;
}

export function deleteCookies(cookies: Cookies) {
	try {
		cookies.delete('token');
	} catch (err) {
		//
	}
}

export function toggleModal(modalName: Modals) {
	switch (modalName) {
		case 'createPoll':
			return openCreatePollModal.update((value) => !value);
		case 'VotePoll':
			return openVotePollModal.update((value) => !value);
		default:
			return;
	}
}

export function openModal(modalName: Modals) {
	switch (modalName) {
		case 'createPoll':
			return openCreatePollModal.set(true);
		case 'VotePoll':
			return openVotePollModal.set(true);
		default:
			return;
	}
}

export function closeModal(modalName: Modals) {
	switch (modalName) {
		case 'createPoll':
			return openCreatePollModal.set(false);
		case 'VotePoll':
			return openVotePollModal.set(false);
		default:
			return;
	}
}

const DEV_SERVER = 'http://localhost:5173';
const PROD_SERVER = import.meta.env.VITE_PROD_SERVER;
export function getRedirectLink() {
	const REDIRECT_URI = import.meta.env.VITE_ON_DEV === 'true' ? DEV_SERVER : PROD_SERVER;

	const redirectLink = `https://discord.com/api/oauth2/authorize?client_id=1170585102821105805&redirect_uri=${REDIRECT_URI}%2Fapi%2Fv1%2Fauth%2Flogin&response_type=token&scope=identify%20guilds.members.read`;
	return redirectLink;
}

export function getAvatarLink(user: DiscordUser, size: number = 300) {
	return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=${size}`;
}

export function getRandomQuote() {
	const quotes = [
		{
			text: 'The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.',
			author: 'Jonathan Harnisch'
		},
		{
			text: 'Cast away your doubts and fears. Embrace the journey, for it may lead to greatness.',
			author: 'Unknown'
		},
		{
			text: 'In the darkest moments, when you feel cast away from hope, remember that the stars shine brightest in the darkest skies.',
			author: 'Shannon L. Alder'
		},
		{
			text: 'The world may cast you away, but your inner strength can light your path towards a new dawn.',
			author: 'Unknown'
		},
		{
			text: 'Like a pebble cast into a pond, your ripples of resilience can create waves of inspiration for others.',
			author: 'Unknown'
		},
		{
			text: 'To be cast away is to be given an opportunity to discover new horizons within yourself.',
			author: 'Unknown'
		},
		{
			text: "Don't be defined by the circumstances that cast you away; be defined by your determination to rise above them.",
			author: 'Unknown'
		},
		{
			text: "When you're cast away, you have a chance to rewrite your own story and become the hero of your own journey.",
			author: 'Unknown'
		},
		{
			text: "Embrace being cast away as a chance to redefine your life's narrative and prove your resilience.",
			author: 'Unknown'
		},
		{
			text: 'Cast away the old, and let the winds of change carry you to new shores of opportunity and growth.',
			author: 'Unknown'
		},
		{
			text: 'When life casts you away, find the strength to build a new path and let your story inspire others.',
			author: 'Unknown'
		},
		{
			text: 'Every castaway has the potential to become a captain of their own destiny with unwavering determination.',
			author: 'Unknown'
		},
		{
			text: 'The world may cast you away, but your inner light can guide you back to a place of belonging and purpose.',
			author: 'Unknown'
		},
		{
			text: "Don't let being cast away define your worth; let your resilience define your path to success.",
			author: 'Unknown'
		},
		{
			text: 'Being cast away is the beginning of a remarkable journey where you discover your true strength and purpose.',
			author: 'Unknown'
		},
		{
			text: 'In the wilderness of being cast away, you can find the strength to create a path that leads you to your dreams.',
			author: 'Unknown'
		},
		{
			text: 'The stars in the sky were once cast away in the vast universe, and now they shine as beacons of hope and inspiration.',
			author: 'Unknown'
		},
		{
			text: 'Being cast away is an opportunity to rebuild your life, write a new story, and inspire others to do the same.',
			author: 'Unknown'
		},
		{
			text: 'When life casts you away, use the experience to cast a new vision for your future and inspire those who follow you.',
			author: 'Unknown'
		}
	];
	const randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}
