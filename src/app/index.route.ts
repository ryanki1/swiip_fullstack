/** @ngInject */
export function routerConfig($componentLoaderProvider: any, _: _.LoDashStatic) {
  $componentLoaderProvider.setTemplateMapping((name: string) => {
    if (name === 'main') {
      return 'app/' + name + '/' + name + '.html';
    } else {
      return 'app/components/' + _.kebabCase(name) + '/' + _.kebabCase(name) + '.html';
    }
  });
}

/** @ngInject */
export class RouterController {
  constructor($router: any) {
    $router.config([
      { path: '/', component: 'main' },
      { path: '/nowShowing', component: 'nowShowing'},
      { path: '/nowShowingToday', component: 'nowShowingToday'}
    ]);
  }
}
