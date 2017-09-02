function TennisGame(){
  let A=0;
  let B=0;
  this.reset = () =>{

  }
  this.playerAGetScore=()=>{
    A+=1
  }
  this.echo = () =>{
    if( A == 0 && B == 0 ) return `Love - Love`
    else if(A == 1 && B==0 ) return `Fifteen - Love`
  }

}
test(`Echo "Love - Love" when game start`,() => {
  //Arrange
  let app=new TennisGame()

  //Act
  app.reset();
  let result = app.echo()

  //Assert
  expect(result).toBe(`Love - Love`)

})
test(`Echo "Fifteen - Love" when player A gets first score`,() => {
  //Arrange
  let app=new TennisGame()
  //Act
  app.reset()
  app.playerAGetScore()
  let result = app.echo()
  //Assert
  expect(result).toBe(`Fifteen - Love`)
})
