self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(res => {
                if(res.ok){
                    console.log('hola cara de vola')
                    return res;
                }else{
                    console.log('hola cara de vola 2')
                    return fetch('img/main.jpg');
                }
            })
    );
})