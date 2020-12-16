#Team SharpCat (Alvin Wu, Madelyn Mao, Jonathan Lee, Victoria Gao)
#SoftDev 
#K16 -- No Trouble
#2020-12-14

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

DB_FILE="discobandit.db"
db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events

c.execute("CREATE TABLE IF NOT EXISTS students(Name text, Age int, ID int, PRIMARY KEY(ID));") #Creates table if it doesn't already exist, ID is unique
c.execute("CREATE TABLE IF NOT EXISTS courses(Code int, Mark int, ID int);") #Creates second table

with open('students.csv', newline = '') as csvfile: #Open students.csv
    reader = csv.DictReader(csvfile)
    
    for row in reader:
        Name = row['name'] #Set vars
        Age = row['age']
        ID = row['id']
        params = (Name,Age,ID) #Values to insert
        c.execute('INSERT INTO students(Name,Age,ID) VALUES(?,?,?)', params) #Insert, see notes for meaning of question marks

with open('courses.csv', newline = '') as csvfile2: #Open second csv file, courses
    reader = csv.DictReader(csvfile2)
    
    for row in reader:
        Code = row['code'] #Set vars
        Mark = row['mark']
        ID = row['id']
        params = (Code,Mark,ID) #Values to insert
        c.execute('INSERT INTO courses(Code,Mark,ID) VALUES(?,?,?)', params) #Insert, see notes for meaning of question marks

#==========================================================

db.commit() #save changes
db.close()  #close database
csvfile.close()
csvfile2.close()