from django.core.exceptions import PermissionDenied

class checkManagerGroupMixin:
    def dispatch(self, request, *args, **kwargs):
        if request.user.groups.filter(name='Manager').exist():
            return True
        else:
            raise PermissionDenied

class CheckEmployeeGroupMixin:
    def dispatch(self, request, *args, **kwargs):
        if request.user.groups.filter(name='Employee').exist():
            return True
        else:
            raise PermissionDenied