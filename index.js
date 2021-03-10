
function receivesAFunction(callback){
    callback()
  }

  function returnsANamedFunction() {
      return returnsANamedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {console.log('annoymous')};
}