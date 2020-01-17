
import I18n from 'utils/I18n';
var prettyTime = function (templates, time) {
  if (!time) return;
  var now = new Date();
  var releasedDate = new Date(time);
  var seconds = ((now.getTime() - releasedDate) * .001) >> 0;
  var minutes = seconds / 60;
  var hours = minutes / 60;
  var days = hours / 24;
  var years = days / 365;

  return templates.prefix + (
    seconds < 45 && template(templates, 'seconds', seconds)
    || seconds < 90 && template(templates, 'minute', 1)
    || minutes < 45 && template(templates, 'minutes', minutes)
    || minutes < 90 && template(templates, 'hour', 1)
    || hours < 24 && template(templates, 'hours', hours)
    || hours < 42 && template(templates, 'day', 1)
    || days < 30 && template(templates, 'days', days)
    || days < 45 && template(templates, 'month', 1)
    || days < 365 && template(templates, 'months', days / 30)
    || years < 1.5 && template(templates, 'year', 1)
    || template(templates, 'years', years))
    + templates.suffix;
};
var template = function (templates, t, n) {
  return templates[t]
    && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
};

export default prettyTime;