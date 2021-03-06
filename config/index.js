module.exports = {
    'dev': {
        'PORT': 5000,
        'MONGO_HOST_LOG': '127.0.0.1',
        'MONGO_PORT_LOG': 27017,
        'MONGO_DB_LOG': 'log'
    },
    'test': {
        'PORT': 4000,
        'MONGO_HOST_LOG': '127.0.0.1',
        'MONGO_PORT_LOG': 27017,
        'MONGO_DB_LOG': 'log'
    },
    'production' :{
        'PORT': 5000,
        'MONGO_HOST_LOG': '127.0.0.1',
        'MONGO_PORT_LOG': 27017,
        'MONGO_DB_LOG': 'log'
    }
};
