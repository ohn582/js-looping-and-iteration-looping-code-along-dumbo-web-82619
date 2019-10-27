function writeCards(name, event){
  for (let i = 0; i < 3; i += 1){
    console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  }
}

writeCards(name, event);

function countDown(num){
  let i = 1;
  while (i < gifts.length) {
    console.log(i);
    i -= 1;
  }
}
