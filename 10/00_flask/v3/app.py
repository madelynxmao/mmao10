# Clyde 'Thluffy' Sinclair
# SoftDev -- Rona Ed.
# Oct 2020 

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"

app.debug = True
app.run()

'''
 this has an additional line, app.debug = True
Unlike the previous runs where you see * Debug mode: off, this time the terminal shows  * Debug mode: on
There are three additional lines that say 
Restarting with stat
 * Debugger is active!
 * Debugger PIN: 298-819-802
'''

