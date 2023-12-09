<script>
   import { ulid } from 'ulid';
	let email = '';
	let emailRes = '';
    let clientId = ulid();
	
    async function register() {
		const response = await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: {
				'content-type': 'application/json'
			}
		});

		emailRes = await response.json();
	}
    async function login() {
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: {
				'content-type': 'application/json'
			}
		});

		emailRes = await response.json();
	}
</script>

<h1>Register</h1>

<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 self-center mb-7">
	<form class="card-body">
		<div class="form-control">
			<input type="email" placeholder="email" class="input input-bordered" bind:value={email} required />
		</div>
		<div class="form-control mt-6">
			<button class="btn btn-primary mb-3" on:click={login}>Login</button>
            <button class="btn btn-primary" on:click={register}>Register</button>
		</div>
	</form>
</div>
{#if emailRes}
    {emailRes} {clientId}
{/if}
<div class="divider"></div>
<ul class="steps">
    <li data-content="🚥" class="step step-neutral">Step 1</li>
    <li data-content="🟢" class="step step-neutral">Step 2</li>
    <li data-content="🟢" class="step step-neutral">Step 3</li>
    <li data-content="🟢" class="step step-neutral">Step 4</li>
    <li data-content="🟡" class="step step-neutral">Step 5</li>
    <li data-content="💖" class="step step-neutral">Step 6</li>
    <li data-content="🛑" class="step step-neutral">Step 7</li>
  </ul>