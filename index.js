import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;


//connect to Moongodb
mongoose.Promise = global.Promise;
try {
  mongoose.connect('mongodb://localhost:27017/CRMdb');
} catch (error) {
  handleError(error);
}
// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect('mongodb://localhost:27017/CRMdb');
//     }catch(err){
//         console.log(err)
//     }
//   }

//body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


routes(app);

app.get('/', (req,res) => 
    res.send(`Node and express is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Server is running on PORT ${PORT}`)
);