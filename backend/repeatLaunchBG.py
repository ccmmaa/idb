import time
import os
import sys
import subprocess
import re

def loop():
    while True:
        delay = 60;
        print("Launching API")
        subprocess.Popen(['sudo', 'python', 'main.py', '&'], stdout=subprocess.PIPE)
        time.sleep(delay);
        proc1 = subprocess.Popen(['ps', 'ax'], stdout=subprocess.PIPE)
        proc2 = subprocess.Popen(['grep', 'python'], stdin=proc1.stdout,
                                 stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        proc1.stdout.close() # Allow proc1 to receive a SIGPIPE if proc2 exits.
        out, err = proc2.communicate()
        pids = "";
        for line in out.split(chr(10)):
            if 'repeatLaunchBG' not in line:
            	try:
	                words = line.split(" ")
	                print(words[1])
	                pids += words[1] + " "
	            except (EndexError):
	            	pass
            
        command = ['sudo', 'kill', '-9']; 
        array = pids.split()
        print(array)
        index = 0
        for pid in array:
            command += [array[index]]
            index += 1

        print("Killing API")
        subprocess.call(command)
        # time.sleep(delay);

if __name__ == "__main__":
    loop()

loop();



# expected: ['sudo', 'kill', '-9', '73629']
# actual : ['sudo', 'kill', '-9', '7', '3', '6', '2', '9']

















