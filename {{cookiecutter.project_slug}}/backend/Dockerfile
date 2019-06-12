FROM python:3.6

# python envs
ENV PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100

# python dependencies
# COPY ./requirements.txt /
COPY ./Pipfile /
COPY ./Pipfile.lock /
# RUN pip install -r ./requirements.txt
RUN pip install pipenv

RUN pipenv install --system --deploy

# upload scripts
COPY ./scripts/entrypoint.sh ./scripts/start.sh ./scripts/gunicorn.sh /

WORKDIR /app
