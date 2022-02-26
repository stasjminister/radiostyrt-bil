radio.onReceivedString(function (receivedString) {
    if (receivedString == "a") {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 50)
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 30)
    }
    if (receivedString == "b") {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 30)
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 50)
    }
    if (receivedString == "ab") {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 50)
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 50)
    }
    if (receivedString == "stopp") {
        kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
        kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
    }
})
radio.setGroup(1)
