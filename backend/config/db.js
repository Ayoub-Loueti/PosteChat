const mongoose = require ("mongoose");
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
//ces deux options sont des paramètres qui permettent à mongoose de fonctionner correctement 
//avec les dernières versions de MongoDB
            useNewUrlparser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;