import Vue from 'vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import {faWonSign} from '@fortawesome/free-solid-svg-icons';

const icons = [faWonSign];

library.add(...icons);

Vue.component('fa', FontAwesomeIcon);