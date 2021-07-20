from django.shortcuts import render


def airlinelist(request):
    return render(request, 'index.html'),


def airlinedetails(request):
    return render(request, 'index.html'),
