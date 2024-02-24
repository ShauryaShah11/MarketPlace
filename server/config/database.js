import mongoose from "mongoose"

export const dbConnection=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
    
    })

    .then(() => console.log("DB CONNECTION SUCCESS"))
   
    .catch((err) => {
        console.log(`DB CONNECTION ISSUES`);
        console.error(err.message);
        process.exit(1);
    });
};

