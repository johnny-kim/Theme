// Common
import _ from 'lodash';
import $ from 'jquery';
import jqueryui from 'jquery-ui';
import moment from 'moment';
import bootstrap from 'bootstrap/dist/js/bootstrap';
import fontawesomeloader from 'font-awesome-loader';
import jqueryvalidation from 'jquery-validation';

// Plugins
import chosen from 'chosen-js/chosen.jquery';
import d3 from 'd3/dist/d3';
import c3 from 'c3/c3';
import rangeslider from 'ion-rangeslider';
import select2 from 'select2';
import uislider from 'nouislider';
import datepicker from 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
import 'slick-carousel/slick/slick';

import custom from './src/js/custom';

// Sass
import './src/application.scss';

// Entry
import './main';
import './components';
import './layouts';
import './plugins';
import './helper';
import './guide';
import './conects';

jqueryui();
moment();
bootstrap();
fontawesomeloader();
jqueryvalidation();

chosen();
d3();
c3();
rangeslider();
select2();
uislider();
datepicker();

custom();

$('#myPicker input').datepicker();

$('#component-group .input-group.date').datepicker({
  todayHighlight: true
});

$('#range-group .input-daterange').datepicker({
  daysOfWeekHighlighted: "0,6",
  todayHighlight: true,
  toggleActive: true
});
