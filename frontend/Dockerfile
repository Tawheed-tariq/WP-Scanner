FROM node:current-slim

RUN apt update && apt install git -y 

RUN git clone https://github.com/Tawheed-tariq/vuln-scanner.git /vuln-scanner

WORKDIR /vuln-scanner/frontend

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
