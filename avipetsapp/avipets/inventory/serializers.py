from rest_framework import serializers
from .models import Inventory


class InventorySerializer(serializers.ModelSerializer):
    #quantity = serializers.IntegerField(required=False, default=0)
    class Meta:
        model = Inventory
        fields = '__all__'
    
    def to_internal_value(self, data):
        if data.get('quantity') == '':
            data['quantity'] = 0
        return super(InventorySerializer, self).to_internal_value(data)

    def create(self, validated_data):
        return Inventory.objects.create(**validated_data)        

    def update(self, instance, validated_data):
        instance.category = validated_data.get('scooby', instance.category)
        instance.item_name = validated_data.get('item_name', instance.item_name)
        instance.quantity = validated_data.get('quantity', instance.quantity)
        instance.save()
        return instance

class InventorySearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ('category', 'item_name')

class ItemDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = '__all__'