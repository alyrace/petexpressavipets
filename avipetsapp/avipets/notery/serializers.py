from rest_framework import serializers
from .models import *

def upload_to(instance, filename):
    return 'media/{filename}'.format(filename=filename)

class TextSerializer(serializers.ModelSerializer):

    class Meta:
        model = Text
        fields = '__all__'

class Heading_2Serializer(serializers.ModelSerializer):

    class Meta:
        model = Heading_2
        fields = '__all__'

class Heading_1Serializer(serializers.ModelSerializer):

    class Meta:
        model = Heading_1
        fields = '__all__'


class KanbanCardSerializer(serializers.ModelSerializer):

    class Meta:
        model = KanbanCard
        fields = '__all__'

class KanbanGroupSerializer(serializers.ModelSerializer):

    kanban_card = serializers.SerializerMethodField()

    class Meta:
        model = KanbanGroup
        fields = '__all__'

    def get_kanban_card(self, instance):
        cards = instance.kanban_card.all().order_by('order_on_group')
        return KanbanCardSerializer(cards, many=True, read_only=True).data

class KanbanSerializer(serializers.ModelSerializer):

    kanban_group = serializers.SerializerMethodField()

    class Meta:
        model = Kanban
        fields = '__all__'
    
    def get_kanban_group(self, instance):
        groups = instance.kanban_group.all().order_by('order')
        return KanbanGroupSerializer(groups, many=True, read_only=True).data

class PageLinkSerializer(serializers.ModelSerializer):

    page_name = serializers.CharField(source='page.name', read_only=True)

    class Meta:
        model = PageLink
        fields = ('id', 'page', 'page_element', 'page_name')

class ToDoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = '__all__'

# Table Serializers___________________________________
class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = '__all__'

class TableDataSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    tag_heads = TagSerializer(many=True, read_only=True)

    class Meta:
        model = TableData
        fields = '__all__'

class TableRowSerializer(serializers.ModelSerializer):  
    data = serializers.SerializerMethodField()

    class Meta:
        model = TableRow
        fields = '__all__'

    def get_data(self, instance):
        data = instance.data.all().order_by('order')
        return TableDataSerializer(data, many=True, read_only=True).data

class TableSerializer(serializers.ModelSerializer):
    rows = serializers.SerializerMethodField()

    class Meta:
        model = Table
        fields = '__all__'

    def get_rows(self, instance):
        rows = instance.rows.all().order_by('order')
        return TableRowSerializer(rows, many=True, read_only=True).data

class PageElementSerializer(serializers.ModelSerializer):
    heading_1 = Heading_1Serializer(many=True, read_only=True)
    heading_2 = Heading_2Serializer(many=True, read_only=True)
    text = TextSerializer(many=True, read_only=True)
    kanban = KanbanSerializer(many=True, read_only=True)
    page_link = PageLinkSerializer(many=True, read_only=True)
    to_do = ToDoSerializer(many=True, read_only=True)
    table = TableSerializer(many=True, read_only=True)

    class Meta:
        model = PageElement
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    page_elements = serializers.SerializerMethodField()

    class Meta:
        model = Note
        fields = '__all__'
    
    def get_fields(self):
        fields = super(NoteSerializer, self).get_fields()
        fields['children'] = NoteSerializer(many=True, required=False)

        return fields

    def get_pages(self, instance):
        pages = instance.pages.all().order_by('id')
        return NoteSerializer(pages, many=True, read_only=True).data

    def get_page_elements(self, instance):
        elements = instance.page_elements.all().order_by('order_on_page')
        return PageElementSerializer(elements, many=True, read_only=True).data

class AddPageSerializer(serializers.ModelSerializer):

    page_elements = PageElementSerializer

    class Meta:
        model = Note
        fields = '__all__'



