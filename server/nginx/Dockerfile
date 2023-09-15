FROM nginx


COPY nginx.conf /etc/nginx/conf.d/
WORKDIR /client
COPY . .

RUN chmod -R 755 /client
RUN rm /etc/nginx/conf.d/default.conf