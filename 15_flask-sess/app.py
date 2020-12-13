#Team SharpCat (Alvin Wu, Madelyn Mao, Jonathan Lee, Victoria Gao)
#SoftDev 
#K15 -- Sessions Greetings
#2020-12-10

from flask import Flask,session            #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission
import os

#the conventional way:
#from flask import Flask, render_template, request

app = Flask(__name__)    #create Flask object
app.secret_key = os.urandom(24)
username = "dullcat" #USERNAME
password = "sharpiecats" #PASSWORD

@app.route("/") #, methods=['GET', 'POST'])
def disp_loginpage():
    #print("\n\n\n")
    #print("***DIAG: this Flask obj ***")
    #print(app)
    #print("***DIAG: request obj ***")
    #print(request)
    #print("***DIAG: request.args ***")
    #print(request.args)
    #print("***DIAG: request.args['username']  ***")
    #print(request.args['username'])
    #print("***DIAG: request.headers ***")
    #print(request.headers)
    if 'username' in session:
        return render_template('response.html', user = username, method = request.method)
    return render_template('login.html')


@app.route("/auth") # , methods=['GET', 'POST'])
def authenticate():
    problem = 'none'
    if request.args['username'] == '' or request.args['password'] == '': #Check if fields are filled
        problem = 'Some fields are empty, try again'
        return render_template('error.html', error = problem)     
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    print("***DIAG: request.args['username']  ***")
    print(request.args['username'])
    print("***DIAG: request.headers ***")
    print(request.headers)
    if username == request.args['username'] and password == request.args['password']: #Verify username and password
        session['username'] = username
        return render_template ('response.html', user = username, method = request.method)
    else:
        if username == request.args['username']: #Incorrect password
            problem = 'Incorrect Password'
        else:
            if password == request.args['password']: #Incorrect username
                problem = 'Incorrect Username'
            else:
                problem = 'None of your information is correct' #Both incorrect
        return render_template ('error.html', error = problem)

@app.route("/logout") #logout
def logout():
    session.pop('username', None)
    return render_template('login.html')

    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()