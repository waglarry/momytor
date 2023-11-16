from django.test import TestCase
from rest_framework.test import APIClient, APITestCase
from django.contrib.auth.models import User
from .models import Parent, Child, Teacher, Class
from rest_framework import status

class ParentSignupTest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_parent_signup(self):
        # Data for parent signup
        signup_data = {
            "username": "parent",
            "email": "parent@example.com",
            "password": "parent_password"
        }
        response = self.client.post('/signup/parent/', data=signup_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(User.objects.filter(username="parent").exists())
        self.assertEqual(response.data.get('message'), 'Parent registered successfully')
        self.assertTrue(response.wsgi_request.user.is_authenticated)
        user = User.objects.get(username="parent")
        
        
class LoginTest(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            'username': 'test_user',
            'email': 'test@example.com',
            'password': 'test_password'
        }
        self.user = User.objects.create_user(**self.user_data)

    def test_login_success(self):
        login_data = {
            'username': 'test_user',
            'password': 'test_password'
        }
        response = self.client.post('/login/', login_data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.wsgi_request.user.is_authenticated)
        self.assertEqual(response.data.get('message'), 'Login successful')

    def test_login_failure_invalid_credentials(self):
        invalid_login_data = {
            'username': 'test_user',
            'password': 'wrong_password'
        }
        response = self.client.post('/login/', invalid_login_data, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertFalse(response.wsgi_request.user.is_authenticated)
        self.assertEqual(response.data.get('error'), 'Invalid username or password')



class ParentDetailsTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.parent = Parent.objects.create(user=self.user, telephone_number='1234567890', parent_name='John Doe')

    def test_get_parent_details(self):
        # Authenticate the user
        self.client.force_authenticate(user=self.user)

        # Make a GET request to the endpoint
        response = self.client.get('/get_parent_details/')

        # Assert that the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)

        # Assert that the response data contains the expected parent details
        self.assertEqual(response.data['telephone_number'], '1234567890')
        self.assertEqual(response.data['parent_name'], 'John Doe')
        # Add more assertions as needed


class ChildDetailsTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.parent = Parent.objects.create(user=self.user, telephone_number='1234567890', parent_name='John Doe')
        self.child = Child.objects.create(parent=self.parent, first_name='Alice', last_name='Doe', gender='F')

    def test_get_child_details(self):
        # Authenticate the user
        self.client.force_authenticate(user=self.user)

        # Make a GET request to the endpoint
        response = self.client.get('/get_child_details/')

        # Assert that the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)

        # Assert that the response data contains the expected child details
        self.assertEqual(response.data['first_name'], 'Alice')
        self.assertEqual(response.data['last_name'], 'Doe')
        self.assertEqual(response.data['gender'], 'F')
        # Add more assertions as needed
        
        

class LogoutViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpassword')

    def test_logout_view(self):
        # Authenticate the user
        self.client.force_authenticate(user=self.user)

        # Make a POST request to the logout endpoint
        response = self.client.post('/logout/')

        # Assert that the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)

        # Assert that the response contains the expected message
        self.assertEqual(response.data.get('message'), 'Logout successful')

        
# tests.py
class UpdateParentProfileTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.parent = Parent.objects.create(user=self.user, telephone_number='1234567890', parent_name='John Doe')

    def test_update_parent_profile(self):
        # Authenticate the user
        self.client.force_authenticate(user=self.user)

        # Data to update the parent profile
        updated_data = {
            'telephone_number': '9876543210',
            'parent_name': 'Updated Parent Name',
            'child_first_name': 'Updated Child First Name',
            'child_last_name': 'Updated Child Last Name',
            'child_gender': 'M',
            'child_classroom': 'Updated Classroom',
            'profile_picture': None,  # You can provide a file if needed
        }

        # Make a PUT request to the update parent profile endpoint
        response = self.client.put('/update_parent_profile/', data=updated_data, format='json')

        # Print the response content for debugging
        print(response.content)

        # Assert that the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)

        # Reload the parent instance from the database to get the updated data
        self.parent.refresh_from_db()

        # Assert that the parent profile has been updated
        self.assertEqual(self.parent.telephone_number, updated_data['telephone_number'])
        self.assertEqual(self.parent.parent_name, updated_data['parent_name'])
        # Add more assertions based on your model fields

        # Optional: Assert that the response contains the expected message
        self.assertEqual(response.data['message'], 'Parent profile updated successfully')



class GetTeacherDetailsTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='teacher_user', password='teacher_password')
        self.classroom = Class.objects.create(name='Grade 10')
        self.teacher = Teacher.objects.create(user=self.user, name='John Teacher', teaching_class=self.classroom)

    def test_get_teacher_details(self):
        # Authenticate the user
        self.client.force_authenticate(user=self.user)

        # Make a GET request to the endpoint that retrieves teacher details
        response = self.client.get('/get_teacher_details/')

        # Assert that the response status code is 200 (OK)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the response contains the expected teacher details
        self.assertEqual(response.data['name'], 'John Teacher')
        self.assertEqual(response.data['teaching_class'], 1)

        self.assertEqual(response.data['message'], 'Teacher details retrieved successfully')
        

class MarkAttendanceTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.teacher_user = User.objects.create_user(username='teacher_user', password='teacher_password')
        self.teacher = Teacher.objects.create(user=self.teacher_user, name='John Teacher')
        self.classroom = Class.objects.create(name='Grade 10')
        self.teacher.teaching_class = self.classroom
        self.teacher.save()

    def test_mark_attendance(self):
        # Authenticate the teacher user
        self.client.force_authenticate(user=self.teacher_user)

        # Data for marking attendance
        attendance_data = {
            'date': '2023-11-15',
            'student_attendance': [
                {'student_id': 1, 'is_present': True},
                # Add more student data as needed
            ],
        }

        # Make a POST request to mark attendance
        # MarkAttendanceTest
        response = self.client.post('/mark_attendance/', data=attendance_data, format='json')


        # Print the response content for debugging
        print(response.content)

        # Assert that the response status code is 200
        self.assertEqual(response.status_code, 200)

        # Optional: Assert other details in the response as needed

        # Optional: Add more assertions based on your use case
