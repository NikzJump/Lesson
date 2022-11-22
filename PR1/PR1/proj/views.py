from django.shortcuts import render
from unicodedata import name
from django.http import request

def index(request):
    return render(request, 'proj/index.html')
def index2(request):
    return render(request, 'proj/index2.html')
def index3(request):
    return render(request, 'proj/index3.html')