FROM mysql:5.5

COPY sakila_choix_mult.sql /docker-entrypoint-initdb.d/sakila_choix_mult.sql
COPY sakila_choix.sql /docker-entrypoint-initdb.d/sakila_choix.sql
COPY sakila_questions-utf.sql /docker-entrypoint-initdb.d/sakila_questions-utf.sql

ENV MYSQL_DATABASE=sakila
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_HOST=localhost
ENV MYSQL_DB=sakila
