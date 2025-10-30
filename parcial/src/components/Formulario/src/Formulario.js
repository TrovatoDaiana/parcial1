export default {
  name: 'Formulario',

  components: {
    // HelloBox
    
  },
  props: {
    //title: { type: String, default: 'Hola Mundo (App)' },
  },
  data() {
    return {
      formData : this.getInicialData(),
      formDirty: this.getInicialData(),
    };
  },
  computed: {
   //ejemplo de computed son como getters
    errorNombre(){
    let mensaje = '';
    let nombre= this.formData.nombre;
    if(!nombre) mensaje ='Campo requerido';
    else if(nombre.length < 3) mensaje = 'El nombre debe tener al menos 3 caracteres';
    else if(nombre.length > 10) mensaje = 'El nombre no puede tener más de 10 caracteres';
    else if(nombre.includes(' ')) mensaje = 'El nombre no puede contener espacios';
    return{
      mensaje: mensaje,
      mostrar: mensaje!= '' && this.formDirty.nombre,
      ok: mensaje == ''
    } 
  },

  errorApellido(){
    let mensaje = '';
    let apellido= this.formData.apellido;
    if(!apellido) mensaje ='Campo requerido';
    else if(apellido.length < 3) mensaje = 'El apellido debe tener al menos 3 caracteres';
    else if(apellido.length > 10) mensaje = 'El apellido no puede tener más de 10 caracteres';
    else if(apellido.includes(' ')) mensaje = 'El apellido no puede contener espacios';
    return{
      mensaje: mensaje,
      mostrar: mensaje!= '' && this.formDirty.apellido,
      ok: mensaje == ''
    } 
  },
  
  errorEdad(){
    let mensaje = '';
    let edad= this.formData.edad;
    if(!edad) mensaje ='Campo requerido';
    else if(edad < 18) mensaje = 'La edad no puede ser menor de 18 años';
    else if(edad > 99) mensaje = 'La edad no puede ser mayor de 99 años';
    return{
      mensaje: mensaje,
      mostrar: mensaje!= '' && this.formDirty.edad,
      ok: mensaje == ''
    } 
  }
  
},
  watch: {
    // Ejemplo de watch
  },
  methods: {
    getInicialData(){
      return {
        nombre: null,
        apellido: null,
        edad: null
      }
    },

     estadoBotonDeshabilitado() {
       return !this.errorNombre.ok || !this.errorApellido.ok || !this.errorEdad.ok;
     },
  
   enviar() {
    const datos = {...this.formData};
    console.log(datos)
   
    this.formData = this.getInicialData();
    this.formDirty = this.getInicialData();
  }
},
  //ciclo de vida
  created() {
    //console.log('created')
  },
  mounted() {
    //console.log('mounted')
  },
  unmounted() {
    //console.log('unmounted')
  },
}

