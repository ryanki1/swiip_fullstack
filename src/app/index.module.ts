/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig, RouterController } from './index.route';
import { runBlock } from './index.run';
import { MainController } from '../app/main/main.controller';
import { NowShowingController } from '../app/components/now-showing/nowShowing.controller';
import { NowShowingTodayController } from '../app/components/now-showing-today/nowShowingToday.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';
import { actionBarDirective } from '../app/components/now-showing-action-bar/action-bar.directive';

declare var malarkey: any;
declare var moment: moment.MomentStatic;
declare var _: _.LoDashStatic;

module swiipFullstack {
  'use strict';

  angular.module('swiipFullstack', ['ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngNewRouter', 'ngMaterial', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('_', _)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .controller('RouterController', RouterController)
    .controller('MainController', MainController)
    .controller('NowShowingController', NowShowingController)
    .controller('NowShowingTodayController', NowShowingTodayController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey)
    .directive('actionBar', actionBarDirective);

}
