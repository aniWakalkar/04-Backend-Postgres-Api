## API Documentation: Student Management System
> ## Overview

`This is a RESTful API for managing students in a system. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on student records.`

> Base URL: `http://localhost:3001/api`
> Development URL: `http://localhost:3001/api`

### Content Type: JSON
### Authentication: Not required for the current setup.
### Endpoints

1. Get All Students

        URL: /getAll/students
        Method: GET
        Description: Fetches a list of all students.
        Response:
        Status: 200 OK
        Body: A list of student objects.
        Example Response:
            [
                {
                    "id": 1,
                    "name": "John Doe",
                    "rollNumber": "A123",
                    "marks": 85
                },
                {
                    "id": 2,
                    "name": "Jane Smith",
                    "rollNumber": "B456",
                    "marks": 92
                }
            ]


        Error Responses:
        Status: 500 Internal Server Error
        Body:
            {
            "message": "Error message details"
            }



2. Create a New Student

        URL: /create/student
        Method: POST
        Description: Creates a new student record.
        Request Body:
            {
                "name": "Student Name",
                "rollNumber": "Roll Number",
                "marks": 75
            }

        Response:

        Status: 201 Created
        Body: A student object with details of the created student.
        Example Response:
            {
                "id": 3,
                "name": "New Student",
                "rollNumber": "C789",
                "marks": 75
            }

        Error Responses:
        Status: 500 Internal Server Error
        Body:
            {
                "message": "Error message details"
            }


3. Update a Student by ID

        URL: /update/students/:id
        Method: PUT
        Description: Updates an existing student's details based on their id.
        URL Parameters:
        id (integer): The ID of the student to be updated.
        Request Body:
            {
                "name": "Updated Student Name",
                "rollNumber": "Updated Roll Number",
                "marks": 80
            }

        Response:
        Status: 200 OK
        Body: The updated student object.
        Example Response:
            {
                "id": 1,
                "name": "Updated John Doe",
                "rollNumber": "A123",
                "marks": 80
            }

        Error Responses:
        Status: 404 Not Found
        Body:
            {
                "message": "Student not found"
            }

        Status: 500 Internal Server Error
        Body:
            {
                "message": "Error message details"
            }



4. Delete a Student by ID

        URL: /delete/students/:id
        Method: DELETE
        Description: Deletes a student record by their id.
        URL Parameters:
        id (integer): The ID of the student to be deleted.

        Response:
        Status: 204 No Content
        Body: No content is returned on successful deletion.

        Error Responses:
        Status: 404 Not Found
        Body:
            {
                "message": "Student not found"
            }

        Status: 500 Internal Server Error
        Body:
            {
                "message": "Error message details"
            }
