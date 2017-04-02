
// Arduino pin numbers
const int SW_pin = 2; // digital pin connected to switch output
const int X_pin = 0; // analog pin connected to X output


const int led = 13; // analog pin connected to Y output


 
void setup() {

    pinMode(13, OUTPUT);
       pinMode(2, INPUT);


  Serial.begin(9600);
}
 
void loop() {

  Serial.print(digitalRead(SW_pin),DEC);
  Serial.print(" ");

  Serial.print(analogRead(X_pin),DEC);
  Serial.print(" ");

 Serial.print("\r");
  delay(1000);

    

}
