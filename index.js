const express = require('express');
const bodyParser = require('body-parser');
const Student = require('./models/Student')
const app = express();
app.use(bodyParser.json());


// Get all students
app.get('/api/getAll/students', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new student
app.post('/api/create/student', async (req, res) => {
  try {
    const { name, rollNumber, marks } = req.body;
    const newStudent = await Student.create({ name, rollNumber, marks });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a student by ID
app.put('/api/update/students/:id', async (req, res) => {
  try {
    const { name, rollNumber, marks } = req.body;
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.name = name;
    student.rollNumber = rollNumber;
    student.marks = marks;
    await student.save();

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a student by ID
app.delete('/api/delete/students/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    await student.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
