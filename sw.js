self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(res => {
                if(res.ok){
                    console.log('hola cara de vola')
                    return res;
                }else{
                    console.log('hola cara de vola funciono!')
                    return fetch('img/main.jpg');
                }
            }).catch(() => {
                console.log('Fallo total en la red, cargando imagen alternativa.');
                return fetch('img/main.jpg');
            })
  
    );
})