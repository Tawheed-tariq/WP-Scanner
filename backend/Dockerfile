FROM kalilinux/kali-rolling

RUN apt-get update && apt-get install -y \
    nmap \
    whatweb \
    git \
    python3 \
    python3-pip \
    assetfinder \
    wpscan \
    && apt-get clean

RUN git clone https://github.com/Tawheed-tariq/vuln-scanner.git /vuln-scanner

WORKDIR /vuln-scanner/backend

RUN pip3 install -r requirements.txt

EXPOSE 5000

CMD ["python3","-m", "flask", "run", "--host=0.0.0.0"]
