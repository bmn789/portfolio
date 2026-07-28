FROM node:22-alpine as builder
WORKDIR /app
COPY pacakege*.json .
RUN npm install
COPY . .
RUN npm run build
FROM neginx:alpine

COPY neginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["neginx", "-g", "daemon off;"]