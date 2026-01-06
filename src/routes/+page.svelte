<script>
</script>

<svelte:head>
	<title>Vendr - Coming Soon | Premium Vending Solutions Ireland</title>
	<meta name="description" content="Vendr is revolutionising vending in Ireland. Premium, smart vending machines coming soon." />
</svelte:head>

<main>
	<!-- Background with machine image -->
	<div class="background">
		<img src="/assets/machine1.jpg" alt="Premium Vending Machine" class="bg-image" />
		<div class="overlay"></div>
	</div>
	
	<!-- Main content -->
	<div class="content">
		<div class="container">
			<h1 class="logo">VENDR</h1>
			<p class="tagline">Premium Vending Solutions Ireland</p>
			
			<h2 class="title">Coming Soon</h2>
			
			<p class="description">
				We're bringing premium vending solutions to Ireland.
			</p>
			
			<p class="footer-text">Launching Spring 2026</p>
		</div>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		overflow: hidden;
	}
	
	main {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	
	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	
	.bg-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.5;
		filter: blur(8px);
	}
	
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 2;
	}
	
	.content {
		position: relative;
		z-index: 3;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}
	
	.container {
		max-width: 600px;
		width: 100%;
		text-align: center;
	}
	
	.logo {
		font-size: 4rem;
		font-weight: 800;
		letter-spacing: 0.3em;
		color: #FFFFFF;
		margin: 0 0 0.5rem 0;
	}
	
	.tagline {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.6);
		letter-spacing: 0.1em;
		margin-bottom: 4rem;
	}
	
	.title {
		font-size: 3rem;
		font-weight: 300;
		color: #FFFFFF;
		margin-bottom: 1.5rem;
	}
	
	.description {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.6;
		margin-bottom: 3rem;
	}
	
	.footer-text {
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.9rem;
	}
	
	/* Responsive */
	@media (max-width: 768px) {
		.logo {
			font-size: 2.5rem;
		}
		
		.title {
			font-size: 2rem;
		}
		
		.description {
			font-size: 1rem;
		}
	}
</style>
