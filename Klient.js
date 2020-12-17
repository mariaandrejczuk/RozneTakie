wiekKlientaDeklaracja = prompt('Ile lat ma klient, tj. mówi, że ma?');
wiekKlientaNaOko = prompt('Na ile wygląda?'); 

if(wiekKlientaDeklaracja >= 18) {
    if(wiekKlientaNaOko >= 18) {
          console.log('możesz kupić piwo')
          }
    else {
          console.log('pokaż dowód'); 
          maDowod = prompt('czy pokazał dowód - wpisz tak lub nie')
              if(maDowod == 'tak') {
                     console.log('sprzedaj mu piwo')}
              else{console.log('bez dowodu nie mogę sprzedać piwa')}
               }
 }
else {
    console.log('nie możesz kupic piwa')
}

