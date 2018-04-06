import subprocess
o = subprocess.check_output(['ps', 'ax', '|', 'grep', 'python'])
if 'python main.py' in o:
    pass
else:
    subprocess.run(['python', 'backend/main.py'])