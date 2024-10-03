from django.contrib.auth.backends import ModelBackend
from.models import CustomUser

class EDVAuthentication(ModelBackend):
    def authenticate(self, request, edv=None, password=None, **kwargs):
        try:
            user = CustomUser.objects.get(edv=edv)
            if user.check_password(password) and self.user_can_authenticate(user):
                return user
        except CustomUser.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return CustomUser.objects.get(pk=user_id)
        except CustomUser.DoesNotExist:
            return None