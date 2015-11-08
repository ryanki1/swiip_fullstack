/**
 * Created by ryanki10 on 08/11/15.
 */

/** @ngInject */
export function actionBarDirective(): ng.IDirective {

  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: './app/components/now-showing-action-bar/action-bar-tpl.html',
    controller: ActionsBarController,
    controllerAs: 'vm',
    bindToController: {
      actions: '='
    }
  }

}

/** @ngInject */
export class ActionsBarController {
  public actions: any;
}