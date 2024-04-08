FROM node:latest

WORKDIR /examen/app

COPY . .

ENV HOST_DB=host
ENV PORT_DB=3306
ENV USER_DB=root
ENV DATABASE_DB=examen
ENV PASSWORD_DB=12345


RUN npm i  

CMD [ "npm", "run", "dev" ]