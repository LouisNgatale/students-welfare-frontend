<template>
<div>
	<div class="container py-5">
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-body">
						<span class="d-block font-15 text-dark font-weight-500"></span>
						<div class="text-center">
							<span class="d-block display-4 text-dark mb-5">
                                {{ results.hostel_count }}
                            </span>
							<small class="d-block">
								Total hostel
							</small>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card">
					<div class="card-body">
						<span class="d-block font-15 text-dark font-weight-500"></span>
						<div class="text-center">
                            <span class="d-block display-4 text-dark mb-5">
                                {{ results.wings_count }}
                            </span>
							<small class="d-block">
								Total blocks
							</small>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card">
					<div class="card-body">
						<span class="d-block font-15 text-dark font-weight-500"></span>
						<div class="text-center">
                            <span class="d-block display-4 text-dark mb-5">
                                {{ results.rooms_count }}
                            </span>
							<small class="d-block">
								Total rooms
							</small>
						</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="card">
					<div class="card-body">
						<span class="d-block font-15 text-dark font-weight-500"></span>
						<div class="text-center">
                            <span class="d-block display-4 text-dark mb-5">
                                {{ results.floor_count }}
                            </span>
							<small class="d-block">
								Total floors
							</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from "axios";

export default {
name: "AddHostel",
	data(){
		return{
			results:[]
		}
	},
	created() {
		axios.get("http://localhost:8084/api/home/")
			.then(results => {
				this.results = results.data
			});
	}
}
</script>

<style scoped>

</style>