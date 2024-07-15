# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class CostCenter(models.Model):
    cc_id = models.AutoField(primary_key=True)
    cc_number = models.PositiveIntegerField()

    class Meta:
        managed = False
        db_table = 'cost_center'


class Device(models.Model):
    device_id = models.AutoField(primary_key=True)
    device_name = models.CharField(max_length=45)
    device_serial_number = models.CharField(max_length=45)
    device_last_use = models.CharField(max_length=45)
    fk_ds = models.ForeignKey('DeviceStatus', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'device'


class DeviceStatus(models.Model):
    ds_id = models.AutoField(primary_key=True)
    ds_description = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'device_status'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Location(models.Model):
    location_id = models.AutoField(primary_key=True)
    location_plant = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'location'


class LoginCustomuser(models.Model):
    id = models.BigAutoField(primary_key=True)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'login_customuser'


class LoginCustomuserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    customuser = models.ForeignKey(LoginCustomuser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'login_customuser_groups'
        unique_together = (('customuser', 'group'),)


class LoginCustomuserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    customuser = models.ForeignKey(LoginCustomuser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'login_customuser_user_permissions'
        unique_together = (('customuser', 'permission'),)


class OrderStatus(models.Model):
    os_id = models.AutoField(primary_key=True)
    os_description = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'order_status'


class Orders(models.Model):
    order_id = models.AutoField(primary_key=True)
    order_retrieval_date = models.CharField(max_length=100)
    order_delivery_date = models.CharField(max_length=100)
    order_ticket_it = models.CharField(max_length=45)
    order_ticket_user = models.CharField(max_length=45)
    fk_user = models.ForeignKey('Users', models.DO_NOTHING, db_column='fk_user')
    fk_device = models.ForeignKey(Device, models.DO_NOTHING)
    fk_order_status = models.ForeignKey(OrderStatus, models.DO_NOTHING, db_column='fk_order_status')

    class Meta:
        managed = False
        db_table = 'orders'


class Users(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_edv = models.PositiveIntegerField()
    user_name = models.CharField(max_length=45)
    fk_location = models.ForeignKey(Location, models.DO_NOTHING)
    fk_cc = models.ForeignKey(CostCenter, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'users'
