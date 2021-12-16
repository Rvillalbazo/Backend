import mongoose,{Schema} from 'mongoose';
const articuloSchema = new Schema({
    categoria: {type: Schema.ObjectId, ref:'categoria'},
    SKU: {type: String,maxlength:15,unique:true,required:true},
    nombre:{type:String,maxlength:50,unique:true,required:true},
    descripcion: {type:String,maxlength:255},
    precio_venta:{type:Number,required:true},
    plazos:{type:Number},
    abonoN:{type:Number},
    abonoP:{Type:Number},
    stock:{type:Number,required:true},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
});
const Articulo = mongoose.model('articulo',articuloSchema);
export default Articulo;