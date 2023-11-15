# urls.py
from django.urls import path
from .views import (
    parent_signup,
    teacher_signup,
    update_parent_profile,
    login_view,
    logout_view,
    get_child_details,
    get_parent_details,
    get_teacher_details,
    mark_attendance,
    get_attendance_details
)

urlpatterns = [

    path('signup/parent/', parent_signup, name='parent_signup'),
    path('signup/teacher/', teacher_signup, name='teacher_signup'),
    path('update_parent_profile/', update_parent_profile, name='update_parent_details'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('get_teacher_details/', get_teacher_details, name='get_teacher_details'),
    path('get_parent_details/', get_parent_details, name='get_parent_details'),
    path('get_child_details/', get_child_details, name='get_child_details'),
    path('mark_attendance/', mark_attendance, name='mark_attendance'),
    path('get_attendance_details/', get_attendance_details, name='get_attendance_summary'),

]
