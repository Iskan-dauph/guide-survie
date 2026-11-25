/* =============================================================
   LES FICHES DU GUIDE

   Chaque fiche est un bloc entre accolades { }, séparé du suivant
   par une virgule. Pour en ajouter une, copiez ce modèle :

     {
       titre: "Le titre de votre fiche",
       categorie: "Vie pratique",
       texte: "Votre conseil, en une ou deux phrases.",
       auteur: "Votre prénom"
     },

   Catégories disponibles :
     "Vie pratique"   "Études"   "Transport"   "Bons plans"

   ATTENTION
     - Ne supprimez ni le crochet [ du début, ni le ]; de la fin.
     - Chaque bloc se termine par une virgule, accolade comprise : },
     - Si votre texte contient une apostrophe, tout va bien :
       les guillemets utilisés ici sont des guillemets droits ".
   ============================================================= */

const FICHES = [

  {
    titre: "La salle de travail du premier",
    categorie: "Études",
    texte: "Silencieuse jusqu'à 16h, beaucoup moins après. Si vous avez un partiel à réviser, venez le matin.",
    auteur: "L'équipe pédagogique"
  },

{
  titre: "Faire ses courses sans exploser son budget",
  categorie: "Vie pratique",
  texte: "Prépare une liste avant d'aller au supermarché et ne fais jamais tes courses le ventre vide. Tu achèteras seulement ce dont tu as besoin.",
  auteur: "Iskander"
},

  {
    titre: "Profiter des réductions étudiantes",
    categorie: "Bons plans",
    texte: "Avec ta carte étudiante, beaucoup de cinémas, musées et transports te font une réduction. Pense à demander à chaque fois, même quand ce n'est pas affiché.",
    auteur: "Iskander"
},

{
  titre: "Ne pas rater les bourses et aides",
  categorie: "Vie pratique",
  texte: "Renseigne-toi dès la rentrée auprès du service de la scolarité : certaines aides ont une date limite courte. Garde toujours une copie de tes papiers (carte d'identité, relevé de notes) sur ton téléphone, contacter l'administration.",
  auteur: "Iskander"
},

{
  titre: "Cuisiner en avance pour la semaine",
  categorie: "Vie pratique",
  texte: "Le dimanche, prépare une grande quantité d'un plat simple (pâtes, riz, lentilles) et répartis-le dans des boîtes. Tu gagnes du temps et de l'argent pendant la semaine.",
  auteur: "Iskander"
},



  {
    titre: "Le distributeur du deuxième",
    categorie: "Vie pratique",
    texte: "Il rend la monnaie. Celui du rez-de-chaussée, non. L'information vaut son pesant de pièces jaunes.",
    auteur: "L'équipe pédagogique"
  },
  {
    titre: "Bien organiser sa journée",
    categorie: "Études",
    texte: "Préparez vos affaires la veille pour gagner du temps le matin et commencer la journée sereinement.",
    auteur: "Mariem"
  },

  {
    titre: "Les bons plans pour économiser",
    categorie: "Bons plans",
    texte: "Comparez les prix avant d'acheter et profitez des réductions pour faire des économies au quotidien.",
    auteur: "Mariem"
  },

  {
    titre: "Arriver avant 8h30",
    categorie: "Transport",
    texte: "Entre 8h30 et 9h, le trajet double de durée. Partir vingt minutes plus tôt vous en fait gagner quarante.",
    auteur: "L'équipe pédagogique"
  },

  {
    titre: "Bien gérer son budget",
    categorie: "Vie pratique",
    texte: "Planifiez vos dépenses hebdomadaires afin de mieux maîtriser votre budget et d’éviter les dépenses inutiles.",
    auteur: "Firas"
  },

  {
    titre: "Profiter des réductions étudiantes",
    categorie: "Bons plans",
    texte: "Comparez les prix et renseignez-vous sur les réductions étudiantes pour économiser sur vos achats du quotidien.",
    auteur: "Firas"
  },


  {
    titre: "Le premier rang n'est pas un piège",
    categorie: "Études",
    texte: "On y comprend mieux, on y pose plus de questions, et on y sort avec moins de choses à revoir le soir.",
    auteur: "L'équipe pédagogique"
  },

  {
    titre: "Manger sans se ruiner",
    categorie: "Bons plans",
    texte: "Les sandwicheries de la rue derrière sont deux fois moins chères qu'en face du campus, à cinq minutes à pied.",
    auteur: "L'équipe pédagogique"
  },

  {
    titre: "Poser sa question tout de suite",
    categorie: "Études",
    texte: "Une incompréhension non traitée en cours devient une heure de travail le soir. Le calcul est vite fait.",
    auteur: "L'équipe pédagogique"
  },

  // ===== AJOUTEZ VOS FICHES CI-DESSOUS =====
{
    titre: "Apprendre autrement",
    categorie: "Astuces",
    texte: "Organisez votre temps et avancez étape par étape pour mieux réussir.",
    auteur: "Mariem"
  },
{
    titre: "Gardez le sourire",
    categorie: "Bien-être",
    texte: "Un beau sourire le matin ne fait de mal à personne, pensez-y.",
    auteur: "Iskander"
  },
{
    titre: "Commencez la journée du bon pied",
    categorie: "Motivation",
    texte: "Chaque matin est une nouvelle occasion de faire quelque chose de positif.",
    auteur: "Mariem"
  },

{
    titre: "J'aime vivre",
    categorie: "Vie pratique",
    texte: "Il rend la monnaie. Celui du rez-de-chaussée, non.",
    auteur: "Elyes"
  },
  {
    titre: "Un petit pas chaque jour",
    categorie: "Conseils",
    texte: "Meme une partie avancée peut faire une grande difference avec le temps",
    auteur: "Firas"
  },
{
    titre: "Faites une pause",
    categorie: "Bien-être",
    texte: "Travailler sans s'arreter fatigue",
    auteur: "Iskander"
  },




  // ===== FIN DE VOS FICHES =====

];
