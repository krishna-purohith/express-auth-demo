const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const users = [];

const questions = [{
    title: "2 pointer type",
    description: "Given an array, return the first recurrence of the element",
    testCases: [{
        input: [1, 2, 3, 4, 2, 5],
        output: "2"
    }]

}];

const submissions = [

]

app.post('/signup', (req, res) => {
    // Add logic to decode the body
    const { email, password } = req.body;

    // validation: the body should have email n password

    if (!email || !password)
        return res.json({ message: "Please enter email and password"}, { status: 400 });

    // bcrypt

    // npm install bcrypt

    const bcrypt = require('bcrypt');



    // Store email n password (as is for now) in the users array above(only if the user with the given email doesn't exist)
    // checking for the existence of the user. 

    const user = users.find( user => user.email === email );
    if (user) return res.json({ message: "User already exists. " }, { status: 409 });





    // return 200 status to the client.

    users.push({ email, password });

    return res.status(200).json({ message: "Signup successfull!" });




})

app.post('/signin', (req, res) => {
    const {email, password } = req.body;

    if (!email || !password )
        return app.status(400).json({ message: "Please enter both email n password"});
    
    const user = users.find(user => {
        const user = user.find(user.email === email)
    })
    
    if (!user) return app.status(401).json({ message: "user doesn't exist, please signup first "});
    
    const passwordValidated = (user.password === password);

    if (!passwordValidated) return app.status(401).json({message: "Please enter the right password"});

    const token = Math.randon().toString(36).substring(2);

    return app.status(200).json({message: "Login successfull. "}, token);



    

})













app.get('/questions', (req, res) => {
    res.send('Hello from questions')
})

app.get('/submissions', (req, res) => {
    res.send("Hello from submissions")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
