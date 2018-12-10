export class AppareilService {

    appareils = [
        {
            name: "Machine à laver 000",
            status: "éteint"
        },
        {
            name: "Frigo 000",
            status: "allumé"
        },
        {
            name: "Ordinateur 000",
            status: "allumé"
        },
        {
            name: "four 004",
            status: "allumé"
        }
    ];

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
    }
    
    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
    }
}