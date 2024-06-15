const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/pharmacy-s');

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const medicineSchema = new mongoose.Schema({
  name: String,
  dosageStrength: String,
  dosageForm: String,
  routeOfAdministration: String,
  frequency: String,
  duration: String,
  quantity: String,
});

const Medicine = mongoose.model('Medicinedetails', medicineSchema);

app.use(bodyParser.json());
// DELETE endpoint to delete a medicine by name


// Endpoint to add a new medicine
app.post('/api/medicine', (req, res) => {
  const { name, dosageStrength, dosageForm, routeOfAdministration, frequency, duration, quantity } = req.body;

  const newMedicine = new Medicine({ 
    name,
    dosageStrength,
    dosageForm,
    routeOfAdministration,
    frequency,
    duration,
    quantity
  });

  newMedicine.save()
    .then(savedMedicine => {
      res.status(200).json({ message: 'Medicine saved successfully', medicine: savedMedicine });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error saving medicine' });
    });
});

// Endpoint to get all medicines
app.get('/api/medicine', (req, res) => {
  Medicine.find({})
    .then(medicines => {
      res.status(200).json(medicines);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error fetching medicines' });
    });
});
app.delete('/api/medicine/:name', (req, res) => {
  const medicineName = req.params.name;
  Medicine.findOneAndDelete({ name: medicineName })
    .then(deletedMedicine => {
      if (deletedMedicine) {
        res.status(200).json({ message: 'Medicine deleted successfully' });
      } else {
        res.status(404).json({ message: 'Medicine not found' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error deleting medicine' });
    });
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
