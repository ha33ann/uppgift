//Skapar 5 olika text som ökar med 10px fontsize för varje text samt har en fontweight som gör att texten blir tjockare
for (let i = 0; i < 5 ; i++) {
   
    let p = document.createElement('p');
    document.body.appendChild(p);
    
    p.innerText = 'Rad ' + (i+1);
    p.style.textAlign = 'center';
    
    p.style.color = 'hsl(240, 90%, 70%)';
    
    p.style.fontSize = (10+i*10) + 'px';
    p.style.fontWeight = 'bold';
    p.style.fontFamily = 'Nimbus Roman';

    p.style.margin = '0.5em 0em';
    

    //Texten ska gå från ljusgrönt till ljusblått
    //Skillnaden på hue är 80 och det finns 4 steg som ska ändras från 120, därför ökar skillnaden från varje text med 20
    let hue = 120 + (i*20);
    p.style.backgroundColor = `hsl(${hue},90%,85%)`;
    
}


//Här skapar jag box som ska innehålla nummer samt text
const box = document.createElement('div');
document.body.appendChild(box);

box.style.borderColor = 'black';
box.style.borderStyle = 'solid';
box.style.borderWidth = '1px';

box.style.display = 'flex';
box.style.justifyContent = 'space-around';
box.style.padding = '60px';


//Här anger jag att det ska finnas totalt 3 boxar samt att backgrundsfärgen på boxen ska vara lila (angivet i hue)
//Jag anger även en array med 10 nummer, angivet som text
for (let i = 0; i < 3; i++) {

    let div = document.createElement('div');
    box.appendChild(div);
        
    div.style.backgroundColor = 'hsl(240, 70%, 80%)';
    div.style.padding = '8px';

    const numberArray = ['ett', 'två', 'tre', 'fyra','fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];


    //Här anger jag värdet som boxarna ska innehålla (alltså 10 värden där vänster box ska gå från 0-9, mitten box ska gå från 9-0 och höger box ska gå från ett-tio med text)
    for (let k = 0; k < 10; k++) {

        const p = document.createElement('p');
        div.appendChild(p);

        p.style.margin = '0px';
        p.style.paddingTop = '0.25em';
        p.style.width = '40px';
        
        p.style.fontSize = '13px';
        p.style.fontFamily = 'Nimbus Roman';

        let setBackground;
        let setColor;
        
        //Vänster box (i = 0) ska innehålla 10 siffror där innerText (K) ska ändras för varje rad (kommenterar raderna längre ner)
        //Siffrorna ska vara i vänster sidan av boxen alltså inget angivet textAlign för denna box
        if (i===0) {

            p.innerText = k; 
            
            //Om raderna (0-9) är ojämna siffror (1, 3, 5, 7, 9) så ändras bakgrundsfärgerna på angivna box till vit och siffrorna till svart. (Färgerna hoppar för varje 2 rader eftersom det angivits 2 på procent tecknet (%))
            if (k%2) {
                setBackground= 'white';
                setColor = 'black';
                
            } 
            
            //Annars, siffrorna som är jämna (0, 2, (4), 6, 8) har svart bakgrundsfärg med vit text
            else {
                setBackground = 'black';
                setColor = 'white';
            }

            //Här anger jag att siffran 4 på vänster box inte ska ha någon bakgrundsfärg så den smälter in med boxens lila färg. Siffran däremot ska ha färgen vit
            if (k===4) {
                setBackground = 'none';
                setColor = 'white';
            }
            
         //Mitten box anges med i===1 och här anger jag att siffrorna ska gå från 9-K (där K angivits tidigare i texten som 0)
         //Denna box ska ha siffror i mitten så jag anger en textAlign som `center`
        } else if (i===1) {

            p.innerText = 9-k;
            p.style.textAlign = 'center';

            //Om siffrorna (K) är ojämna (9, 7, 5, 3, 1) så blir bakgrundsfärgen vit och texten inuti svart. Den hoppar alltså två steg i taget eftersom en procent tecken angivits med 2 (%)
            if (k%2) {
                setBackground = 'black';
                setColor = 'white';
            } 
            
            //Annars har resterande siffror bakgrundsfärgen vit och texten inuti svart.
            else {
                setBackground = 'white';
                setColor = 'black';
            }
            
            //Här anger jag att siffran från 10-0 så skall siffran som representerar 9 (alltså 8) inte ha någon bakgrundsfärg. Den ska alltså smälta in med boxen och ha lila färg, med vit text inuti
            if (10-k===9) {
                setBackground = 'none';
                setColor = 'white';
            }
        }

        //Höger box skall importera text som tidigare angivits i arraylistan som ska ökas med hjälp av J klassen (0-9) men med text istället för siffror.
        //Eftersom det är den sista boxen (höger) så skall texten också vara i höger och det anger jag som "end" i textAllign.
        else {

            p.innerText = numberArray[k];
            p.style.textAlign = 'end';

            //Här anger jag att för varje två text ska bakgrundsfärgen vara vit och texten svart. Detta blir då alltså texten (två, fyra, (sex), åtta, tio)    
            if (k%2) {
                setBackground= 'white';
                setColor = 'black';
                
            }
            
            //Här anger jag att de andra texter ska innehålla en svart bakgrundsfärg och vit text.
            else {
                setBackground = 'black';
                setColor = 'white';
            }
            
            //Om vi kommit till den femte siffran (räknat från 0 vilket betyder texten "sex") så skall den inte ha någon bakgrundsfärg. Den ska alltså smälta in tillsammans med boxen (lila färg) och texten ska vara av svart färg (som visats i uppgiftens bild på classroom)
            if (k===5) {
                setBackground = 'none';
                 setColor = 'black';
            }

        }

        //Här anger jag att färgen på boxarna ska ha färgen som angivits i tidigare kod
        p.style.color = setColor;
        p.style.backgroundColor = setBackground;
    }

}
