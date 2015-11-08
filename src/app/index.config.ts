/** @ngInject */
export function config($logProvider: ng.ILogProvider, toastrConfig: any, $mdIconProvider: any) {
  // enable log
  $logProvider.debugEnabled(true);
  // set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
  $mdIconProvider
    .defaultIconSet('./assets/sprites/svg-sprite-navigation.svg');
}
