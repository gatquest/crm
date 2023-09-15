FROM nginx


COPY nginx.conf /etc/nginx/conf.d/
WORKDIR /client
COPY . .

RUN rm /etc/nginx/conf.d/default.conf