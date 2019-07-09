new Vue({
  el: "#main",
  data: {
    message: "message vue js ... ",
    link: "http://yahoo.fr",
    title01: "le titre du lien beuuuh ",
    success: true, //  false | true
    persons: [
      {
        nom: "picatchu",
        prenom: "tatatsu"
      },
      {
        nom: "yahirou",
        prenom: "mamatsuru"
      },
      {
        nom: "haomaru",
        prenom: "takayuka"
      },
      {
        nom: "renju",
        prenom: "kensuka"
      }
    ]
  },
  methods: {
    close: function() {
      alert("methode close applée @  !! ");
      this.success = false;
    }
  }
});
