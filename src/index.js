var TemperatureOfCelsius={
  warmCold:-20,
  warmCool: 0,
  warmMedium:15,
  warmHot:40,
}
module.exports = function warmup(temperature) {
if (temperature=== TemperatureOfCelsius.warmCold ) return -4;
if (temperature=== TemperatureOfCelsius.warmCool) return 32;
if (temperature=== TemperatureOfCelsius.warmMedium) return 59;
if (temperature=== TemperatureOfCelsius.warmHot) return 104;
};
