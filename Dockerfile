FROM node:16-alpine as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . /app/
COPY /ssl /ssl

RUN npm install --silent
RUN #npm install react-scripts@4.0.3 -g --silent
RUN npm run build
# production environment
FROM nginx:1.21.1-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /ssl etc/nginx
RUN rm /etc/nginx/nginx.conf
COPY --from=builder /ssl/nginx.conf etc/nginx

EXPOSE 443:443
CMD ["nginx", "-g", "daemon off;"]