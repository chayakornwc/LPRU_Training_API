FROM node:latest
MAINTAINER chayakorn.lpru@gmail.com
RUN mkdir src
WORKDIR /src
RUN mkdir app
WORKDIR /src/app
RUN npm install
EXPOSE 3000
CMD npm start
