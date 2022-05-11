<template>
  <div >
      Listar
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  created:function(){
      this.ConsultarEmpleados();
  },
  methods:{
      ConsultarEmpleados(){
          fetch('https://buqkly.com/api/empleados')
          .then(respuesta => respuesta.json())
          .then((datosrespuesta)=>{
              console.log(datosrespuesta);
          })
      }
  }

}
</script>