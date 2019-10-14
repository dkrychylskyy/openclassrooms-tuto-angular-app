export class AppareilService {
    appareils = [
        {
          id : 1,
          name : "Machin à lavé",
          status : 'allumé'
        },
        {
          id: 2,
          name : "Télévision",
          status : "allumé"
        },
        {
          id : 3,
          name : "Ordinateur",
          status : 'éteint'
        }
      ];

      switchOnAll() {
          for(let appareil of this.appareils) {
              appareil.status = 'allumé';
          }
      }

      switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
      }

      switchOnOne(index : number) {
        this.appareils[index].status = 'allumé';
      }
      
      switchOffOne(index : number) {
        this.appareils[index].status = "éteint";
      }

      getAppreilsById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
              return s.id === id;
            }
          ) 
          return appareil;
      }
}