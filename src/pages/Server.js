const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())
let client; 
let collection; 


MongoClient.connect("mongodb://localhost:27017/")
.then((connectedClient)=>{
    client = connectedClient;
    const dbo = client.db('Alumni')
    collection = dbo.collection('users')

    app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })
})
.catch((err)=>{
    console.log(err)
})


const findUser = async (username, password) => {
    const query = { username, password };
    try {
      const user = await collection.findOne(query);
      return user;
    } catch (error) {
      console.error('Error finding user:', error);
      return null;
    }
  };
  


app.post('/save', async (req, res) => {
    const { username, password, email, graduationYear } = req.body;
  
    const userDetails = {
      username,
      password,
      email,
      graduationYear
    };
  
    try {
      console.log('Attempting to insert:', userDetails);
      const result = await collection.insertOne(userDetails);
      console.log('Insert result:', result); 
      res.status(200).send('Data saved successfully');
    } catch (err) {
      console.error('Error saving data:', err);
      res.status(500).send('Failed to save data');
    }
  });
  
  
  app.post('/signin', async (req, res) => {
    const { username, password, email, graduationYear } = req.body;

    try {
        const user = await findUser(username, password);
        console.log(user);

        if (!user) {
            return res.status(401).json({ message: 'Wrong username or password' });
        }
        res.status(200).json({ message: 'Login successful!', user });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


