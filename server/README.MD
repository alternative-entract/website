# ApproAlternative Backend nodejs+mongoDB


Documentation technique pour le projet Backend en Node.jS

# Architecture
Le projet   utilise une architecture en microservices basée sur Node.js. Les différents microservices utilisés dans le projet comprennent :

Service d'authentification : qui gère les processus d'inscription, de connexion et d'authentification des utilisateurs.
Service de catalogue : qui gère les produits et les catégories de produits.
Service de panier : qui gère les opérations de panier, y compris l'ajout de produits, la suppression de produits et le traitement de la commande.
Service de paiement : qui gère les paiements pour les commandes.


# Technologies utilisées:

Node.js : pour le développement du serveur
Express : pour la gestion des routes et des middleware
MongoDB : pour la base de données
Mongoose : pour la modélisation des données
jsonwebtoken (JWT) : pour l'authentification
nodemailer: pour la gestion des emails
express-fileupload : pour l'upload et sauvegarde des images.

# Fonctionnalités clés:

Inscription et connexion des utilisateurs
Gestions des Users et Roles des users (admin, user)
Gestion des produits et des catégories de produits
Ajout de produits au panier et suppression de produits du panier
Traitement des commandes


# API
Les API fournies par le projet e-commerce comprennent :
pour l'authentification:
POST /auth/login: pour la connexion d'un utilisateur existant
POST /auth/register: pour enregsitrer un nouvel utilisateur
POST /auth/verif-email: verifier l'existance du mail d'inscription
POST /auth/forgot-password : pour l'envoi du mail pour une mot de passe oublié
POST /auth/reset-password : pour réunitialiser le mot de passe
GET /auth/logout : pour deconnecter un utilisateur.

GET /users : afficher tous les utilisateurs enregistrer (role admin)
GET /users/:ID: afficher les informations d'un utilisateur par son id (role admin)
GET /users/profile: afficher les inforoamtions de l'utilisateur connecté.
PATCH /users/updateUser: modifier et mettre à jours les inforoamtions de l'utilisateur connecté.
PATCH /users/updateUserPassword : mise à jour  du mot de passe de l'utilisateur connecté.

GET /products : pour recupérer les produits enregister sur la base
POST /products : ajouter un produit (role admin)
GET /products/:ID : recupérer un produit à partir de son ID
DELETE /products/:ID : supprimer un produit à partir de son ID(role admin)
PATCH /products/:ID : mise à jour d'un produit à partir de son ID(role admin)
POST /products/upload-image : gestion d'upload des images (role admin)

# TODO :
POST /cart/add : pour ajouter un produit au panier
POST /cart/remove : pour supprimer un produit du panier
POST /cart/checkout : pour traiter la commande



# Modèles de base de données
Le projet  utilise les modèles de base de données suivants :
User : pour stocker les informations utilisateur
Product : pour stocker les informations produit
Category : pour stocker les informations de catégorie, y compris le nom et la description
Cart : pour stocker les informations de panier, y compris les produits et les quantités
Order : pour stocker les informations de commande, y compris les produits, les quantités et les informations de paiement


