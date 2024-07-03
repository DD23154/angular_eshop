FROM ubuntu:latest

RUN apt-get update -y \
&& apt-get install nodejs -y \
&& apt-get install npm -y \
&& npm install -g @angular/cli@17

ADD . /app

WORKDIR /app

RUN npm install

EXPOSE 4200

CMD ng serve --host 0.0.0.0