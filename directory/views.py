from rest_framework import viewsets
from accounts.permissions import IsAdminOrReadOnly
from .models import VendorCategory, Vendor
from .serializers import VendorCategorySerializer, VendorSerializer


class VendorCategoryViewSet(viewsets.ModelViewSet):
    queryset = VendorCategory.objects.all()
    serializer_class = VendorCategorySerializer
    permission_classes = [IsAdminOrReadOnly]


class VendorViewSet(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
    permission_classes = [IsAdminOrReadOnly]