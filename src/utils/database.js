import mongoose from "mongoose";

const URI = 'mongodb+srv://rodex97:iTdIvP6u4QvijW6o@crud.wrmdg.mongodb.net/?retryWrites=true&w=majority&appName=CRUD';
const dataBaseConnection = async () => {
    if (!global.mongoose){
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    };
};

export default dataBaseConnection;