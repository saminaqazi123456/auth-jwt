# client
# Pull Docker Hub base image
FROM node:16.13.2
# Set working directory
WORKDIR /usr/app/client
# Install app dependencies
COPY package*.json ./
RUN npm install -qy
# Copy app to container
COPY . .

EXPOSE 3000
# Run the "client" script in package.json
CMD ["npm", "start"]