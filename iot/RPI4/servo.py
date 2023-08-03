import pigpio
import time 

def set_servo_angle(pin, angle):


    servo_pin = pin 

    pi.set_PWM_frequency(servo_pin, 50)


    nowangle = get_servo_angle()

    while nowangle != angle:
        if nowangle < angle:
            nowangle = nowangle + 1
        else:
            nowangle = nowangle - 1

        dutycycle =  int(nowangle/180.0*255)
        pi.set_PWM_dutycycle(servo_pin, dutycycle)    
        time.sleep(0.1)
    print('a')

def get_servo_angle():
    duty = pi.get_PWM_dutycycle(18)    
    return int(duty/255.0*180)



pi = pigpio.pi()

pi.set_PWM_frequency(18, 50)
pi.set_PWM_range(18,2000)
pi.set_PWM_dutycycle(18, int(90/180.0*255))

pi.set_PWM_frequency(13, 50)
pi.set_PWM_range(13,2000)
pi.set_PWM_dutycycle(13, int(90/180.0*255))

time.sleep(1)

# 40 140
j = 0
while True:
    i = int(input())
    if i < 40 or i > 140:
        print("range 40 <= input <= 140")
        continue
    j = j + 1
   
    if j % 2 == 0:
        set_servo_angle(18,i)
    else:
        set_servo_angle(13,i)
    


