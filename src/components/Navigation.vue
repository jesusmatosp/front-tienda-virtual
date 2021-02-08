<template>
    <header class="container-fluid">
         <div class="row">
            <div class="col col-lg-12">
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="index.html">CertusShop</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <br>
                    <ul class="navbar-nav col-lg-10">
                      <li class="nav-item active  col-lg-12">
                        <div class="input-group">
                        <input class="form-control mr-sm-12 col-lg-12" type="search" v-bind:placeholder="$t('lbl_search')" aria-label="Buscar">
                        <div class="input-group-append">
                           <span class="input-group-text" id="basic-addon2"><i class="fa fa-search" aria-hidden="true"></i></span>
                         </div>
                         </div>
                      </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-2">
                      <select class="form-control" v-model="lang" @change="handleChange($event)">
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="po">Portugues</option>
                      </select>                     
                   </form>
                  </div>
                </nav>
            </div>
         </div>
     </header> 
</template>
<script>
export default {
  data: function() {
        const lang = localStorage.getItem('lang') || 'en';
        return {
            lang: lang
        }
    },
   methods: {
        handleChange(event) {
            localStorage.setItem('lang', event.target.value);
            window.location.reload();
        }
    }
   
}
</script>