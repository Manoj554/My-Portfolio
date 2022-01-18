import mongoose from 'mongoose';

const ConnectToDB = () => {
    if (mongoose.connections[0].readyState) {
        console.log('DATABASE CONNECTED ');
        return;
    }
    mongoose.connect(process.env.MONGO_URI).then(res => console.log(`Connected Successfully with ${res.connection.host}`)).catch(err => console.log(`Error Occured :- ${err}`));
}

export default ConnectToDB;