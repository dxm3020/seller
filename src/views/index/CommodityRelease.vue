<template>
  <div>
      <ssss />
      <div>这里的neir内容</div>
      <my-componen />
  </div>
</template>
<script>
import ssss from ".././Navigation/NavTop.vue";

var Child = {
  template: '<div>A custom component!</div>'
}

export default {
  components:{
    ssss,
   'my-componen':Child
  }
}
</script>
