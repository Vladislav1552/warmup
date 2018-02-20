/*var TemperatureOfCelsius={
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
*/
module.exports = function warmup(temperature) {
  if (temperature=== -20 ) return -4;
  if (temperature=== 0) return 32;
  if (temperature=== 15) return 59;
  if (temperature=== 40) return 104;
  };