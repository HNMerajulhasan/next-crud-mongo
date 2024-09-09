const { Schema, default: mongoose } = require("mongoose");


const topicSchema = new Schema(
    {
       topic: String,
       description: String,
    } ,
    {
        timestamps: true,
    }
)


const topicModel = mongoose.models.crud_data || mongoose.model('crud_data',topicSchema)

export default topicModel;