<template>
  <div class="bg-green-50 hidden lg:flex lg:items-center lg:justify-center">
    <div class="bg-green-50 page-section features">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row"> 
              <div class="img-fluid mr-3">
                <lord-icon
                  src="https://cdn.lordicon.com/xumpvbbp.json"
                  trigger="hover"
                  colors="outline:#121331,primary:#66ee78"
                  style="width: 115px; height: 115px"
                >
                </lord-icon>
              </div>
              <div>
                <h>{{$t('services.frontend.title')}}</h>
                <p class="text-sm">
                  {{$t('services.frontend.description')}}
                </p>
              </div>
            </div>
          </div>
        
          <div class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="">
                <div class="img-fluid mr-3">
                  <lord-icon
                    src="https://cdn.lordicon.com/fujmubyr.json"
                    trigger="hover"
                    colors="outline:#121331,primary:#66ee78"
                    style="width: 115px; height: 115px">
                </lord-icon>
                </div>
              </div>
              <div>
                <h4>{{ $t('services.backend.title') }}</h4>
                <p class="text-sm">
                  {{ $t('services.backend.description') }}
                </p>
              </div>
            </div>
          </div>

          <div
           
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="img-fluid mr-3">
                <lord-icon
                  src="https://cdn.lordicon.com/hzbrvxyv.json"
                  trigger="hover"
                  colors="outline:#121331,primary:#66ee78"
                  style="width: 115px; height: 115px"></lord-icon>
              </div>
              <div>
                <h5>{{ $t('services.testing.title') }}</h5>
                <p class="text-sm">
                  {{ $t('services.testing.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  services-icon {
    width: 150px;
  }


</style>
