const kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.KafkaClient({kafkaHost: 'kafka-1:19092,kafka-2:9092,kafka-3:39092'}),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),
    payloads = [
        { topic: 'dk', messages: 'hi' },
        { topic: 'info', messages: ['hello', 'world', km] }
    ];


producer.on('ready', () => {
    producer.send(payloads, (err, data) => {
        console.log(err, data);
    });
});
 
producer.on('error', (err) => {
    console.log(err);
})