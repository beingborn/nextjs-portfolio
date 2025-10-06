import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

@csrf_exempt
@require_POST
def hello(request):
    data = json.loads(request.body)
    name = data.get('name')
    return JsonResponse({'message' : name + 'hello!!!'}, status=200 )

@csrf_exempt
@require_POST
def signin(request):
    try:
        data = json.loads(request.body)
        name = data.get('name')
        nickname = data.get('nickname')
        gender = data.get('gender')
        address = data.get('address')
        email = data.get('email')
        password = data.get('password')
        birth = data.get('birth')
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

