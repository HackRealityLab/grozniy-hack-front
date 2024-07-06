FROM node:slim as node-slim

ENV JSSETUP_PATH="/opt/project/front"

RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    nano

WORKDIR $JSSETUP_PATH

COPY ./ ./

RUN npm install --production
RUN npm run build 

CMD ["npm", "start"] 