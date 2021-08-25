const msg = 'Typescript'

function sayHello(msg: string){
  return 'hello' + msg
}

document.body.textContent = sayHello(msg)