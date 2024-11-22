from django.db import models

from django.db import models

class Demo(models.Model):
    title = models.CharField(max_length=200)  # 演示标题
    description = models.TextField()          # 描述
    animation_data = models.JSONField()       # JSON 数据，用于前端动画（可选）
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    