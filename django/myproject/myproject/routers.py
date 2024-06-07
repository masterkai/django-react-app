from rest_framework import routers
# from myapp.viewsets import ArticleViewSet
from myapp.views import MyModelViewSet
router = routers.DefaultRouter()
router.register(r'mymodel', MyModelViewSet)
