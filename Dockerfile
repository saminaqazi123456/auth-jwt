# server
# Pull Docker Hub base image
FROM node:16.13.2
# Create app directory
RUN mkdir -p /usr/src/app
# Set working directory
WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./
RUN npm install -qyg nodemon@2.0.15
RUN npm install -qy
# Copy app to container
COPY . .

EXPOSE 4000
# Run the "server" script in package.json
CMD ["npm", "run", "server"]