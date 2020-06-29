function windChill ()
{
    let temp = (parseFloat(document.getElementById('temp').innerHTML));
    let wind = (parseFloat(document.getElementById('wind').innerHTML));
    let chill = "";

    chill = ((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wind, 0.16)) + ((0.4275 * temp) * Math.pow(wind, 0.16)));

    document.getElementById('chill').innerHTML = chill.toFixed(0);
}