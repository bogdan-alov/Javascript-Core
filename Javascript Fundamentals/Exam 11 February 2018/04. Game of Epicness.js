function main(generals,commands) {

    let winner_kingdom = {'kingdom': 'none', 'generals':[]}
    generals.map(c=> c['wins'] = 0 )
    generals.map(c=> c['looses'] = 0)
    let kingdoms = new Map()
    let generalses = new Map()
    for (let i = 0; i < generals.length; i++) {
        if (generalses.has(generals[i].general)) {
            let old_army = 0
            if (generalses[generals[i].general] === undefined) {
                old_army = 0
            } else{
                old_army = generalses.get(generals[i].general).army
            }
            let general = generals[i]
            general.army = old_army + generals[i].army
            generalses.set(generals[i].general,general)
        }else{
            generalses.set(generals[i].general,generals[i])
        }
        
    }
    
    for (let i = 0; i < commands.length; i++) {
        let [att_kingdom, att_general, deff_kingdom,deff_general] = [commands[i][0],commands[i][1],commands[i][2],commands[i][3]]
        if (att_kingdom === deff_kingdom) {
            continue
        } else{
            let attacking_general = generalses.get(att_general)
            let deffending_general = generalses.get(deff_general)
           
            let attacking_army = attacking_general.army
            let deffending_army = deffending_general.army

            if (attacking_army === undefined) {
                attacking_army = 0
            } 
            if (deffending_army === undefined) {
                deffending_army = 0
            }

           // console.log(attacking_army,deffending_army)


            if (attacking_army === deffending_army) {
                continue
            } else if (attacking_army > deffending_army) {
                attacking_army = attacking_army + (attacking_army * 0.1)
                deffending_army = deffending_army - (deffending_army * 0.1)
                attacking_general.army = attacking_army
                deffending_general = deffending_army

                generalses.set(att_general,attacking_general)
                generalses.set(deff_general,deffending_general)
            } else if(deffending_army > attacking_army){
                attacking_army = attacking_army - (attacking_army * 0.1)
                deffending_army = deffending_army + (deffending_army * 0.1)

                attacking_general.army = attacking_army
                deffending_general = deffending_army

                generalses.set(att_general,attacking_general)
                generalses.set(deff_general,deffending_general)
            }
        }
    }

    generalses.forEach(element => {
        let kingdom = element.kingdom
        if (kingdoms.has(element.kingdom)) {
            let current_kingdom = kingdoms.get(kingdom)
             current_kingdom = current_kingdom.generals.push(element)

             kingdoms.set(kingdom,current_kingdom)
        
        } else{
            let new_kingdom = {'kingdom':kingdom,generals:[]}
            new_kingdom.generals.push(element)
            kingdoms.set(kingdom,new_kingdom)
        }
    })

    kingdoms.forEach(element => {
        for (let i = 0; i < element.generals.length; i++) {
            
            console.log(element.generals[i])
            
        }
    })
   
}


main([{ kingdom: "Maiden Way", general: "Merek", army: 5000 }, { kingdom: "Stonegate", general: "Ulric", army: 4900 }, { kingdom: "Stonegate", general: "Doran", army: 70000 }, { kingdom: "YorkenShire", general: "Quinn", army: 0 }, { kingdom: "YorkenShire", general: "Quinn", army: 2000 }, { kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"], ["Stonegate", "Ulric", "Stonegate", "Doran"], ["Stonegate", "Doran", "Maiden Way", "Merek"], ["Stonegate", "Ulric", "Maiden Way", "Merek"], ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
)