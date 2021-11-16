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

	let cards = [1, 2, 3, 4, 5];
</script>

<main>
	<Container>
		<Row>
			<h1>Obědy Holice</h1>
			<h2>Agregátor restauračních menu ve městě Holice.</h2>
		</Row>
		<Row>
			<CardDeck class="mt-4">
				{#each Array(5) as _, i}
					<Card class="mb-3">
						<CardHeader>
							<CardTitle>Resturace {i + 1}</CardTitle>
						</CardHeader>
						<CardBody>
							<CardSubtitle>Polední menu</CardSubtitle>
							<CardText>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
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
