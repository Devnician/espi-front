# stage 1
FROM node:alpine AS espi-front
WORKDIR /app  
COPY . .
RUN npm install
RUN npm run build

# stage 2
FROM nginx:alpine
COPY --from=espi-front /app/dist/espi-front /usr/share/nginx/html
EXPOSE 80

# docker build -t pesho02/espi-front .
# docker push pesho02/espi-front