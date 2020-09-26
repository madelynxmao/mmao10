import random
def pick():
    KREWES = {'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA',
                          'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
              'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE',
                      'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
              'endymion': ['JASON', 'DEAN', 'MADDIE', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY',
                           'ERIN', 'MEIRU']}
    teams = ['orpheus', 'rex', 'endymion']

    ##picks one of the 3 random groups
    r = random.randint(0, 2)
    ##print(KREWES[teams[r]])

    #picks one of the group members
    n = len(KREWES[teams[r]])
    pos = random.randint(0,n-1)
    print(KREWES[teams[r]][pos])

pick()
