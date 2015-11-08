/**
 * Created by ryanki10 on 05/11/15.
 */

export class NowShowingController {
  public showing: any;
  public actions: any;

  /** @ngInject */
  constructor() {
    this.showing = {
      today: 'Minions II',
      comingSoon: 'Berk von Ritter'
    };
    this.actions = {
      component: 'nowShowingToday({})',
      caption: 'Today'
    };
  }

}

