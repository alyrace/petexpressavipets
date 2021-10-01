from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from django.utils import timezone
from django.db.models.signals import post_save
from django.db.models import Q


User = settings.AUTH_USER_MODEL

def upload_to(instance, filename):
    return 'media/{filename}'.format(filename=filename)

"""
def create_user_kibble(sender, instance, created, **kwargs):
        #Create the Kibbles(Projects)
    if created:
        kibble = Kibbles()
        kibble.user = instance
        kibble.save()

post_save.connect(create_user_kibble, sender=User)

class KibbleQuerySet(models.QuerySet):
    def by_username(self, user_name):
        return self.filter(user__user_name__iexact=user_name)

    def feed(self, user):
        profiles_exist = user.following.exists()
        followed_users_id = []
        if profiles_exist:
            followed_users_id = user.following.values_list("user__id", flat=True) # [x.user.id for x in profiles]
        return self.filter(
            Q(user__id__in=followed_users_id) |
            Q(user=user)
        ).distinct().order_by("-timestamp")

class KibbleManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return KibbleQuerySet(self.model, using=self._db)

    def feed(self, user):
        return self.get_queryset().feed(user)
"""
class Note(models.Model):
    name = models.CharField(verbose_name=_('Name'), max_length=64)
    parent = models.ForeignKey('self', verbose_name=_('Parent'), related_name='children', null=True, blank=True, on_delete=models.CASCADE)
    creator = models.ForeignKey(User, verbose_name=_('Creator'), on_delete=models.CASCADE)
    photo = models.CharField(verbose_name=_('Photo'), max_length=100, null=True, blank=True)
    groups = models.IntegerField(verbose_name=_('Groups'),)
    timestamp = models.DateTimeField(auto_now_add=True)

    #objects = KibbleManager()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.name
    """
    @property
    def is_bite(self):
        return self.parent != None
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.content,
        }
    """
class PageElement(models.Model):
    note = models.ForeignKey(Note, verbose_name=_('Note'), related_name="page_elements", on_delete=models.CASCADE)
    element_type = models.CharField(verbose_name=_('Element Type'), max_length=85)
    order_on_page = models.FloatField(verbose_name=_('Page Order'),)
    group = models.IntegerField(verbose_name=_('Group'),)
    column = models.IntegerField(verbose_name=_('Column'),)
    color = models.CharField(verbose_name=_('Color'),max_length=100, null=True, blank=True)

    def __str__(self):
        return self.id

class Heading_1(models.Model):
    heading_text = models.CharField(verbose_name=_('Heading Text'), max_length=85, null=True, blank=True)
    page_element = models.ForeignKey(PageElement, verbose_name=_('Page Element'), related_name="heading_1", on_delete=models.CASCADE)

    def __str__(self):
        return self.heading_text

class Heading_2(models.Model):
    heading_text = models.CharField(verbose_name=_('Heading Text 2'), max_length=85, null=True, blank=True)
    page_element = models.ForeignKey(PageElement, verbose_name=_('Page Element'), related_name="heading_2", on_delete=models.CASCADE)

    def __str__(self):
        return self.heading_text

class Text(models.Model):
    text = models.CharField(verbose_name=_('Text'), max_length=5000, null=True, blank=True)
    page_element = models.ForeignKey(PageElement, verbose_name=_('Page Element'), related_name="text", on_delete=models.CASCADE)

    def __str__(self):
        return self.text

class Kanban(models.Model):
    name = models.CharField(verbose_name=_('Name'), max_length=64, null=True, blank=True)
    page_element = models.ForeignKey(PageElement, verbose_name=_('Page Element'), related_name="kanban", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class KanbanGroup(models.Model):
    name = models.CharField(verbose_name=_('Name'), max_length=64)
    color = models.CharField(verbose_name=_('Color'), max_length=100)
    kanban = models.ForeignKey(Kanban,verbose_name=_('Kanban'), related_name="kanbangroup", on_delete=models.CASCADE)
    order = models.FloatField(verbose_name=_('Order'),)

    def __str__(self):
        return self.name

class KanbanCard(models.Model):
    title = models.CharField(verbose_name=_('Title'), max_length=100, blank=False, null=False)
    description = models.TextField(verbose_name=_('Description'), max_length=500, null=True, blank=True)
    kanban_group = models.ForeignKey(KanbanGroup, verbose_name=_('Kanban Group'), related_name="kanbancard", on_delete=models.CASCADE)
    order_on_group = models.FloatField(verbose_name=_('Group Order'),)
    image = models.ImageField(verbose_name=_('Image'),blank=True, upload_to=upload_to)
    image_url = models.URLField(verbose_name=_('Image Url'), blank=True, null=False)
    color = models.CharField(verbose_name=_('Color'), blank=True, null=False, max_length=6)  # Hex Code
    created_at = models.DateTimeField(verbose_name=_('Created At'), default=timezone.now)

    def __str__(self):
        return self.title

class PageLink(models.Model):
    page = models.ForeignKey(Note, verbose_name=_('Page'), on_delete=models.CASCADE)
    page_element = models.ForeignKey(PageElement, verbose_name=_('Page Element'), related_name="page_link", on_delete=models.CASCADE)

    def __str__(self):
        return self.page

class Todo(models.Model):
    description = models.CharField(verbose_name=_('Description'), max_length=500, null=True, blank=True)
    completed = models.BooleanField(verbose_name=_('Completed'),)
    page_element = models.ForeignKey(PageElement, verbose_name=_('Page Element'), related_name="todo", on_delete=models.CASCADE)

    def __str__(self):
        return self.description

class Table(models.Model):
    name = models.CharField(verbose_name=_('Name'), max_length=100, null=True, blank=True)
    page_element = models.ForeignKey(PageElement, verbose_name=_('Page Element'), related_name="table", on_delete=models.CASCADE)

    def __str__(self):
        return self.id

class TableRow(models.Model):
    order = models.FloatField(verbose_name=_('Float'),)
    table = models.ForeignKey(Table, verbose_name=_('Table'), related_name="rows", on_delete=models.CASCADE)

    def __str__(self):
        return self.id

class TableData(models.Model):
    text = models.CharField(verbose_name=_('Text'), max_length=1000, null=True, blank=True)
    number = models.FloatField(verbose_name=_('Number'), null=True, blank=True)
    date = models.DateTimeField(verbose_name=_('Date'), null=True, blank=True)
    checkbox = models.BooleanField(verbose_name=_('Checkbox'), null=True, blank=True)
    url = models.CharField(verbose_name=_('Url'),max_length=200, null=True, blank=True)
    property_type = models.CharField(verbose_name=_('Property Type'), max_length=100)
    header = models.BooleanField(verbose_name=_('Header'),)
    width = models.IntegerField(verbose_name=_('Width'),)
    order = models.FloatField(verbose_name=_('Order'),)
    table_row = models.ForeignKey(TableRow, verbose_name=_('Table Row'), related_name="data", on_delete=models.CASCADE)

    def __str__(self):
        return self.id

class Tag(models.Model):
    name = models.CharField(verbose_name=_('Name'), max_length=100)
    color = models.CharField(verbose_name=_('Color'), max_length=100)
    table_data = models.ManyToManyField(TableData, verbose_name=_('Table Data'), related_name="tags", blank=True)
    table_head = models.ForeignKey(TableData, verbose_name=_('Table Header'), related_name="tag_heads", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
                             