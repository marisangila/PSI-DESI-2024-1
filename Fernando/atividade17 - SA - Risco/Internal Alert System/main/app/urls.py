from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_view),
    path('form/',views.form_view, name='form'),
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('main/logout/', views.logout_view, name='logout'),
    path('main/',views.main_admin_view, name='main'),
    path('form/success/',views.form_success_view,name='success'),
    path('form/ll/',views.form_load_locals,name='load_locals'),
    path('form/ls/',views.form_load_situacoes,name='load_situacoes'),
    path('form/lr/',views.form_load_riscos,name='load_riscos'),
    path('main/del/',views.main_delete_reports,name='delete_reports'),
    path('main/update/',views.main_update_reports,name='update_reports'),

]

