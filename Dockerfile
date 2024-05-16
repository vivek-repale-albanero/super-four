FROM 851796746980.dkr.ecr.us-west-2.amazonaws.com/albanero.base_node_ui_repo:2024.6.1

WORKDIR /opt/app

COPY package*.json ./

RUN npm install

COPY . /opt/app

EXPOSE 5555

RUN npm run build

ENTRYPOINT ["npm"]

CMD ["run", "serve"]
