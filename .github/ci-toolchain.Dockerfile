FROM docker.io/library/ruby:3.2-bookworm@sha256:bf13a46a498fb4055d0e52495c351a2648c8bc8d41b473ee3f734041a74c7f56
RUN curl --fail --location --retry 3 --output /tmp/node-v22.23.3-linux-x64.tar.xz https://nodejs.org/dist/v22.23.3/node-v22.23.3-linux-x64.tar.xz \
 && echo "df450af89261115ef9f9e3830c3eeb2cc9213b63c720b1af623cb5dcbe2e02de  /tmp/node-v22.23.3-linux-x64.tar.xz" | sha256sum --check --strict \
 && tar --extract --xz --file /tmp/node-v22.23.3-linux-x64.tar.xz --directory /usr/local --strip-components=1 \
 && rm /tmp/node-v22.23.3-linux-x64.tar.xz \
 && sed -i 's|http://deb.debian.org|https://deb.debian.org|g' /etc/apt/sources.list.d/debian.sources \
 && apt-get update \
 && apt-get install --yes --no-install-recommends python3 jq perl \
 && rm -rf /var/lib/apt/lists/*
WORKDIR /workspace
