FROM ubuntu
RUN apt-get update && apt-get install curl -y
RUN command -v meteor >/dev/null 2>&1 || set -e | curl -sL https://install.meteor.com | sed s/--progress-bar/-sL/g | /bin/sh

WORKDIR /src
COPY . /src
RUN meteor npm install

EXPOSE 3000
RUN meteor rebuild --allow-superuser
ENTRYPOINT ["meteor", "--allow-superuser", "--once"]
