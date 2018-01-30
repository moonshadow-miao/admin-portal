export default {
  props:{
    preview:{type:String,default:''},
    preData:{type:Object,default:()=>({})}
  },
  watch:{
    preData(data){
      for(let k in this.formData){
        this.formData[k]  = data[k]
      }
    }
  }
}
