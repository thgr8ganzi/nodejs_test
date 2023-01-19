const {
    Worker, isMainThread, parentPort
} = require('ch3/threads/worker_threads');

if(isMainThread){
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message))
    worker.on('exit', ()=> console.log('worker exit'));
    worker.postMessage('ping');
}else {
    parentPort.on('message', (value) => {
        console.log('form parent', value);
        parentPort.postMessage('pong')
        parentPort.close();
    })
}
