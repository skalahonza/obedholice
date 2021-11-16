<script>
	import {
		Container,
		Row,
		Card,
		CardDeck,
		CardBody,
		CardHeader,
		CardSubtitle,
		CardText,
		CardTitle,
	} from "sveltestrap";

	import { onMount } from "svelte";

	import { getRestaurants } from "./api/restaurants";

	export let restaurants = [];

	onMount(async() => {
		restaurants = await getRestaurants();
		console.log(restaurants);
	});
</script>

<main>
	<Container>
		<Row>
			<h1>Obědy Holice</h1>
			<h2>Agregátor restauračních menu ve městě Holice.</h2>
		</Row>
		<Row>
			<CardDeck class="mt-4">
				{#each restaurants as restaurant}
					<Card class="mb-3">
						<CardHeader>
							<CardTitle>{restaurant.name}</CardTitle>
						</CardHeader>
						<CardBody>
							<CardSubtitle>{restaurant.subTitle}</CardSubtitle>
							<CardText>
								<ul>
									{#each restaurant.menuItems as item}
										<li>{item}</li>
									{/each}
								</ul>
							</CardText>
						</CardBody>
					</Card>
				{/each}
			</CardDeck>
		</Row>
	</Container>
</main>

<style>
	/*main {
		padding: 1em;
		 max-width: 240px;
		margin: 0 auto;
	}
	*/

	h1 {
		text-align: center;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	h2 {
		text-align: center;
	}
	/*
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}*/
</style>
