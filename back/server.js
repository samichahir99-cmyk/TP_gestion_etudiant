const express = require("express"); 
const app = express(); 
const PORT = process.env.PORT ;

app.get("/", (req, res) => {  
    res.send("Mon premier serveur MERN !"); 
});

app.listen(PORT, () => {  
    console.log(`Serveur lancé sur http://localhost:${PORT}`); 
});

app.get("/api/test", (req, res) => {  
    res.json({    
        message: "L'API fonctionne correctement"
    }); 
});