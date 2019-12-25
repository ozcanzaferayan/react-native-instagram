var prettyTime = function (time) {
    if (!time) return;
    var now = new Date();
    var releasedDate = new Date(time);
    var seconds = ((now.getTime() - releasedDate) * .001) >> 0;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    var years = days / 365;
   
    return templates.prefix + (
      seconds < 45 && template('seconds', seconds)
      || seconds < 90 && template('minute', 1)
      || minutes < 45 && template('minutes', minutes)
      || minutes < 90 && template('hour', 1)
      || hours < 24 && template('hours', hours)
      || hours < 42 && template('day', 1)
      || days < 30 && template('days', days)
      || days < 45 && template('month', 1)
      || days < 365 && template('months', days / 30)
      || years < 1.5 && template('year', 1)
      || template('years', years))
      + templates.suffix;
  };
   
  var templates = {
    prefix: "",
    suffix: " önce",
    seconds: "saniyeler",
    minute: "1 dakika",
    minutes: "%d dakika",
    hour: "1 saat",
    hours: "%d saat",
    day: "1 gün",
    days: "%d gün",
    month: "1 ay",
    months: "%d ay",
    year: "1 yıl",
    years: "%d yıl"
  };
  var template = function (t, n) {
    return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
  };
   
  export default prettyTime;