FROM mhart/alpine-node:16@sha256:828042a9a8f37e47147f7b74c6bb91d230ee3ba6d34674cde1bbc61f1f55c14e

MAINTAINER Leonardo Gatica <lgatica@protonmail.com>

# NPM dependencies (cache)
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

ADD . /opt/app
WORKDIR /opt/app
RUN npm run build && npm prune --production

EXPOSE 8000

CMD ["npm", "run", "docker-start"]
