from rest_framework import viewsets
from accounts.permissions import IsAdminOrReadOnly
from .models import Indicator, ProgressEntry, ClimateActionCellMeeting
from .serializers import (
    IndicatorSerializer, ProgressEntrySerializer, ClimateActionCellMeetingSerializer
)


class IndicatorViewSet(viewsets.ModelViewSet):
    queryset = Indicator.objects.all()
    serializer_class = IndicatorSerializer
    permission_classes = [IsAdminOrReadOnly]


class ProgressEntryViewSet(viewsets.ModelViewSet):
    queryset = ProgressEntry.objects.all()
    serializer_class = ProgressEntrySerializer
    permission_classes = [IsAdminOrReadOnly]


class ClimateActionCellMeetingViewSet(viewsets.ModelViewSet):
    queryset = ClimateActionCellMeeting.objects.all()
    serializer_class = ClimateActionCellMeetingSerializer
    permission_classes = [IsAdminOrReadOnly]