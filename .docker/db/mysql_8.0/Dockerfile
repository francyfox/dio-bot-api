FROM mysql:8.0

WORKDIR /var/www

ENV USER=denisl
ENV UID=1000
ENV GID=1000

RUN groupadd -g "$GID" "$USER"
RUN useradd -u "$UID" -ms /bin/bash -g "$USER" "$USER"

USER "$USER"