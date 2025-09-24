import random
durchgang = 0
aktiv = True
ratezahl = random.randint(1, 50)

while aktiv:
    durchgang = durchgang +1
    benutzereingabe = int (input("Bitte eine Zahl zwischen 1"und 50 eingeben.))                                                                                                                                              
    if benutzereingabe == ratezahl:
        print("Gewonnen, die Zahl ist richtig! ")
        aktiv = False
        break
    elif benutzereingabe > ratezahl:
        print("deine geratene zahl ist zu groß")
    else:
        print("deine geartene zahl ist zu klein")

    if (durchgang == 7):
        print("schade - verloren. Einfach nochmals probieren")
        print("Es war die Zahl " + str(ratezahl))
        aktiv = False
print("Ende des Spiels")

