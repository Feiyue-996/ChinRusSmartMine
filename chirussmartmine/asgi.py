# asgi.py

import os, django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'chirussmartmine.settings')
django.setup()

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import pagesEN.routing

websocket_urlpatterns = pagesEN.routing.websocket_urlpatterns

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            websocket_urlpatterns
        )
    ),
})
