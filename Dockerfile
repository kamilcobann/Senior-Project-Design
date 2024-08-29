FROM php:8.3.11RC2-zts-alpine3.20

# Gerekli paketleri yükleyin
RUN apk update && apk add --no-cache \
    build-base \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    oniguruma-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl

# Composer'ı kurun
COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

# Çalışma dizini ayarla
WORKDIR /var/www

# Uygulama dosyalarını kopyalayın
COPY . .

# Composer bağımlılıklarını yükleyin
RUN composer install --no-dev --optimize-autoloader

# Eksik dizinleri oluştur ve sahiplikleri ayarla
RUN mkdir -p /var/www/storage /var/www/bootstrap/cache && \
    chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Uygulama portunu aç
EXPOSE 9000

# PHP-FPM başlat
CMD ["php-fpm"]
