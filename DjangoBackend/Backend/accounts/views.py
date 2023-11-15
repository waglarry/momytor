from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Parent, Teacher, Child, Attendance
from .serializers import UserSerializer, ParentSerializer,ChildDetailsSerializer, ParentProfileSerializer, TeacherDetailsSerializer
from datetime import date
from django.shortcuts import get_object_or_404

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def parent_signup(request):
    if request.method == 'POST':
        user_data = request.data
        if not user_data or not isinstance(user_data, dict):
            return Response({'error': 'Invalid user data. Expected a dictionary.'}, status=400)

        if 'password' not in user_data:
            return Response({'error': 'Password field is required in the user data'}, status=400)

        user_payload = {
            'username': user_data.get('username'),
            'email': user_data.get('email'),
            'password': user_data.get('password'),
        }

        user_serializer = UserSerializer(data=user_payload)
        if user_serializer.is_valid():
            user = user_serializer.save()

            # Log in the user
            login(request, user)

            return Response({'message': 'Parent registered successfully', 'user_id': user.id})

        return Response(user_serializer.errors, status=400)

    return Response({'error': 'Invalid request method'}, status=400)


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def teacher_signup(request):
    if request.method == 'POST':
        user_data = request.data
        if not user_data or not isinstance(user_data, dict):
            return Response({'error': 'Invalid user data. Expected a dictionary.'}, status=400)

        if 'password' not in user_data:
            return Response({'error': 'Password field is required in the user data'}, status=400)


        user_payload = {
            'username': user_data.get('username'),
            'email': user_data.get('email'),
            'password': user_data.get('password'),
        }

        user_serializer = UserSerializer(data=user_payload)
        if user_serializer.is_valid():
            user = user_serializer.save()

            return Response({'message': 'Teacher registered successfully', 'user_id': user.id})

        return Response(user_serializer.errors, status=400)

    return Response({'error': 'Invalid request method'}, status=400)


@api_view(['PUT'])
@permission_classes([permissions.IsAuthenticated])
def update_parent_profile(request):
    user = request.user

    try:
        parent = Parent.objects.get(user=user)
    except Parent.DoesNotExist:
        return Response({'error': 'Parent profile not found'}, status=404)

    if request.method == 'PUT':
        serializer = ParentProfileSerializer(parent, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Parent profile updated successfully'})

        return Response(serializer.errors, status=400)

    return Response({'error': 'Invalid request method'}, status=400)


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({'message': 'Login successful'})
    else:
        return Response({'error': 'Invalid username or password'}, status=400)

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def logout_view(request):
    logout(request)
    return Response({'message': 'Logout successful'})


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_teacher_details(request):
    user = request.user

    try:
        teacher = Teacher.objects.get(user=user)
    except Teacher.DoesNotExist:
        return Response({'error': 'Teacher profile not found'}, status=404)

    serializer = TeacherDetailsSerializer(teacher)
    return Response({'message': 'Teacher details retrieved successfully', **serializer.data})



@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_parent_details(request):
    user = request.user

    try:
        parent = Parent.objects.get(user=user)
    except Parent.DoesNotExist:
        return Response({'error': 'Parent profile not found'}, status=404)

    serializer = ParentSerializer(parent)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])  
def get_child_details(request):
    try:
        parent = Parent.objects.first() 
        child = Child.objects.filter(parent=parent).first()
    except Parent.DoesNotExist:
        return Response({'error': 'Parent profile not found'}, status=404)
    except Child.DoesNotExist:
        return Response({'error': 'Child profile not found'}, status=404)

    serializer = ChildDetailsSerializer(child)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_attendance_details(request):
    user = request.user

    try:
        teacher = Teacher.objects.get(user=user)
        teaching_class = teacher.teaching_class
        attendances = Attendance.objects.filter(teaching_class=teaching_class, date=date.today())
        serializer = AttendanceSerializer(attendances, many=True)
        return Response({'message': 'Attendance details retrieved successfully', 'attendances': serializer.data})
    except Teacher.DoesNotExist:
        return Response({'error': 'User is not a teacher'}, status=403)
    
    
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def mark_attendance(request):
    teacher = request.user
    try:
        teaching_class = teacher.teacher.teaching_class
    except Teacher.DoesNotExist:
        return Response({'error': 'Teacher profile not found'}, status=404)

    # Extract data from the request
    attendance_data = request.data
    date = attendance_data.get('date')
    student_attendance = attendance_data.get('student_attendance', [])

    for student_data in student_attendance:
        student_id = student_data.get('student_id')
        is_present = student_data.get('is_present', False)

        # Use get_object_or_404 to retrieve the Child instance
        student = get_object_or_404(Child, id=student_id, parent__child_classroom=teaching_class)

        attendance_record, created = Attendance.objects.get_or_create(
            child=student,
            date=date,
            defaults={'is_present': is_present}
        )
        if not created:
            attendance_record.is_present = is_present
            attendance_record.save()
            
    return Response({'message': 'Attendance marked successfully'})