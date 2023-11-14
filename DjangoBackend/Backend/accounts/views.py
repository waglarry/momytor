from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Parent, Teacher, Child, Attendance
from .serializers import UserSerializer, ParentSerializer,ChildDetailsSerializer, ParentProfileSerializer, TeacherDetailsSerializer


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