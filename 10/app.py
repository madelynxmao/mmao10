import csv
from random import choices
from flask import Flask
app = Flask(__name__)

@app.route("/")
def random_occupations():
    with open("./occupations.csv", "r", newline='') as csv_file:
        reader = csv.reader(csv_file, delimiter=',')
        header = next(csv_file)  # we wanted to get rid of the header
        occupations = {}  # initialize the dictionary
        for row in reader:
            occupations[row[0]] = float(row[1])  # populated the dictionary
        del occupations['Total']  # deleted the last row
        # next two lines are so we can use random.choices()
        key = list(occupations.keys())
        values = list(occupations.values())
        return_string = '''Team Pink Elk (Madelyn Mao, Matthew Hui, Pak Ming Lau <br>
                            SoftDev<br>
                            k10 -- Putting Little Pieces Together<br>
                            &nbsp;&nbsp;&nbsp;Create a webpage that prints out a random occupation<br>
                            2020-10-08<br><br>'''
        return_string += "Random career: " + choices(key, weights=values, k=1)[0] + "<br><br>"
        for i in key:
            return_string += i + "<br>"
        return return_string

if __name__ == "__main__":
    app.debug = True
    app.run()
