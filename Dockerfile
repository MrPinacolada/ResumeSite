FROM node:18.17.0
WORKDIR /resumesite
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "dev" ]
