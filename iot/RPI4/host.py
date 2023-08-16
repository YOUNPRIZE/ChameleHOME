import os
ip = os.system('hostname -I')
print(type(ip))
#ip_add = ip.split()
#print(ip_add)
import socket

def get_wlan0_ipv4_address():
    try:
        hostname = socket.gethostname()
        ipv4_address = socket.getaddrinfo(hostname, None, socket.AF_INET)[0][4][0]
        return ipv4_address
    except socket.gaierror:
        return None

ipv4_address = get_wlan0_ipv4_address()

if ipv4_address:
    print("wlan0 인터페이스의 IPv4 주소:", ipv4_address)
else:
    print("IPv4 주소를 가져오는 데 실패했습니다.")
