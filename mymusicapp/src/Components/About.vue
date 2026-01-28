<template>
    <div class="container">
      <div class="row">
            <div id="app">
                <img src="./imgs/icon.png">
                <h1>{{ msg }}</h1>
    
  </div>
        </div>

        <div class="row">

            <div class="col-md-12">
                <app-result> </app-result>

            </div>

        </div>

    </div>
</template>
<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to My Music App'
            }
        }   
    }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #ffffff;

    }
</style>