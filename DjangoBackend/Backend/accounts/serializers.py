from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Parent, Teacher, Child, Attendance

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
        

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class ParentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parent
        fields = ['telephone_number', 'parent_name', 'child_first_name', 'child_last_name', 'child_gender', 'child_classroom', 'profile_picture']

    def validate_telephone_number(self, value):
        # Add any custom validation for telephone_number if needed
        return value
    

class ParentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Parent
        fields = '__all__'

class TeacherSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Teacher
        fields = '__all__'
        
        
class TeacherDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['name', 'teaching_class', 'profile_picture']

class ParentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parent
        fields = ['telephone_number', 'parent_name', 'child_first_name', 'child_last_name', 'child_gender', 'child_classroom', 'profile_picture']


class ChildDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Child
        fields = ['first_name', 'last_name', 'gender', 'practice_area', 'profile_picture']
        
        

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = '__all__'
