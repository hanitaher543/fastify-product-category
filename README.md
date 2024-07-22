# fastify-product-category
Project: Association between Category and Product Models

Association entre les Modèles Category et Product
Ce projet met en place une relation entre les modèles Category et Product dans une base de données. L'association spécifie que chaque catégorie peut contenir plusieurs produits, tandis que chaque produit appartient à une seule catégorie. Cette relation est implémentée de la manière suivante :

Category : Représente une catégorie de produits. Chaque instance de ce modèle peut avoir plusieurs produits associés.
Product : Représente un produit individuel. Chaque instance de ce modèle est liée à une seule catégorie.
Détails de l'Association :
Relation : Un-à-Plusieurs (1
)
Une catégorie peut contenir plusieurs produits.
Un produit appartient à une seule catégorie.
Schéma de la Base de Données :
Category :
id (Identifiant unique)
name (Nom de la catégorie)
Autres attributs pertinents
Product :
id (Identifiant unique)
name (Nom du produit)
categoryId (Identifiant de la catégorie à laquelle le produit appartient)
Autres attributs pertinents