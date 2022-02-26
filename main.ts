radio.onReceivedNumber(function (receivedNumber) {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 50)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 50)
})
radio.setGroup(1)
