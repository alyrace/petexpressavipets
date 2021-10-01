from rest_framework import serializers
from .models import Invoice, Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        read_only_fields = (
            "invoice",
        )
        fields = (
            "id",
            "service",
            "quantity",
            "unit_price",
            "net_amount",
            "vat_rate",
            "discount"
        ) 

class InvoiceSerializer(serializers.ModelSerializer):
    client = serializers.StringRelatedField()
    items = ItemSerializer(many=True)
    
    class Meta:
        model = Invoice
        read_only_fields = (
            "invoice_number",
            "created_at",
            "created_by",
            "last_updated",
            "modified_by",
        ),
        fields = (
            'id',
            'invoice_number',
            'invoice_type'
            'client',
            'sender_reference',
            'invoice_type',
            'due_date',
            'is_sent',
            'paid',
            'gross_amount',
            'vat_amount',
            'net_amount',
            'discount_amount',
            'items',
            'is_credit_for',
            'notes',
        )
    def create(self, validated_data):
        items_data = validated_data.pop('items')
        invoice = Invoice.objects.create(**validated_data)

        for item in items_data:
            Item.objects.create(invoice=invoice, **item)
        
        return invoice    
    """
    def to_internal_value(self, data):
        if data.get('total') == '':
            data['total'] = 0
        return super(InvoiceSerializer, self).to_internal_value(data)
    
    def create(self, validated_data):
        return Invoice.objects.create(**validated_data)        

    def update(self, instance, validated_data):
        #instance.category = validated_data.get('invoice_type', instance.invoice_type)
        instance.category = validated_data.get('category', instance.category)
        instance.scooby = validated_data.get('scooby', instance.scooby)
        instance.invoice = validated_data.get('invoice', instance.invoice)
        #instance.quantity = validated_data.get('total', instance.total)
        instance.save()
        return instance
    
class InvoiceSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = ('invoice_type', 'client')
    def create(self, validated_data):
        items_data = validated_data.pop('items')
        invoice = Invoice.objects.create(**validated_data)

        for item in items_data:
            Item.objects.create(invoice=invoice, **item)
        
        return invoice

class ItemDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = '__all__'
"""        