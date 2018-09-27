from rest_framework import serializers
from . import models
from brice_julie_gram.users import serializers as user_serializers
from brice_julie_gram.images import serializers as image_serializers

class NotificationSerializer(serializers.ModelSerializer):

    creator = user_serializers.ListUserSerializer()
    image = image_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'