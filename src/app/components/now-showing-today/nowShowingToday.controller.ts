/**
 * Created by ryanki10 on 07/11/15.
 */

export class NowShowingTodayController {
  public filmData: any;
  /** @ngInject */
  constructor() {
    this.filmData = {
      title: 'Minions: Teil 2',
      showingAt: '11:00'
    };
  }
}
