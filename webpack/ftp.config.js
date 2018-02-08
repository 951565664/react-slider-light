module.exports = {
    host: '127.0.0.1',
    port: 21,
    user: 'test',
    password: '123456',
    path: '/',
    rules: [{
        include: 'resources',
        path: '/',
    }, {
        include: 'resources/文件',
        path: 'test',
    }, ]
}