<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: 'Poppins', sans-serif;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

textarea:focus,
textarea.form-control:focus,
input.form-control:focus,
input[type=text]:focus,
input[type=password]:focus,
input[type=email]:focus,
input[type=number]:focus,
[type=text].form-control:focus,
[type=password].form-control:focus,
[type=email].form-control:focus,
[type=tel].form-control:focus,
[contenteditable].form-control:focus {
    box-shadow: inset 0 -1px 0 #ddd;
}

</style>
