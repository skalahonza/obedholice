<script>
	import {
		Container,
		Row,
		TabContent,
		TabPane,
	} from "sveltestrap";

	import * as data from "./data/restaurants.json";

	export let restaurants = data.default;
</script>

<main>
	<Container>
		<Row>
			<h1>Obědy Holice</h1>
			<h2>Agregátor restauračních menu ve městě Holice</h2>
		</Row>
		<Row>
			<TabContent>
				{#each restaurants as restaurant, i}
					<TabPane tabId={restaurant.name} tab={restaurant.name} active="{i == 0}">
						<iframe
							src={restaurant.website}
							title={restaurant.name}
							frameborder="0"
							height="800"
						/>
					</TabPane>
				{/each}
			</TabContent>
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
	iframe {
		display: block;
		width: 100%;
	}
	/*
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}*/
</style>
