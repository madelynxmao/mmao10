# Clyde 'Thluffy' Sinclair
# SoftDev -- Rona Ed.
# Oct 2020 

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()

# This code runs the same as version 3, however, it makes sure that if app.py was imported, it will not run. 
