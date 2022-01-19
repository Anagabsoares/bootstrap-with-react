FROM node:16.13.2-buster as build 

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm ci --production 

COPY . .

RUN npm run build


# NGINX WEB SERVER CONFIG
FROM nginx:1.21.5-alpine as prod
RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY ./nginx.config /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=build /code/build /usr/share/nginx/html







# COPY --from=build /code/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
# docker run --rm -it --name web -p 3000:80  react-docker:1.0.0-prod

# DEVELOPMENT 
#? FROM node:16.13.2-buster 
# # base image - like OOP concept, we are inherinting from node:16.13.
# # use docker hub to grab the images we need 


#? WORKDIR /code
# # The workdir will create a directory called code and will move us into that


#? COPY package.json /code/package.json
#? COPY package-lock.json /code/package-lock.json
# # it is creating a cope of our code inside code directory

# # install npm
#? RUN npm install

#? COPY . . 
# # copy all the source code into the workdirectory

#? CMD ["npm","run", "start"]
#  it tells the docker engine what command I want to run when you run this image inside of a container

# next step build the image  $docker build -t react-docker:1.0.0-dev .
# run container $docker run --rm -it --name web -p 3000:3000 react-docker:1.0.0-dev
# $docker run --rm -it --name web -p 3000:3000 -v $(pwd):/code react-docker:1.0.0-dev
# $docker ps we can see which container are running 
# $docker exec -it web bash          