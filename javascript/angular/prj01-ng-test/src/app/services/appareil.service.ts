export class AppareilService {

    appareils = [
        {
            id: 1,
            name: "Machine à laver 0001",
            status: "éteint"
        },
        {
            id: 2,
            name: "Frigo 0002",
            status: "allumé"
        },
        {
            id: 3,
            name: "Ordinateur 0003",
            status: "allumé"
        },
        {
            id: 4,
            name: "four 0004",
            status: "allumé"
        }
    ];

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id;
            }
        );
        return appareil;
    }

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