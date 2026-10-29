require("dotenv").config({ path: require("path").join(__dirname, ".env") });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {  
    res.send("Mon premier serveur MERN !"); 
});

app.get("/api/test", (req, res) => {  
    res.json({ message: "L'API fonctionne correctement" }); 
});


async function startServer() {  
    try {    
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URI is not configured");
        }

        await mongoose.connect(mongoUri);
        console.log("MongoDB est connecté");
        app.listen(PORT, () => {      
            console.log(`Serveur lancé sur le port ${PORT}`);    
        });  
    }
    catch(error){
        console.error("Erreur MongoDB :", error.message);
        process.exit(1);  
    }
}

startServer();