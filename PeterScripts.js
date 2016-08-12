/**
 * Created by cerseilannister on 12/08/16.
 */

function showDate(){
    var d = new Date();
    // alert (d);
    document.writeln(d);

    var age = prompt ("Geef uw leeftijd op:");
    age = Number(age);
    document.writeln ("<H1>Volgend jaar bent u "+ (age + 1) + "jaar oud</H1>");
    document.writeln("Dit is een <B>BOLD</B>  Tag !")
}

