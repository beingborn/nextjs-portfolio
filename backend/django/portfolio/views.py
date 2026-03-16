from django.http import Http404
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from .models import Project, Post, Guestbook
from .serializers import ProjectSerializer, PostSerializer, GuestbookSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from collections import OrderedDict # 리스트 삽입 순서 보장

class BasePagination(PageNumberPagination):
    page_size = 10
    max_page_size = 100
    page_size_query_param = 'page_size'
    allow_empty_first_page=False

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('number', self.page.number),
            ('per_page', self.page.paginator.per_page),
            ('count', self.page.paginator.count),
            ('next', self.page.has_next()),
            ('previous', self.page.has_previous()),
            ('num_pages', self.page.paginator.num_pages),
            ('results', data)
        ]))

# page_size - 각 페이지네이션의 크기 결정
# max_page_size - 최대 허용 요청 페이지 크기를 나타내는 숫자 값 , page_size_query_param 설정 되어야만 유효
# page_size_query_param - 클라이언트가 요청별로 페이지 크기를 설정할 수 있도록 하는 쿼리 매개변수의 이름
# page_size_query_param를 설정했을 때 max_page_size 값보다 큰 값을 넣어도 설정해둔 max_page_size값 만큼의 객체가 리턴된다.

# ListCreateView (DRF 제공 제네릭 뷰)
# 공통 동작을 이미 구현한 클래스 
# GET 요청 -> 목록 조회 (List)
# POST 요청 -> 새 데이터 생성 (Create)

# 프로젝트 목록 조회 
class ProjectList(APIView):
    def get(self, request, format=None):
        # order_by '-' 있으면 내림차순 (최신순) 없으면 오름차순
        projects = Project.objects.all().order_by('-start_date')
        serializer = ProjectSerializer(projects, many = True, context={"request": request})
        return Response(serializer.data)

# 프로젝트 상세 조회 
class ProjectDetail(APIView):
    def get_object(self, pk):
        try:
            return Project.objects.get(pk=pk)
        except Project.DoesNotExist:
            raise Http404
        
    def get(self, request, pk, format=None):
        project = self.get_object(pk)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)
        
# 방명록 목록 조회 
class GuestbookList(APIView):
    def get(self, request, format=None):
        guestbooks = Guestbook.objects.all()
        serializer = GuestbookSerializer(guestbooks, many = True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = GuestbookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# 게시판 목록
class PostList(APIView):
    pagination_class = BasePagination
    
    def get(self, request, format=None):
        posts = Post.objects.all()

        paginator = self.pagination_class()
        page = paginator.paginate_queryset(posts, request, view=self)

        if page is not None:
            serializer = PostSerializer(page, many=True)
            return paginator.get_paginated_response(serializer.data)
        serializer = PostSerializer(posts, many = True)
        
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 게시판 상세
class PostDetail(APIView):
    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404
        
    def get(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
