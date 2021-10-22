const express = require("express");
const path = require('path');
const {sendContactMail, sendStartupInqueyMail,sendMentorshipInqueryMail} = require('./mail');
const PORT = 8080;
const app = express();

//Data Parsing
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
//
app.use(express.static(__dirname + '/assets'));
app.post('/contactSubmit', (req,res) => {
    console.log(req.body);
    const { name, email, message} = req.body;
    sendContactMail( email, name, "Contanct Me", message, (err, data) => {
        if(err){
            res.status(500).json({message: "Internal Error"});
        }
        else{
            res.status(200).json({message: "Email sent successfully"});
        }
    });
})

app.post('/mentorshipSubmit', (req,res) => {
    const { name, email, story, type, outcome} = req.body;
    sendMentorshipInqueryMail( email, name, "Mentorship Inquery", story, type, outcome, (err, data) => {
        if(err){
            res.status(500).json({message: "Internal Error"});
        }
        else{
            res.status(200).json({message: "Email sent successfully"});
        }
    });
})

app.post('/startupSubmit', (req,res) => {
    const {name, email, message, project, role} = req.body;
    sendStartupInqueyMail(email, name, "Startup Inquery", message, role, project, (err,data) => {
        if(err){
            res.status(500).json({message: "Internal Error"});
        }
        else{
            res.status(200).json({message: "Email sent successfully"});
        } 
    })
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/startupInquery', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'startup-inquery.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
}) 

app.get('/mentorshipInquery', (req,res) => {
    res.sendFile(path.join(__dirname, "views", "mentorship-inquery.html"));
})

app.listen(PORT, () => {
    console.log(`Listenning to Port ${PORT}`);
})