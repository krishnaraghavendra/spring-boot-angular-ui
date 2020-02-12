import {RenderAdapter} from './renderadapter';

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('../dist/server/main');

new RenderAdapter(AppServerModuleNgFactory, LAZY_MODULE_MAP, '<rzm-iana-tld-manager></rzm-iana-tld-manager>');
