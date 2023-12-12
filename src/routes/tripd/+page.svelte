<script lang="js">
	let fuelPrice = '3.03';
	let vehicleMpg = '';
	let tripDist = '';
	let calcRes = '';

	async function calculate() {
		const response = await fetch('/api/calculate', {
			method: 'POST',
			body: JSON.stringify({ fuelPrice, vehicleMpg, tripDist }),
			headers: {
				'content-type': 'application/json'
			}
		});

		calcRes = await response.json();
	}
</script>

<div class="flex flex-col self-center">
	<div class="card glass">
		<div class="card-body">
			<div class="stats shadow">
				<div class="stat">
					<div class="stat-title">Trip Cost</div>
					<div class="stat-value">${calcRes}</div>
					<div class="stat-desc">Estimated trip fuel expense.</div>
				</div>
			</div>

			<div class="card-actions justify-end mt-3">
				<form class="card-body">
					<div class="form-control">
						<input
							type="number"
							step=".01"
							placeholder="Fuel Price"
							class="input input-bordered mb-3"
							bind:value={fuelPrice}
							required
						/>
					</div>
					<div class="form-control">
						<input
							type="number"
							step=".1"
							placeholder="MPG"
							class="input input-bordered mb-3"
							bind:value={vehicleMpg}
							required
						/>
					</div>
					<div class="form-control">
						<input
							type="number"
							step="1"
							placeholder="Trip Distance"
							class="input input-bordered mb-3"
							bind:value={tripDist}
							required
						/>
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-accent btn-outline mb-3" on:click={calculate}>Calculate</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
