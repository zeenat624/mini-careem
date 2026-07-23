FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt --default-timeout=100 --retries=10

COPY . .

EXPOSE 8082

CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8082", "--workers", "3"]