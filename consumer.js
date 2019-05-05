const kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({kafkaHost: 'kafka-1:19092,kafka-2:9092,kafka-3:39092'}),
    consumer = new Consumer(
        client,
        [
            { topic: 'dk'}, { topic: 'info' }
        ],
        {
            autoCommit: false
        }
    );


    consumer.on('message', (message) => {
        console.log(message);
    });