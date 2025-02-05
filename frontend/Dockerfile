# on part d'une image de base avec node
FROM node:lts-alpine

# on créé notre repetoire de travail on peut l'appeler comme on veut mais generalement on l'appelle app
WORKDIR /app

# on copie le package.json que Vite a crée
COPY ./package.json ./

# on installe les dependances sur l'env linus de l'image
RUN npm i

# exposer le port sur lequel va tourner le serveur de dev
# pour savoir quel port il faudra mapper avec ma machine si je veux voir le rendu
EXPOSE 5173