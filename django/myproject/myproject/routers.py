from rest_framework import routers
from myapp.viewsets import ArticleViewSet
router = routers.DefaultRouter()
router.register('articles', ArticleViewSet)