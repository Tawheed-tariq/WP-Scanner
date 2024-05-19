FROM node:current-slim

RUN apt update && apt install git -y

RUN git clone https://github.com/Tawheed-tariq/vuln-scanner.git /vuln-scanner

WORKDIR /vuln-scanner/frontend

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
