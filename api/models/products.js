const cassandra = require('cassandra-driver');
const Mapper = cassandra.mapping.Mapper;

const client = new cassandra.Client({
    localDataCenter: 'datacenter1',
    contactPoints:['127.0.0.1:9042'],
    keyspace:'apis'
});

client.connect();

const mapper = new Mapper(client, {
    models: {
        'Products': { 
        tables : ['products'],
        keyspace: 'apis' }
    }
})

exports.productsMapper = mapper.forModel('Products');