<template>
    <div class="container">
<div class="col col-12 col-sm-12 col-md-3 col-lg-3">
				<div class="card">
					<img src="https://i.linio.com/p/0711a2f51316e22ea6ae083207f6c8f3-catalog.jpg"
						class="card-img-top" alt="Polo tipo cuello" />
					<div class="card-body">
						<h5 class="card-title text-center">{{ $t('lbl_product') }}</h5>
						<h6 class="card-subtitle mb-2 text-muted text-center">
							<del>PEN 45.00</del>
						</h6>
                  <p class="card-text"><h3 class="card-title pricing-card-title text-center">PEN 35.00 </h3></p>
						<a href="./detalle.html" class="btn btn-lg btn-block btn-outline-primary">{{ $t('lbl_details') }}</a>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
export default {
    
}
</script>