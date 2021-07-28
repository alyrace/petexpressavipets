from rest_framework import permissions

class ObjectPermissions(permissions.BasePermission):
    def has_permission(self, request, view, obj):
        return obj.id == request.user