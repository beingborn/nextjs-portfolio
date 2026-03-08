페이지네이션 구현

1. 데이터 모델

Post : {
id = models.AutoField(unique=True, primary_key=True, auto_created=True)
title = models.CharField(max_length=100, default="")
content = models.CharField(max_length=255)  
 files = models.FileField()  
 created_at = models.DateField()
modified_at = models.DateField()
}

2. 기본 레이아웃 구성
