for (var data=[],i=0;i<=159;++i) data[i]=i;
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

ID = shuffle(data);
tabquestions = [" Quelle pratique est responsable du deplacement des composants vers les environnements de production ?", " Quelle pratique inclue la classification et la propriete des questions et des demandes des utilisateurs ?", " Quelle pratique identifie les metriques qui refletent l experience d un service pour le client ?", " Quelle est l utilisation PRINCIPALE d un calendrier des changements ?", " Quelle dimension de la gestion des services est axee sur les activites et la façon dont elles sont coordonnees ?", " De quelle façon la categorisation des incidents assiste-t-elle la pratique de  gestion des incidents  ?", "Identifiez le ou les mots manquants dans la phrase suivante  Un service est un moyen qui permet la co-creation de valeur en facilitant [?] que les clients veulent atteindre", " Laquelle des options suivantes est une recommandation de la pratique d  amelioration continue  ?", "Laquelle des options suivantes est un benefice potentiel de l utilisation d un outil de gestion des services informatiques pour supporter la pratique de  gestion des incidents  ?", " Quel rôle soumet des demandes de service ?", " Quelle pratique propose un point de contact unique pour les utilisateurs ?", " Quel principe directeur recommande de prendre en consideration les quatre dimensions de la gestion des services ?", " Laquelle des options suivantes est supportee par la pratique de  gestion des demandes de service  ?", " Quelle pratique releve de la responsabilite de chacun au sein de l organisation ?", "Identifier le mot manquant dans la phrase suivante : Le but de la pratique de  gestion de la securite de l information  est de [?] les informations de l organisation", " Quel principe directeur recommande de collecter les donnees avant de determiner ce qui peut etre reutilise ?", " Laquelle des options suivantes N est habituellement PAS incluse dans la gestion des incidents ?", " Laquelle des options suivantes decrit le mieux la nature des principes directeurs ?", " Quel enonce sur l autorite de changement est CORRECT ?", " Quelle pratique a pour but de mettre a disposition des services et des fonctionnalites nouveaux ou modifies ?", " Quelle activite de la chaine de valeur permet de s assurer que les personnes comprennent la vision de l organisation ?", " Quel enonce sur les activites de la chaine de valeur est CORRECT ?", " Quel est le but de la pratique de  gestion des fournisseurs  ?", " Quels sont les deux types de coûts que le consommateur d un service doit evaluer ?", " Laquelle des options suivantes est un but de la pratique du  centre de services  ?", " De quelle façon une organisation doit-elle adopter des methodes d amelioration continue ?", " Quel concept ITIL decrit la gouvernance ?", " Laquelle des options suivantes est une recommandation de la pratique du  centre de services  ?", "Quel principe directeur recommande d organiser le travail en parties plus petites et gerables qui peuvent etre executees et effectuees dans un delai convenable ?", " Qu est-ce qu un changement standard ?", "Que se passe-t-il lorsqu une solution de contournement devient la façon permanente de traiter un probleme ne pouvant pas etre resolu de façon rentable ?", " Quelle est la definition d un changement ?", " Quelle est la definition d un evenement ?", " Quelle option decrit des resultats ?", " Laquelle des options suivantes NE constitue PAS un element cle de la dimension  information et technologie  ?", "Quelles pratiques sont generalement impliquees dans l implementation de la resolution d un probleme ? 1 - L amelioration continue. 2 - La gestion des demandes de service. 3 - La gestion des niveaux de service. 4 - Le controle des changements", " Laquelle des options suivantes constitue un element cle du principe directeur  opter pour la simplicite et rester pratique  ?", " Que faut-il faire en premier lieu lorsque l on applique le principe directeur  privilegier la valeur  ?", "Un fournisseur de services decrit un package qui comprend un ordinateur portable fourni avec des logiciels, des licences et un support.  De quelle option ce package est-il un exemple ?", " Quelle est la definition d une garantie ?", " Quel est l effet de l automatisation accrue sur la pratique  centre de services  ?", " Quel terme decrit la fonctionnalite offerte par un service ?", " Quel est le but de la pratique  surveillance et gestion des evenements  ?", " Sur quoi doivent etre basees toutes les decisions d amelioration continue ?", " Comment les activites de la chaine de valeur transforment-elles les intrants en livrables ?", "Comment l implication des clients contribue-t-elle a la pratique de  gestion des niveaux de service  ? 1 - Elle permet de capturer les informations servant de base aux mesures. 2 - Elle s assure que l organisation atteint les niveaux de service definis. 3 -  Elle definit les flux de travail pour les demandes de service . 4 - Elle supporte les discussions sur les progres ", " Quel est le point de depart de l optimisation ?", "Identifier les mots manquants dans la phrase suivante : [?] a pour but de s assurer que l organisation co-cree continuellement de la valeur avec toutes les parties prenantes, conformement aux objectifs de l organisation", " Quelle pratique supporte la gestion des retours, des compliments et des plaintes des utilisateurs ?", "Quelle activite effectuee conjointement par le fournisseur de services et le consommateur de service s assure d une co-creation continue de valeur ?", " Quelle pratique peut comporter le declenchement d une reprise apres une catastrophe ?", " Quel type de changement est le PLUS susceptible d etre gere par la pratique  gestion des demandes de service  ?", "Quel principe directeur met l accent sur la necessite de comprendre le flux de travail en cours, d identifier les goulots d etranglement et de decouvrir les gaspillages ?", "Laquelle des options suivantes est un moyen de permettre la co-creation de valeur en facilitant des resultats que les clients veulent atteindre", " Quel enonce sur l autorisation des changements est CORRECT ?", " Quelle dimension de la gestion des services prend en compte la gouvernance, la gestion et la communication ?", "Identifier les mots manquants dans la phrase suivante :  Une erreur connue est un probleme qui a ete [?] et n a pas ete resolu", " Quel enonce sur les erreurs connues et les problemes est CORRECT ?", " De quoi depend la pratique de  gestion des demandes de service  pour une efficience maximale ?", " Quel enonce sur la pratique  centre de services  est CORRECT ?", "Quelle pratique s assure de la disponibilite d informations fiables et precises sur les elements de configuration et les relations entre ces derniers?", " Quelle pratique a pour but de retablir aussi rapidement que possible le fonctionnement normal des services ?", "Identifier les mots manquants dans la phrase suivante :  Un client est une personne qui definit les exigences relatives a un service et assume la responsabilite [?] de la consommation du service", "Quel principe directeur decrit l importance d agir plutôt que de consacrer beaucoup de temps a l analyse des differentes options?", " Que faut-il faire pour chaque problème ?", " Comment une organisation doit-elle inclure des fournisseurs tiers dans l amelioration continue de ses services ?", " Quelles considerations influencent la strategie fournisseurs d une organisation ?", " Qu est-ce qu un problème ?", " Quel est le but de la pratique  gestion des relations  ?", " Laquelle des options suivantes vise a aider les organisations a adopter et adapter les conseils ITIL ?", " Qu’est-ce qu’un livrable ?", " Quelle est la raison pour laquelle un ensemble equilibre de metriques de service est utilise ?", " Pourquoi les incidents doivent-il etre priorises ?", " Quelle pratique a pour but d aider l organisation a optimiser la valeur, maitriser les coûts et gerer les risques ?", " Pourquoi le personnel du centre de services doit-il detecter les difficultes recurrentes ?", " Quelle activite de la chaine de valeur communique l etat actuel des quatre dimensions de la gestion des services ?", " Quel principe directeur se preoccupe PRINCIPALEMENT des recettes et de la croissance du consommateur ?", "Quelle pratique fournit une visibilite sur les services de l organisation en recueillant des donnees et en produisant des rapports sur la fourniture de services ?", " Quel est le MEILLEUR exemple d un changement urgent ?", " Quel principe directeur recommande d evaluer l etat actuel et de decider ce qui peut etre reutilise ?", " Laquelle des options suivantes fournit a l’utilisateur un accès au système ?", " Quel principe est axe sur les consommateurs de services ?", " Qu est-ce qui est important pour un  registre d amelioration continue  ?", " Quelle activite participe a l etape  Ou sommes-nous actuellement ?  du modele d   amelioration continue  ?", " De quelle façon le consommateur d un service contribue-t-il a la reduction des risques ?", "Identifier le mot manquant dans la phrase suivante :  L utilisation des [?] doit supporter et non remplacer ce qui est observe lorsque le principe directeur  commencer la ou vous etes  est utilise", "Quel moyen permet la co-creation de valeur en facilitant les resultats que les clients veulent atteindre, sans que ces derniers ne soient contraints de gerer les coûts et les risques specifiques ?", " Quelles sont les trois phases de la  gestion des problèmes  ?", " Quel est le MEILLEUR exemple d un changement standard ?", " Quelle dimension tient compte de la façon dont les actifs de connaissances doivent etre proteges ?", " Comment les informations relatives aux problèmes et aux erreurs connues contribuent-elles a la  gestion des incidents  ?", " Quelle est la MEILLEURE description du but de l activite de la chaine de valeur  ameliorer  ?", " Que faut-il toujours faire avant qu une activite ne soit automatisee ?", " Qu est-ce que la garantie ?", "Quelle pratique utilise des techniques telles que les analyses SWOT, les revues de tableaux de bord prospectifs et les evaluations de la maturite?", " Qu est-ce qui est defini par un changement d etat significatif pour la gestion d un service informatique ?", " Quel est le but de la pratique de  gestion des relations  ?", " Laquelle des options suivantes doit etre enregistree et geree comme un probleme ?", "Quelle pratique requiert que le personnel fasse preuve d excellentes competences en matiere de service client tels que l empathie et l intelligence emotionnelle ?", "Identifier le mot manquant dans la phrase suivante :  Le but de la pratique de gestion de la configuration des services est de s assurer que des informations exactes et fiables sur la configuration des services, et sur les [?] qui les supportent, sont disponibles au moment et a l endroit requis", " Quel est le but de la pratique de  gestion de la securite de l information  ?", "Quelle pratique est proprietaire et gere les problematiques, les requetes et les demandes des utilisateurs ?", "Quelle pratique a pour but de s assurer que les fournisseurs de l organisation et leurs performances sont geres de maniere appropriee afin de supporter l approvisionnement continu en produits et services de qualite ?", "Quand doit-on proceder a une evaluation complete des risques et a une autorisation pour un changement standard ?", "Que faut-il utiliser pour definir les attentes d un utilisateur en termes de delais d execution des demandes ?", "Une organisation demande a une partie prenante de passer en revue un changement planifie.  Quel est ici le principe directeur qui est demontre ?", "Quelle approche est CORRECTE lorsqu il s agit d appliquer le principe directeur  opter pour la simplicite et rester pratique  ?", "Quels DEUX enonces concernant la pratique de  gestion des demandes de service  sont CORRECTS ?  1 - Les demandes de service font partie de la fourniture normale des services. 2 -  Les plaintes peuvent etre traitees comme des demandes de service. 3 -  Les demandes de service resultent d une defaillance du service. 4 -  Les changements normaux doivent etre traites comme des demandes de service", "Quelle pratique permet d ameliorer la satisfaction des clients et des utilisateurs en reduisant l impact negatif des interruptions de service ?", "Quelle dimension est LA PLUS concernee par ces competences, aptitudes, rôles et responsabilites ?", "Quelles sont les DEUX situations dans lesquelles les principes directeurs d ITIL doivent  etre pris en consideration ? 1 - A chaque initiative. 2 - Dans les relations avec toutes les parties prenantes. 3 - Seulement lors des initiatives specifiques pour lesquelles le principe s avere pertinent. 4 - Seulement dans les relations specifiques avec des parties prenantes pour lesquelles le principe s avere pertinent", "Laquelle des options suivantes est un but de la gestion des mises en production ?", "Quels elements font partie du systeme de valeur des services ?", "Laquelle des options suivantes decrit des changements normaux ?", "Laquelle des options suivantes est une exigence essentielle a la reussite d un accord sur les niveaux de service ?", "Quel enonce sur les resultats est CORRECT ?", "Qu est-ce qui est defini par tout composant qui doit etre gere afin de fournir un service informatique ?", " Laquelle des options suivantes est une entree externe dans la chaine de valeur des services ?", "Quelles sont les competences les PLUS importantes requises pour le personnel du centre de services ?", "Quelles metriques de niveaux de service sont les MEILLEURES pour mesurer l experience de l utilisateur ?", "Comment peut-on combiner les sept principes directeurs lorsqu une organisation prend une decision ?", "Quel principe directeur d ITIL recommande d utiliser les services, processus et outils existants lors de l amelioration des services ?", "Laquelle des options suivantes decrit une approche CORRECTE d une autorisation de changement ?", "Quelle est l utilisation PRINCIPALE d un calendrier des changements ?", "Quelles parties prenantes co-creent de la valeur dans une relation de service ?", "Qu est-ce qui permet de reduire la resistance a une amelioration planifiee lorsque le principe directeur  collaborer et promouvoir la visibilite  est applique ?", "Qu’est-ce que l utilite ?", "Parmi les activites suivantes, laquelle est effectuee dans le cadre de la  gestion des problemes  ?", "Qu est-ce qui permet de diagnostiquer et de resoudre un incident simple ?", " Laquelle des options suivantes inclut la gouvernance, les pratiques de gestion et l amelioration continue ?", "Quelle pratique implique la gestion des vulnerabilites qui ont ete analysees mais qui demeurent non resolues ?", "Identifier le mot manquant dans la phrase suivante : Le but de la pratique de gestion des fournisseurs est de s assurer que les fournisseurs de l organisation et leur(s) [?] sont geres de maniere appropriee afin de supporter la fourniture continue en produits et services de qualite", "Laquelle des options suivantes doit etre prise en consideration dans le cadre de la dimension  partenaires et fournisseurs  ?", "dentifier les mots manquants dans la phrase suivante : Un utilisateur est [?] qui utilise des services", "Laquelle des options suivantes est une activite cle de l etape  Y sommes-nous parvenus ?  du modele d   amelioration continue", "Quelle activite fait partie de la pratique d   amelioration continue  ?", "Quel est le but de la pratique de  gestion des incidents  ?", "Quel enonce sur les etapes a suivre pour satisfaire une demande de service est CORRECT ?", "Quelle pratique coordonne la classification, la propriete et la communication des demandes de service et des incidents ?", "Quel est le but de la pratique de  gestion des deploiements  ?", "Laquelle des options suivantes est un but de la gestion des mises en production ?", "Quelle pratique a une influence significative sur l experience de l utilisateur et sur la perception du fournisseur de services ?", "Quelle est la pratique dont un but inclut l observation d un service afin de signaler certains changements d etat identifies comme des evenements ?", "Qu est-ce qui est generalement necessaire pour assigner des incidents complexes aux groupes de support ?", "Comment le flux de travail d une nouvelle demande de service doit-il etre conçu ?", "Laquelle des options suivantes est une recommandation du principe  penser et travailler de façon holistique  ?", "Quel principe directeur recommande d utiliser le nombre minimal d etapes necessaires a l atteinte d un objectif ?", "Quel enonce a propos du centre de services est CORRECT ?", "Quelles sont les deux pratiques qui utilisent des solutions de contournement ?", "Quelle dimension inclut des activites et des flux de travail ?", "Laquelle des options suivantes est une recommandation du principe directeur  privilegier la valeur  ?", "Qu est ce qui est defini comme une interruption non planifiee d un service ou une reduction de la qualite d un service ?", "Quel est le resultat attendu de l utilisation d une chaine de valeur de services ?", "Quel enonce sur les autorites de changement est CORRECT ?", "Quelle pratique est utilisee pour valider les besoins des clients en matiere de services ?", "Quel enonce sur les coûts est CORRECT ?", "Qu est-ce qui est la cause, ou la cause potentielle, d un ou plusieurs incidents ?", "Quel est le but de l activite de la chaine de valeur  impliquer  ?", "Ou sont definis les resultats requis d un service en matiere de performances ?", "Quelle est la MEILLEURE description de la valeur d un service pour un client ?"];
tabrepA = ["L habilitation des changements", " Le centre de services", " L amelioration continue", " Pour supporter la  gestion des incidents  et la planification d ameliorations", " Organisations et personnes", " Elle permet de diriger l incident vers la zone de support appropriee", " la garantie", " Il devrait y avoir au moins une petite equipe qui se consacre a la conduite des efforts d  amelioration continue ", " Il peut s assurer que la cause des incidents est identifiee dans les delais convenus", " L utilisateur ou son representant autorise", " La gestion des incidents", " Penser et travailler de façon holistique", " Une demande d autorisation d un changement qui pourrait avoir un impact sur un service", " La gestion des niveaux de service", " stocker", " Privilegier la valeur", " Des scripts pour recueillir des informations initiales sur les incidents", " Les principes directeurs peuvent guider une organisation en toutes circonstances", " Une seule autorite de changement doit etre assignee pour autoriser tous les types et les modeles de changements", " Le contrôle des changements", " Ameliorer", " Chaque pratique appartient a une activite specifique de la chaine de valeur", "S assurer que les fournisseurs de l organisation et leurs performances sont geres de maniere appropriee afin de", " Le prix du service et le coût de la creation du service", " Reduire la probabilite et l impact des incidents en identifiant leurs causes reelles ou potentielles", " En utilisant une nouvelle methode pour chaque amelioration geree par l organisation", " Les sept principes directeurs", " Les centres de services doivent eviter de recourir a l automatisation", " Privilegier la valeur", " Un changement preautorise qui est bien compris et integralement documente", " Une demande de changement est soumise au contrôle des changements", " Ajouter, modifier ou supprimer tout ce qui pourrait avoir un effet direct ou indirect sur les services", " Tout changement d etat significatif pour la gestion d un service ou de tout autre element de configuration", " Élements livrables tangibles ou intangibles", " Securite et conformite", " 1 et 2", " Essayer de creer une solution pour chaque exception", " Identifier les resultats facilites par le service", " Valeur", " Élement livrable tangible ou intangible issu d une activite", " Meilleure capacite a se concentrer sur l experience client lorsqu un contact personnel est necessaire", " Coût", "S assurer que des informations fiables et precises sur la configuration des services sont disponibles au moment et a l endroit requis", " Details sur la façon dont les services sont mesures", " En determinant la demande de services", " 1 et 2", " Obtenir l implication des parties prenantes", " Le principe directeur  privilegier la valeur ", " Le contrôle des changements", " La fourniture de service", " La gestion des incidents", " Un changement normal", " Privilegier la valeur", " Un service", " Une autorite de changement doit etre affectee a chaque type et a chaque modele de changement", " Organisations et personnes", " enregistre", " Une erreur connue est l etat attribue a un probleme une fois ce dernier analyse", " Des compliments et des reclamations", " Il fournit un lien entre les parties prenantes aux niveaux strategiques et tactiques", " La gestion de la configuration des services", " La gestion des fournisseurs", " des livrables", " Optimiser et automatiser", " Il doit faire l objet d un diagnostic pour identifier les solutions possibles", " En s assurant que les fournisseurs expliquent en detail leur approche d amelioration des services dans leurs contrats", " Les contrats et accords", " L ajout ou la modification de tout ce qui pourrait avoir un effet sur les services", " Aligner les pratiques et services de l organisation sur les besoins business evolutifs", " Les quatre dimensions de la gestion des services", " Un changement d etat qui est significatif pour la gestion d un element de configuration", " Pour reduire le nombre de metriques a collecter", " Pour permettre l appariement automatise des incidents aux problemes ou aux erreurs connues", " La gestion des relations", " Pour mieux identifier les problèmes", " Ameliorer", " Opter pour la simplicite et rester pratique", " Le centre de services", " L implementation d une nouvelle mise en production planifiee d application logicielle", " Privilegier la valeur", " Les exigences de service", " Commencer la ou vous etes", " La documentation, l evaluation et la priorisation des idees d amelioration", " Executer les actions d amelioration", " En payant pour le service", " mesures", " La gestion des services", " Enregistrement des problemes, classification des problemes, resolution des problemes", " Le passage en revue et l autorisation d un changement demande par un client", " Organisations et personnes", " Elles permettent un diagnostic rapide et efficace des incidents", " Organiser une initiative d amelioration significative en plusieurs petites initiatives", " Verifier que l activite a deja ete optimisee", " L assurance qu un produit ou service repondra aux exigences convenues", " La gestion des incidents", " Évenement", " Établir et entretenir des liens entre une organisation et ses parties prenantes", " Un utilisateur demande qu on lui fournisse un ordinateur portable", " La gestion des problèmes", " fournisseurs", " Proteger les informations necessaires a l organisation pour mener son business", " La gestion des incidents", " La gestion des mises en production", " À chaque implementation du changement standard", " Le delai indique par le client pour la fourniture du service", " Collaborer et promouvoir la visibilite", " Ajouter des contrôles et des metriques uniquement lorsqu ils sont necessaires", " 1 et 2", " La gestion des demandes de services", " Organisations et personnes", " 1 et 2", " Proteger les informations de l organisation", " Fourniture de service, consommation de service, gestion des relations de service", " Changements a risque faible et pre-autorises", " Il doit etre redige dans un langage juridique", " Les resultats correspondent a un ou plusieurs services qui repondent aux besoins d un consommateur de service", " Une demande de service", " L activite de la chaine de valeur  ameliorer ", " Competences en matiere d analyse des incidents", " Les metriques seulement basees sur le systeme", " En utilisant l ensemble des principes directeurs de façon egale pour toutes les prises de decision", " Progresser par iteration avec des retours", "Les changements inclus dans le calendrier des changements sont pre-autorises et ne necessitent pas d autorisation supplementaire", " Aider a planifier, autoriser et programmer des changements urgents", " L investisseur et le fournisseur", " Limiter les informations sur l amelioration uniquement aux parties prenantes cles", " La fonctionnalite offerte par un service pour satisfaire un besoin particulier", " Creation d enregistrements d incidents", " Une escalade rapide", " Le système de valeur des services", " Le contrôle des changements", " coûts", " Le niveau d integration et de formalite engage dans les relations entre les organisations", " une organisation", " Definir des cibles mesurables", " Identifier et enregistrer les opportunites", "Reduire l impact negatif des incidents en retablissant l exploitation normale des services aussi rapidement que possible", " Elles doivent etre complexes et detaillees", " La gestion des fournisseurs", " S assurer que les services atteignent les niveaux de performance attendus et convenus", " Proteger les informations de l organisation", " Le centre de services", " La gestion de la securite de l information", " Un outil d auto-assistance", " Utiliser un seul flux de travail pour tous les types de demandes de service", "Passer en revue les pratiques existantes en matiere de gestion des services et decider ce qu il faut garder et ce qu il faut eliminer", " Progresser par iteration avec des retours", " Le centre de services doit travailler en etroite collaboration avec les equipes de support et de developpement", " Le contrôle des changements et l amelioration continue", " Organisations et personnes", " Faire de  privilegier la valeur  une responsabilite de la direction", " Un incident", " Des flux de valeur de service", " Les autorites de changement servent uniquement a autoriser les changements urgents", " La gestion des demandes de service", " Les coûts imposes au consommateur correspondent aux coûts de l utilite du service", " Un changement", " Repondre aux attentes en matiere de qualite, de coûts et de delai de commercialisation", " Dans les accords sur les niveaux de service", " La somme d argent que le client paie pour utiliser le service"];
tabrepB = ["La gestion des mises en production", " La gestion des incidents", " Le centre de services", " Pour gerer les changements urgents", " Information et technologie", " Elle determine la priorite assignee a l incident", " les resultats", " Toutes les ameliorations doivent etre gerees comme des projets a phases multiples", " Il peut fournir un appariement automatise des incidents aux problemes ou aux erreurs connues", " Le client ou son representant autorise", " L habilitation des changements", " Progresser par iterations avec des retours", "Une demande d un utilisateur concernant quelque chose qui fait partie integrante de la fourniture normale des services", " L habilitation des changements", " fournir", " Commencer la ou vous etes", " Des procedures formalisees pour enregistrer les incidents", " Chaque principe directeur impose des actions et des decisions specifiques", " Une autorite de changement doit etre assignee pour chaque type et chaque modele de changement", " La gestion des demandes de services", " Planifier", " Une combinaison specifique d activites de la chaine de valeur et de pratiques constitue une relation de service", "Aligner les pratiques et services de l organisation sur les besoins business evolutifs via l identification et l amelioration", " Les coûts supprimes par le service et les coûts imposes par le service", " Maximiser le nombre de changements informatiques reussis en verifiant que les risques sont correctement evalues", " En choisissant quelques methodes cles pour les types d ameliorations gerees par l organisation", " Les quatre dimensions de la gestion des services", " Les centres de services doivent etre très techniques", " Commencer la ou vous etes", " Un changement qui doit etre evalue, autorise et planifie par une autorite de changement", " La gestion des problèmes restaure le service dès que possible", " S assurer que des informations exactes et fiables sur la configuration des services sont disponibles", " Tout composant qui doit etre gere afin de fournir un service informatique", " Fonctionnalite offerte par un produit ou un service", " Systèmes de communication et bases de connaissances", " 2 et 3", " Comprendre comment chaque element contribue a la creation de valeur", " Identifier tous les fournisseurs et les partenaires impliques dans le service", " Resultat", " Assurance qu un produit ou service repondra aux exigences convenues", " Diminution des enregistrements et des resolutions d incidents en libre-service", " Utilite", "Observer systematiquement des services et des composants de service, et enregistrer et signaler certains changements d etat identifies", " Donnees precises et rigoureusement analysees", " En utilisant une combinaison de pratiques", " 2 et 3", " Comprendre la vision et les objectifs de l organisation", " Les quatre dimensions de la gestion des services", " La gestion des demandes de service", " La consommation de service", " La gestion des demandes de service", " Un changement urgent", " Collaborer et promouvoir la visibilite", " Un livrable", " Centraliser les autorisations de changement auprès d une seule personne est le mode d autorisation le plus efficace", " Information et technologie", " analyse", " Une erreur connue est la cause d un ou de plusieurs problèmes", " Des outils en libre-service", " Il procede a l evaluation et a l autorisation des changements", " Le centre de services", " La gestion des deploiements", " des resultats", " Commencer la ou vous etes", " Sa priorite doit etre etablie en fonction de son impact potentiel et de sa probabilite", " En exigeant la preuve que les fournisseurs utilisent des methodes de developpement agiles", " Le type de cooperation avec les fournisseurs", " Tout changement d etat significatif pour la gestion d un element de configuration", " Établir et entretenir des liens entre une organisation et ses parties prenantes aux niveaux strategiques et tactiques", " Les principes directeurs", " Un evenement possible susceptible d entrainer un prejudice ou une perte", " Pour rapporter chaque element de service separement", " Pour identifier l equipe de support vers laquelle l incident doit etre escalade", " La gestion des actifs informatiques", " Pour escalader les incidents a la bonne equipe de support", " Impliquer", " Optimiser et automatiser", " La gestion des niveaux de service", " Une mise a niveau informatique a faible risque, implementee en tant que demande de service", " Commencer la ou vous etes", " L accord de service", " Optimiser et automatiser", "Les idees d amelioration emanant de plusieurs sources sont conservees dans un seul et meme registre d amelioration continue", " Effectuer des evaluations de bases de reference", " En gerant les serveurs materiels", " outils", " L amelioration continue", " Gestion des incidents, gestion des problèmes, contrôle des changements", " L implementation d un correctif logiciel essentiel en reponse aux problematiques de securite d un fournisseur", " Partenaires et fournisseurs", " Elles eliminent le besoin de mises a jour clients regulieres", " Mettre a disposition des fonctionnalites ou des services nouveaux ou ameliores", " Verifier que les nouvelles technologies appropriees ont bien ete achetees", " La somme d argent depensee pour une activite ou une ressource specifique", " La gestion des problèmes", " Incident", " Aligner les pratiques et les services de l organisation sur les besoins business evolutifs", " Un outil de surveillance detecte un changement d etat d un service", " La gestion des fournisseurs", " elements de configuration (CI)", " Observer les services et les composants de service", " Le centre de services", " La gestion des fournisseurs", " Au moment de la creation de la procedure utilisee pour le changement standard", " La demande du client pour le service", " Commencer la ou vous etes", " Concevoir les contrôles et les metriques en premier, puis supprimer ceux qui n ajoutent pas de valeur", " 2 et 3", " La gestion des niveaux de service", " Information et technologie", " 2 et 3", " Gerer les demandes de service initiees par l utilisateur", " Gouvernance, chaine de valeur des services, pratiques", " Changements devant etre planifies et evalues en suivant un processus", " Il doit etre redige de façon simple et facile a comprendre", " Les fournisseurs de services permettent aux consommateurs de services d atteindre des resultats", " Un element de configuration (CI)", " Un plan global", " Competences techniques", " Les metriques correspondant au pourcentage de disponibilite d un service", " En utilisant un ou deux principes directeurs qui sont les plus pertinents pour la decision specifique", " Opter pour la simplicite et rester pratique", " Les changements normaux doivent etre evalues et autorises avant leur deploiement", " Publier une liste de demandes de service que les utilisateurs peuvent choisir", " Le consommateur et le fournisseur", " Ameliorer la collaboration et la visibilite pour l amelioration", " L assurance qu un service repondra aux exigences convenues", " Diagnostic et resolution d incidents", " La mobilisation d une equipe temporaire", " L activite  fournir et assurer le support  de la chaine de valeur", " La gestion des demandes de service", " utilisateurs", " Les activites, flux de travail, contrôles et procedures requis pour atteindre les objectifs convenus", " une personne", " Effectuer des evaluations de bases de reference", " Fournir une implication tactique et operationnelle aux clients", " Capturer la demande de resolution des incidents et les demandes de service", " Elles doivent etre connues et eprouvees", " Le centre de services", " Mettre a disposition des services nouveaux ou modifies", " Gerer les demandes de service initiees par l utilisateur", " Le contrôle des changements", " La surveillance et la gestion des evenements", " La priorite de l incident", " Utiliser differents flux de travail pour chaque type de demande de service", "Revoir la façon dont une initiative d amelioration peut etre organisee en parties plus petites et gerables qui peuvent etre realisees dans un delai convenable", " Privilegier la valeur", "Le centre de services doit s appuyer sur des portails libre-service plutôt que de compter sur l escalade aux equipes de support", " Le contrôle des changements et la gestion des problèmes", " Information et technologie", " Privilegier la valeur des projets nouveaux et importants", " Un problème", " L implication des clients", " Les autorites de changement sont assignees lors du deploiement de chaque changement", " La gestion des niveaux de service", " Les coûts supprimes pour le consommateur font partie de la proposition de valeur", " Un evenement", " Apporter la transparence et les bonnes relations", " Dans les demandes de service", " Le retour financier obtenu par le client en utilisant le service"];
tabrepC = ["La gestion des actifs informatiques", " L habilitation des changements", " La gestion des niveaux de service", " Pour planifier les changements et eviter les conflits", " Partenaires et fournisseurs", " Elle s assure que les incidents sont resolus dans les delais convenus avec le client", " l utilite", " L  amelioration continue  doit etre isolee des autres pratiques", " Il peut s assurer que les contrats des fournisseurs sont alignes sur les besoins du fournisseur de services", " Le sponsor ou son representant autorise", " Le centre de services", " Privilegier la valeur", " Une demande de restauration du service après une interruption de service", " La gestion des problèmes", " verifier", " Opter pour la simplicite et rester pratique", " Des procedures detaillees pour diagnostiquer les incidents", " Une organisation choisit et adopte un seul des sept principes directeurs", " Les changements normaux sont pre-autorises et ne requierent pas l intervention d une autorite de changement", " La gestion des mises en production", " Fournir et assurer le support", " Les activites de la chaine de valeur constituent un flux de travail unique qui permet de creer de la valeur", "S assurer que les fournisseurs de l organisation et leurs performances sont geres de maniere appropriee et aux niveaux", " Le coût de la fourniture du service et le coût de l amelioration du service", " Capturer la demande de resolution d incidents et les demandes de services", " En renforçant l aptitude a utiliser autant de methodes d amelioration que possible", " La chaine de valeur des services", " Les centres de services doivent comprendre l organisation dans son ensemble", " Progresser par iterations avec des retours", "Un changement qui ne requiert pas d evaluation des risques etant donne qu il est necessaire a la resolution d un incident", " Le probleme conserve l etat d erreur connue", " Mettre a disposition des fonctionnalites ou des services nouveaux ou modifies", " L interruption non planifiee d un service ou la reduction de la qualite d un service", " Resultats souhaites par une partie prenante", " Systèmes de gestion du flux de travail et systèmes d inventaire", " 3 et 4", " Ignorer les objectifs contradictoires des differentes parties prenantes", " Determiner qui est le consommateur du service dans chaque situation", " Garantie", " Évenement potentiel susceptible d entrainer un prejudice ou une perte, ou d entraver l atteinte des objectifs", " Capacite accrue de se concentrer sur la reparation des technologies au lieu de supporter les personnes", " Garantie", " Proteger les informations necessaires a l organisation pour mener son business", " Tableau de bord equilibre et mis a jour", " En utilisant une seule equipe fonctionnelle", " 3 et 4", " Determiner ou l impact le plus positif se produirait", " Le système de valeur des services", " La gestion des problèmes", " L offre de service", " La gestion des niveaux de service", " Un changement standard", " Penser et travailler de façon holistique", " Une pratique", " L autorisation des changements normaux doit etre acceleree pour s assurer qu ils soient implementes rapidement", " Partenaires et fournisseurs", " escalade", " Les erreurs connues entrainent des vulnerabilites, les problemes entrainent des incidents", " Des processus et des procedures", " Il enquete sur l origine des incidents", " La gestion des actifs informatiques", " La gestion des problèmes", " des coûts", " Privilegier la valeur", " Il doit etre resolu pour pouvoir etre clos", "En exigeant la preuve que les fournisseurs implementent toutes les ameliorations a l aide de pratiques de gestion des projets", " La culture d entreprise de l organisation", " La cause reelle ou potentielle d un ou de plusieurs incidents", "Reduire la probabilite et l impact des incidents, en identifiant leur cause reelle ou potentielle et en gerant les solutions de contournement et les erreurs connues", " La chaine de valeur des services", " Un resultat pour une partie prenante", " Pour fournir une perspective des services en fonction des resultats", " Pour s assurer que les incidents ayant le plus fort impact business sont resolus en premier", " La gestion des mises en production", " Pour assurer une gestion efficace des demandes de service", " Obtenir/construire", " Progresser par iteration avec des retours", " La gestion des demandes de services", " L implementation d un correctif de securite sur une application logicielle critique", " Collaborer et promouvoir la visibilite", " La consommation du service", " Opter pour la simplicite", "Les idees d amelioration qui ne sont pas executees immediatement sont supprimees du registre d amelioration continue", " Definir le plan d amelioration", " En communiquant les contraintes", " plans", " Un service", " Identification des problèmes, contrôle des problèmes, contrôle des erreurs", " L installation d une application logicielle en reponse a une demande de service", " Information et technologie", " Elles eliminent le besoin de collaborer au cours de la resolution de l incident", "S assurer d une comprehension commune de la vision et de l orientation des ameliorations concernant les produits et les services", " S assurer que la solution DevOps a ete implementee avec succes", " La fonctionnalite offerte par un produit ou un service pour satisfaire un besoin particulier", " L amelioration continue", " Problème", " Definir des cibles claires basees sur le business, en matiere de performances des services", " Une analyse de tendance affiche un nombre eleve d incidents similaires", " La gestion des mises en production", " clients", "S assurer que des informations exactes et fiables sur la configuration des services sont disponibles quand et ou elles sont requises", " Le contrôle des changements", " La gestion des services", " Au moins une fois par an", " Le temps necessaire pour fournir le service de façon realiste", " Privilegier la valeur", " Concevoir les contrôles et les metriques, puis les ajouter individuellement jusqu a ce qu ils soient tous implementes", " 3 et 4", " La gestion des incidents", " Partenaires et fournisseurs", " 3 et 4", " Mettre a disposition des services nouveaux et modifies", " Resultats, utilite, garantie", " Changements generalement inities comme des demandes de service", " Il doit etre fonde sur la perspective que le fournisseur de services a du service", " Les resultats permettent aux consommateurs de services d obtenir des livrables", " Un incident", " Les besoins du client", " Competences en matiere de resolution des problemes", " Les metriques operationnelles", "En utilisant le principe  privilegier la valeur  ainsi qu un ou deux autres principes pertinents pour la decision specifique", " Commencer la ou vous etes", " Les changements urgents doivent etre autorises par autant de personnes que possible afin de reduire les risques", " S assurer qu une seule autorite de changement passe en revue chaque changement", " Le fournisseur et le prestataire", " Engager les clients une fois que toute la planification est terminee", " La somme d argent depensee pour une activite ou une ressource specifique", " L escalade d incidents a une equipe de support pour les resoudre", " L utilisation de scripts", " Le principe directeur  privilegier la valeur ", " La gestion des problèmes", " valeur", " Les informations creees, gerees et utilisees dans le cadre de la fourniture et de la consommation du service", " une equipe", " Executer des actions d amelioration", " Remplir et maintenir le registre des actifs", " Reduire la probabilite et l impact des incidents en identifiant leurs causes reelles ou potentielles", " Elles doivent inclure le traitement des incidents", " La gestion des problèmes", " Deplacer des composants nouveaux ou modifies vers des environnements de production", " Mettre a disposition des services nouveaux et modifies", " La gestion des niveaux de service", " La gestion des incidents", " Un calendrier des changements", " Éviter les flux de travail pour les demandes de service simples", " Revoir les pratiques de gestion des services et eliminer toute complexite inutile", " Penser et travailler de façon holistique", " Le centre de services doit rester isole des equipes de support technique", " La gestion des problèmes et la gestion des incidents", " Partenaires et fournisseurs", " Privilegier la valeur d abord pour le fournisseur de services", " Un changement", " La realisation de valeur", " Les autorites de changement servent seulement a autoriser les changements normaux", " Le centre de services", " Les coûts imposes au consommateur correspondent aux coûts de la garantie du service", " Une erreur connue", " Assurer l amelioration continue des services", " Dans les composants de service", " Les resultats obtenus par le client en utilisant le service"];
tabrepD = [" La gestion des deploiements", " La gestion des niveaux de service", " La gestion des problèmes", " Pour gerer les changements standard", " Flux de valeur et processus", " Elle determine la façon dont le fournisseur de services est perçu", " les livrables", " Les fournisseurs externes doivent etre exclus des initiatives d amelioration", " Il peut permettre la resolution et la clôture automatisees d incidents complexes", " Le fournisseur ou son representant autorise", " La gestion des demandes de service", " Opter pour la simplicite et rester pratique", " Une demande d investigation sur la cause de plusieurs incidents connexes", " L amelioration continue", " proteger", " Progresser par iterations avec des retours", " Le recours a des connaissances specialisees pour les incidents compliques", " Les principes directeurs decrivent les processus que toutes les organisations doivent adopter", " Les changements urgents peuvent etre implementes sans l autorisation d une autorite de changement", " La gestion des deploiements", " Obtenir/construire", "Chaque activite de la chaine de valeur contribue a la chaine de valeur en transformant des entrees specifiques en livrables", "S assurer que des informations exactes et fiables sur la configuration des services des fournisseurs sont disponibles", " Le coût du logiciel et le coût du materiel", " Definir des cibles claires basees sur le business, en matiere de performances des services", " En choisissant une seule methode pour toutes les ameliorations gerees par l organisation", " Le système de valeur des services", " Les centres de services doivent etre constitues d une equipe physique basee dans un meme endroit fixe", " Collaborer et promouvoir la visibilite", " Un changement evalue, autorise et planifie dans le cadre d une  amelioration continue ", " L enregistrement du probleme est supprime", "Deplacer des materiels, logiciels nouveaux ou modifies ou tout autre composant vers des environnements de production", "Tout composant presentant une certaine valeur financiere, qui est susceptible de contribuer a la fourniture de", " Configuration des ressources d une organisation", " Rôles et responsabilites", " 1 et 4", " Commencer par une solution complexe, puis simplifier", " Determiner le coût de la fourniture du service", " Offre de service", " Fonctionnalite offerte par un produit ou un service pour satisfaire un besoin particulier", " Élimination du besoin d escalader les incidents aux equipes de support", " Risque", "Reduire l impact negatif des incidents, en retablissant le fonctionnement normal des services aussi rapidement que possible", " Évaluation de maturite recente", " En implementant l automatisation des processus", " 1 et 4", " Standardiser les pratiques et les services", " La pratique  gestion des demandes de service ", " La gestion des incidents", " La gestion des relations de service", " La gestion des actifs informatiques", " Un changement applicatif", " Opter pour la simplicite et rester pratique", " L amelioration continue", "Les changements standards presentent un risque eleve et doivent etre autorises au plus haut niveau de l autorite de changement", " Flux de valeur et processus", " clos", "Les erreurs connues sont gerees par le personnel technique, les problemes sont geres par les equipes de gestion des services", " De la gestion des incidents", " Il requiert une comprehension pratique des processus business", " La surveillance et la gestion des evenements", " La gestion des incidents", " des risques", " Progresser par iteration avec des retours", " Une solution de contournement doit etre trouvee pour reduire son impact", " En s assurant que toutes les activites de gestion des problemes des fournisseurs entrainent des ameliorations", " Le niveau de formalite", " La reduction imprevue de la qualite d un service", "Reduire l impact negatif des incidents, en retablissant le fonctionnement normal des services aussi rapidement que possible", " Les pratiques", " Quelque chose qui est cree a la suite d une activite", " Pour faciliter la collecte automatique de metriques", " Pour encourager un haut niveau de collaboration au sein des equipes et entre ces dernieres", " Le centre de services", " Pour impliquer la bonne autorite de changement", " Planifier", " Privilegier la valeur", " La gestion de la configuration des services", " Une implementation materielle et logicielle majeure et planifiee", " Progresser par iteration avec des retours", " La fourniture du service", " Privilegier la valeur", " Les idees d amelioration sont testees, financees et approuvees", " Comprendre la mission du business", " En gerant la disponibilite du personnel", " processus", " Un actif informatique", " Analyse des problemes, identification des erreurs, resolution des incidents", " Le remplacement d un composant en reponse a un incident majeur", " Flux de valeur et processus", " Elles permettent la reevaluation des erreurs connues", " Ameliorer continuellement l ensemble des produits et services a travers toutes les activite de la chaine de valeur", " S assurer que la solution permet d eliminer la necessite d une intervention humaine", " Les benefices, l utilite et l importance perçus de quelque chose", " La gestion des demandes de service", " Erreur connue", "Supporter la qualite convenue d un service en gerant l ensemble des demandes de service convenues et initiees par l utilisateur", " Le besoin de prioriser une opportunite d amelioration dans le cadre d un processus d amelioration continue", " Le centre de services", " actifs", " Planifier et gerer le cycle de vie complet de tous les actifs informatiques", " La gestion des problèmes", " La gestion des relations", " Lorsqu un changement urgent est demande", " Les niveaux de service sur fournisseur", " Opter pour la simplicite et rester pratique", " Ajouter uniquement les contrôles et les metriques requis a des fins de conformite", " 1 et 4", " Le contrôle des changements", " Flux de valeur et processus", " 1 et 4", " Deplacer du materiel et des logiciels vers des environnements de production", " Valeur client, valeur des parties prenantes, organisation", " Changements devant etre implementes le plus tôt possible", " Il doit se rapporter a des metriques operationnelles simples", " Aider les consommateurs de services a atteindre des resultats permet de reduire les coûts du fournisseur de services", " Un actif informatique", " Les boucles de retroaction", " Competences en matiere de gestion des fournisseurs", " Les metriques relatives aux resultats definis", "En passant en revue chaque principe directeur afin de decider dans quelle mesure il est pertinent pour la decision specifique", " Privilegier la valeur", "Les changements normaux sont generalement implementes comme des demandes de service, puis autorises par le centre de services", " Aider a planifier des changements, assister la communication et eviter les conflits", " L investisseur et le consommateur", " Impliquer tous les groupes de parties prenantes de la meme façon et avec les memes communications", " Les benefices, l utilite et l importance d un element, tels qu ils sont perçus", " Analyse de tendance en matière d enregistrements des incidents", " La priorisation du problème", " La dimension  flux de valeur et processus ", " La gestion des niveaux de service", " performances", " Les competences et les aptitudes que doivent posseder les equipes et chaque membre de l organisation", " un fournisseur", " Évaluer les mesures et les metriques", " Fournir aux utilisateurs une marche a suivre claire pour signaler des problematiques, des requetes et des demandes", "Supporter la qualite convenue d un service en traitant efficacement l ensemble des demandes de service convenues initiees par l utilisateur", " Elles doivent etre brèves et simples", " La gestion des relations", " Definir des objectifs de performances des services, precis et bases sur le business", " Deplacer du materiel et des logiciels vers des environnements de production", " La gestion des fournisseurs", " Le contrôle des changements", " La categorie de l incident", " Tirer parti des flux de travail existants dans la mesure du possible", "Utiliser les quatre dimensions de la gestion des services de façon a assurer la coordination de tous les aspects d une initiative d amelioration", " Opter pour la simplicite et rester pratique", "Le centre de services doit faire remonter toutes les difficultes techniques aux equipes de support et de developpement", " La gestion des incidents et l amelioration continue", " Flux de valeur et processus", " Privilegier la valeur a chaque etape de l amelioration", " Un evenement", " L application de pratiques", " Les autorites de changement sont assignees pour chaque type et chaque modele de changement", " La gestion des incidents", " Les coûts supprimes pour le consommateur font partie de la consommation du service", " Un problème", " S assurer que la vision de l organisation est bien comprise", " Dans les offres de service", " La perception qu a le client des benefices lies a l utilisation du servic"];
tabrep = [3, 0, 2, 2, 3, 0, 1, 0, 1, 0, 2, 0, 1, 3, 3, 1, 2, 0, 1, 2, 1, 3, 0, 1, 2, 1, 3, 2, 2, 0, 2, 0, 0, 2, 3, 3, 1, 2, 3, 1, 0, 1, 1, 1, 1, 3, 1, 2, 1, 3, 0, 2, 1, 0, 0, 0, 1, 0, 2, 3, 0, 3, 1, 3, 1, 0, 2, 2, 1, 1, 3, 2, 2, 1, 0, 3, 3, 1, 2, 1, 3, 3, 0, 1, 2, 0, 2, 2, 2, 2, 0, 3, 0, 0, 2, 0, 0, 2, 3, 1, 0, 1, 1, 1, 2, 0, 0, 0, 2, 0, 0, 2, 1, 1, 1, 1, 1, 2, 0, 3, 3, 2, 1, 3, 1, 1, 0, 3, 2, 0, 2, 3, 0, 1, 3, 0, 0, 1, 1, 2, 2, 0, 1, 3, 3, 3, 3, 0, 2, 3, 3, 0, 2, 3, 1, 1, 3, 1, 0, 3];
abcd = ["A", "B", "C", "D"];
(function() {
  var questions = [{
    question: tabquestions[ID[0]],
    choices: [tabrepA[ID[0]], tabrepB[ID[0]], tabrepC[ID[0]], tabrepD[ID[0]]],
    correctAnswer: tabrep[ID[0]]
  }, {
    question: tabquestions[ID[1]],
    choices: [tabrepA[ID[1]], tabrepB[ID[1]], tabrepC[ID[1]], tabrepD[ID[1]]],
    correctAnswer: tabrep[ID[1]]
  }, {
    question: tabquestions[ID[2]],
    choices: [tabrepA[ID[2]], tabrepB[ID[2]], tabrepC[ID[2]], tabrepD[ID[2]]],
    correctAnswer: tabrep[ID[2]]
  }, {
    question: tabquestions[ID[3]],
    choices: [tabrepA[ID[3]], tabrepB[ID[3]], tabrepC[ID[3]], tabrepD[ID[3]]],
    correctAnswer: tabrep[ID[3]]
  }, {
    question: tabquestions[ID[4]],
    choices: [tabrepA[ID[4]], tabrepB[ID[4]], tabrepC[ID[4]], tabrepD[ID[4]]],
    correctAnswer: tabrep[ID[4]]
  }, {
    question: tabquestions[ID[5]],
    choices: [tabrepA[ID[5]], tabrepB[ID[5]], tabrepC[ID[5]], tabrepD[ID[5]]],
    correctAnswer: tabrep[ID[5]]
  }, {
    question: tabquestions[ID[6]],
    choices: [tabrepA[ID[6]], tabrepB[ID[6]], tabrepC[ID[6]], tabrepD[ID[6]]],
    correctAnswer: tabrep[ID[6]]
  }, {
    question: tabquestions[ID[7]],
    choices: [tabrepA[ID[7]], tabrepB[ID[7]], tabrepC[ID[7]], tabrepD[ID[7]]],
    correctAnswer: tabrep[ID[7]]
  }, {
    question: tabquestions[ID[8]],
    choices: [tabrepA[ID[8]], tabrepB[ID[8]], tabrepC[ID[8]], tabrepD[ID[8]]],
    correctAnswer: tabrep[ID[8]]
  }, {
    question: tabquestions[ID[9]],
    choices: [tabrepA[ID[9]], tabrepB[ID[9]], tabrepC[ID[9]], tabrepD[ID[9]]],
    correctAnswer: tabrep[ID[9]]
  }, {
    question: tabquestions[ID[10]],
    choices: [tabrepA[ID[10]], tabrepB[ID[10]], tabrepC[ID[10]], tabrepD[ID[10]]],
    correctAnswer: tabrep[ID[10]]
  }, {
    question: tabquestions[ID[11]],
    choices: [tabrepA[ID[11]], tabrepB[ID[11]], tabrepC[ID[11]], tabrepD[ID[11]]],
    correctAnswer: tabrep[ID[11]]
  }, {
    question: tabquestions[ID[12]],
    choices: [tabrepA[ID[12]], tabrepB[ID[12]], tabrepC[ID[12]], tabrepD[ID[12]]],
    correctAnswer: tabrep[ID[12]]
  }, {
    question: tabquestions[ID[13]],
    choices: [tabrepA[ID[13]], tabrepB[ID[13]], tabrepC[ID[13]], tabrepD[ID[13]]],
    correctAnswer: tabrep[ID[13]]
  }, {
    question: tabquestions[ID[14]],
    choices: [tabrepA[ID[14]], tabrepB[ID[14]], tabrepC[ID[14]], tabrepD[ID[14]]],
    correctAnswer: tabrep[ID[14]]
  }, {
    question: tabquestions[ID[15]],
    choices: [tabrepA[ID[15]], tabrepB[ID[15]], tabrepC[ID[15]], tabrepD[ID[15]]],
    correctAnswer: tabrep[ID[15]]
  }, {
    question: tabquestions[ID[16]],
    choices: [tabrepA[ID[16]], tabrepB[ID[16]], tabrepC[ID[16]], tabrepD[ID[16]]],
    correctAnswer: tabrep[ID[16]]
  }, {
    question: tabquestions[ID[17]],
    choices: [tabrepA[ID[17]], tabrepB[ID[17]], tabrepC[ID[17]], tabrepD[ID[17]]],
    correctAnswer: tabrep[ID[17]]
  }, {
    question: tabquestions[ID[18]],
    choices: [tabrepA[ID[18]], tabrepB[ID[18]], tabrepC[ID[18]], tabrepD[ID[18]]],
    correctAnswer: tabrep[ID[18]]
  }, {
    question: tabquestions[ID[19]],
    choices: [tabrepA[ID[19]], tabrepB[ID[19]], tabrepC[ID[19]], tabrepD[ID[19]]],
    correctAnswer: tabrep[ID[19]]
  }, {
    question: tabquestions[ID[20]],
    choices: [tabrepA[ID[20]], tabrepB[ID[20]], tabrepC[ID[20]], tabrepD[ID[20]]],
    correctAnswer: tabrep[ID[20]]
  }, {
    question: tabquestions[ID[21]],
    choices: [tabrepA[ID[21]], tabrepB[ID[21]], tabrepC[ID[21]], tabrepD[ID[21]]],
    correctAnswer: tabrep[ID[21]]
  }, {
    question: tabquestions[ID[22]],
    choices: [tabrepA[ID[22]], tabrepB[ID[22]], tabrepC[ID[22]], tabrepD[ID[22]]],
    correctAnswer: tabrep[ID[22]]
  }, {
    question: tabquestions[ID[23]],
    choices: [tabrepA[ID[23]], tabrepB[ID[23]], tabrepC[ID[23]], tabrepD[ID[23]]],
    correctAnswer: tabrep[ID[23]]
  }, {
    question: tabquestions[ID[24]],
    choices: [tabrepA[ID[24]], tabrepB[ID[24]], tabrepC[ID[24]], tabrepD[ID[24]]],
    correctAnswer: tabrep[ID[24]]
  }, {
    question: tabquestions[ID[25]],
    choices: [tabrepA[ID[25]], tabrepB[ID[25]], tabrepC[ID[25]], tabrepD[ID[25]]],
    correctAnswer: tabrep[ID[25]]
  }, {
    question: tabquestions[ID[26]],
    choices: [tabrepA[ID[26]], tabrepB[ID[26]], tabrepC[ID[26]], tabrepD[ID[26]]],
    correctAnswer: tabrep[ID[26]]
  }, {
    question: tabquestions[ID[27]],
    choices: [tabrepA[ID[27]], tabrepB[ID[27]], tabrepC[ID[27]], tabrepD[ID[27]]],
    correctAnswer: tabrep[ID[27]]
  }, {
    question: tabquestions[ID[28]],
    choices: [tabrepA[ID[28]], tabrepB[ID[28]], tabrepC[ID[28]], tabrepD[ID[28]]],
    correctAnswer: tabrep[ID[28]]
  }, {
    question: tabquestions[ID[29]],
    choices: [tabrepA[ID[29]], tabrepB[ID[29]], tabrepC[ID[29]], tabrepD[ID[29]]],
    correctAnswer: tabrep[ID[29]]
  }, {
    question: tabquestions[ID[30]],
    choices: [tabrepA[ID[30]], tabrepB[ID[30]], tabrepC[ID[30]], tabrepD[ID[30]]],
    correctAnswer: tabrep[ID[30]]
  }, {
    question: tabquestions[ID[31]],
    choices: [tabrepA[ID[31]], tabrepB[ID[31]], tabrepC[ID[31]], tabrepD[ID[31]]],
    correctAnswer: tabrep[ID[31]]
  }, {
    question: tabquestions[ID[32]],
    choices: [tabrepA[ID[32]], tabrepB[ID[32]], tabrepC[ID[32]], tabrepD[ID[32]]],
    correctAnswer: tabrep[ID[32]]
  }, {
    question: tabquestions[ID[33]],
    choices: [tabrepA[ID[33]], tabrepB[ID[33]], tabrepC[ID[33]], tabrepD[ID[33]]],
    correctAnswer: tabrep[ID[33]]
  }, {
    question: tabquestions[ID[34]],
    choices: [tabrepA[ID[34]], tabrepB[ID[34]], tabrepC[ID[34]], tabrepD[ID[34]]],
    correctAnswer: tabrep[ID[34]]
  }, {
    question: tabquestions[ID[35]],
    choices: [tabrepA[ID[35]], tabrepB[ID[35]], tabrepC[ID[35]], tabrepD[ID[35]]],
    correctAnswer: tabrep[ID[35]]
  }, {
    question: tabquestions[ID[36]],
    choices: [tabrepA[ID[36]], tabrepB[ID[36]], tabrepC[ID[36]], tabrepD[ID[36]]],
    correctAnswer: tabrep[ID[36]]
  }, {
    question: tabquestions[ID[37]],
    choices: [tabrepA[ID[37]], tabrepB[ID[37]], tabrepC[ID[37]], tabrepD[ID[37]]],
    correctAnswer: tabrep[ID[37]]
  }, {
    question: tabquestions[ID[38]],
    choices: [tabrepA[ID[38]], tabrepB[ID[38]], tabrepC[ID[38]], tabrepD[ID[38]]],
    correctAnswer: tabrep[ID[38]]
  }, {
    question: tabquestions[ID[39]],
    choices: [tabrepA[ID[39]], tabrepB[ID[39]], tabrepC[ID[39]], tabrepD[ID[39]]],
    correctAnswer: tabrep[ID[39]]
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
      else {
        score.append('<p>Question Fausse n° ' + i)
        score.append('<p>Question : ' + questions[i].question);
        score.append('<p>');
        score.append('<p>Réponse attendue --> ' + abcd[tabrep[ID[i]]] + '<p>' + questions[i].choices[questions[i].correctAnswer]);
      }
    }
    score.append('<p>');
    score.append('<p>Score total : ' + numCorrect + '/40');
    return score;
  }
})();