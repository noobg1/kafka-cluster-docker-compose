## Start cluster

```
docker-compose -f docker-compose-kafka-cluster.yml up
```

## View containers

```
docker ps
```

## Edit hostnames

```
# Add follwoing entry to /etc/hosts for mac-os
127.0.0.1       kafka-1 kafka-2 kafka-3 /etc/hosts

```

## Test setup

```
npm i
# creates topics and sends messages
node producer.js 

# to retreive messages
node consumer.js
```