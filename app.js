const express = require('express');

const app = express();

app.get('/form', (req, res)=>{
    res.sendFile('C:\\Users\\siddh\\OneDrive\\Desktop\\FED\\FEWD-Lab1\\form.html', (err)=>{
        console.log("Sent file successfully");
    });
})

app.get('/formSubmit', (req, res)=>{
    res.sendFile('C:\\Users\\siddh\\OneDrive\\Desktop\\FED\\FEWD-Lab1\\index.html', (err)=>{
        console.log("Sent file successfully");
    });
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on PORT:${PORT}`);
    
})