FROM node:latest AS build
LABEL maintainer="client-crm"
WORKDIR /client
COPY package.json package-lock.json ./
#RUN npm install -g @angular/cli@13.3.7
RUN npm install
COPY . .
RUN npm run build

##STAGE 2
#FROM nginx:latest
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /usr/src/app/dist/client /usr/share/nginx/html
