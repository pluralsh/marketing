FROM nginxinc/nginx-unprivileged:1.23.1-alpine
# Copy nginx.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./robots.txt /usr/share/nginx/html

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["sh", "-c", "nginx -g 'daemon off;'"]
