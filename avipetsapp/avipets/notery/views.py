from django.db.models.query_utils import Q
from django.shortcuts import render
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *

class NoteView(generics.ListCreateAPIView):
    queryset = Note.objects.all().order_by('id')
    serializer_class = NoteSerializer
    permission_classes = [permissions.AllowAny]

"""
class AddNoteView(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = AddPageSerializer
    permission_classes = [permissions.AllowAny]
"""
# Page_element API
class PageElementViewSet(viewsets.ModelViewSet):
    queryset = PageElement.objects.all().order_by('order_on_page')
    serializer_class = PageElementSerializer

# Heading_1 API
class Heading_1ViewSet(viewsets.ModelViewSet):
    queryset = Heading_1.objects.all()
    serializer_class = Heading_1Serializer

# Heading_2 API
class Heading_2ViewSet(viewsets.ModelViewSet):
    queryset = Heading_2.objects.all()
    serializer_class = Heading_2Serializer

# Text API
class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

# Kanban API
class KanbanViewSet(viewsets.ModelViewSet):
    queryset = Kanban.objects.all()
    serializer_class = KanbanSerializer

# Kanban_Group API
class KanbanGroupViewSet(viewsets.ModelViewSet):
    queryset = KanbanGroup.objects.all()
    serializer_class = KanbanGroupSerializer

# Kanban_Card API
class KanbanCardViewSet(viewsets.ModelViewSet):
    queryset = KanbanCard.objects.all().order_by('order_on_group')
    serializer_class = KanbanCardSerializer

# PageLink API
class PageLinkViewSet(viewsets.ModelViewSet):
    queryset = PageLink.objects.all()
    serializer_class = PageLinkSerializer

# PageLink API
class ToDoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = ToDoSerializer

# Table API
class TableViewSet(viewsets.ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer

# Table Row API
class TableRowViewSet(viewsets.ModelViewSet):
    queryset = TableRow.objects.all()
    serializer_class = TableRowSerializer

# Table Data API
class TableDataViewSet(viewsets.ModelViewSet):
    queryset = TableData.objects.all()
    serializer_class = TableDataSerializer

# Tag API
class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer